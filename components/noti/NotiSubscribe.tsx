import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SubscribeState } from "../../states/recoil/SubscribeState";

import { UserInfoState } from "../../states/recoil/UserInfoState";
import { ToastUtils } from "../common/tmp/ToastTmp";

function NotiSubscribe() {
  const userId = useRecoilValue(UserInfoState).userId;

  const [eventSource, setEventSource] = useState<any>();
  const [subStats, setSubState] = useRecoilState(SubscribeState)

  const handleSub = () => {
    setEventSource(
      new EventSource(`${process.env.NEXT_PUBLIC_URL_AWS}/noti/subscribe/` + userId)
    );
    setSubState(true)
  };

  const notiSend = () => {
    eventSource.addEventListener("sse", function (event: any) {
      if (event.data.split(" ")[0] === "EventStream") {
        return null;
      } else {
        const data = (JSON.parse(event.data))
        
        if(data.notiType === "COMMENT"){
          //@ts-ignore
          ToastUtils.comment(`내 게시물에 댓글이 달렸습니다.`);
        }

        
      }
    });
  };

  useEffect(() => {
    if (userId && !eventSource && (subStats===false)) {
      eventSource?.close();
      handleSub();
    }
  }, [userId]);

  useEffect(() => {
    if (eventSource) {
      notiSend();
    }
  }, [eventSource]);

  return <></>;
}

export default NotiSubscribe;
