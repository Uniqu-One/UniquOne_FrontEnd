import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import { UserInfoState } from "../../states/recoil/UserInfoState";

function NotiSubscribe() {
  const userId = useRecoilValue(UserInfoState).userId;

  const [data, setData] = useState<any>("");

  const [eventSource, setEventSource] = useState<any>();

  const handleSub = () => {
    setEventSource(
      new EventSource(`${process.env.NEXT_PUBLIC_URL_AWS}/noti/subscribe/` + userId)
    );
  };

  const notiSend = () => {
    eventSource.addEventListener("sse", function (event: any) {
      if (event.data.split(" ")[0] === "EventStream") {
        return null;
      } else {
        setData(JSON.parse(event.data));
        ToastUtils.success('새로운 알림')
      }
    });
  };

  const showNoti = async () => {
    const showNotification = () => {
      const notification = new Notification("유니크원 알림", {
        icon: "https://uniquoneimg.s3.ap-northeast-2.amazonaws.com/img/KakaoTalk_20221017_114329237.png",
        body: data.nickName + data.dsc,
      });

      setTimeout(() => {
        notification.close();
      }, 10 * 1000);
      notification.addEventListener("click", () => {
        window.open(data.url, "_blank");
      });
    };

    let granted = false;

    if (Notification.permission === "granted") {
      granted = true;
    } else if (Notification.permission !== "denied") {
      let permission = await Notification.requestPermission();
      granted = permission === "granted";
    }

    // 알림 보여주기
    if (granted) {
      showNotification();
    }
  };

  useEffect(() => {
    if(userId){
      handleSub();
      showNoti();
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
