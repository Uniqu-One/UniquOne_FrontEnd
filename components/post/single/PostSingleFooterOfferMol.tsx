import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../../states/recoil/UserInfoState";
import { ToastUtils } from "../../common/tmp/ToastTmp";
import TopTmp from "../../common/tmp/TopTmp";
import PostSingleBottomSheetMol from "./PostSingleBottomSheetMol";

function PostSingleFooterOfferMol(props: { postId: string | number, postData?:{} }) {

  const [open, setOpen] = useState(false);
  const userCornId = useRecoilValue(UserInfoState).cornId
  //@ts-ignore
  const postCornId = props.postData.cornId

  useEffect(() => {
    setOpen(false);
  }, []);

  

  const handleOpenOffer = () => {

    if(userCornId === undefined){
      ToastUtils.toast('콘을 생성하기 전엔 가격제안이 불가능합니다')
      return;
    }

    if(userCornId === postCornId){
      ToastUtils.toast('내 게시물은 가격제안이 불가능합니다')
      return;
    }

    //@ts-ignore
    if(props.postData.price === null){
ToastUtils.toast('스타일 제품은 가격 제안이 불가능합니다')
    return ;
    } else {
      setOpen(!open);
    }
    
  };

  return (
    <div>
      <p onClick={handleOpenOffer} className="offer">
        가격제안
      </p>

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <TopTmp type="postOffer" function={setOpen} />
        <PostSingleBottomSheetMol postData={props.postData} />
      </BottomSheet>
    </div>
  );
}

export default PostSingleFooterOfferMol;
