import React, { useEffect, useRef, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";

export type chatDataType = {
  senderId: number;
  message: string;
  regDate: string;
};

function ChatRoomTmp() {
  let socket = new SockJS(process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp");
  let reconnect = 0;
  const router = useRouter();
  const token = useRecoilValue(TokenState).token;
  const userId = useRecoilValue(UserInfoState).userId

  const [chatData, setChatData] = useState<chatDataType[]>([]);
  const [roomId, setRoomId] = useState("");
  const [ws, setWs] = useState<CompatClient>();
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const connect = async () => {
    if (ws !== undefined) {
      ws.connect(
        {},
        () => {
          ws.subscribe(
            `/sub/chat/room/${router.query.roomId}`,
            (recMessage: { body: string }) => {
              let recv = JSON.parse(recMessage.body);
              const { message, senderId, regDate } = recv;
              setChatData((prev) => [...prev, { message, senderId, regDate }]);
            }
          );

          ws.send(
            "/pub/chat/message",
            {
              Authorization: token,
            },
            JSON.stringify({
              type: "ENTER",
              chatRoomId: roomId,
              senderId: userId,
            })
          );
        },
        (err: any) => {
          if (reconnect++ <= 5) {
            setTimeout(() => {
              socket = new SockJS(
                process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp"
              );
              setWs(Stomp.over(socket));
              connect();
            }, 10 * 1000);
          }
        }
      );
    }
  };

  useEffect(() => {
    {
      router.query.roomId &&
        axios
          .get(
            `${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/all/${router.query.roomId}`,
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res) => {
            return setChatData(res.data.data.chatResponseDtos);
          })
          .catch((err) => console.error(err));
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId !== "") {
      connect();

      return () => {
        ws?.disconnect();
      };
    }
  }, [roomId]);

  useEffect(() => {
    const query = router.query;
    if (typeof query.roomId === "string" && query.roomId !== "") {
      setRoomId(query.roomId);
      setWs(Stomp.over(() => socket));
    }
  }, [router.query.roomId]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      if (roomId !== "" && chatData === undefined) {
        axios
          .post(`${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/${roomId}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => console.log(res.status))
          .catch((err) => console.log(err));
      }
    };
  }, [chatData]);

  return (
    <>
      <ChatRoomItemBox />

      <ChatRoomOneDayTmp chatData={chatData} setChatData={setChatData} />
      <div ref={scrollRef} />

      <ChatRoomFooterTmp
        setChatData={setChatData}
        ws={ws}
        roomId={
          typeof router.query.roomId === "string" ? router.query.roomId : ""
        }
      />
    </>
  );
}

export default ChatRoomTmp;
