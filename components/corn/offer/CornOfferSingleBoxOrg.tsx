import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../../styles/theme";
import UserImgAtm from "../../common/atm/UserImgAtm";
import MyOfferCheckingMol from "../../my/MyOfferCheckingMol";
import { offerDataType } from "../../my/MyOfferListMol";
import CornOfferNoMol from "./CornOfferSingleNoMol";
import CornOfferOkMol from "./CornOfferSingleOkMol";
import CornOfferSingleSelectMol from "./CornOfferSingleSelectMol";

const CornOfferSingleBoxOrgStyle = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_md};

  .itemImg {
    border-radius: 9px;
    border: 0.5px solid ${color.p_gray_md};
    overflow: hidden;
  }

  .cornImg {
    border-radius: 100%;
    border: 0.5px solid ${color.p_gray_md};
    overflow: hidden;
  }

  .left {
    color: ${color.p_gray_dk};
    display: flex;
    font-size: 0.875rem;
    .infos {
      margin: auto 0;
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .userId {
        font-weight: 500;
        margin: 3px 0;
      }
      .price {
        margin: 3px 0;
        span {
          text-decoration: line-through;
          color: ${color.p_gray_lt};
        }
      }
      .date {
        margin: 3px 0;
      }
    }
  }
  .right {
    margin: auto 0;
  }
`;

function CornOfferSingleBoxOrg(props: { offer: offerDataType; type?: string }) {
  const router = useRouter();
  const { type } = props;
  // console.log(props.offer);

  const {
    postId,
    offerId,
    offerCheckDate,
    offerPrice,
    offerRegDate,
    offerType,
    postImg,
    postPrice,
    postTitle,
    cornImg,
    userNickName,
  } = props.offer;

  return (
    <>
      <CornOfferSingleBoxOrgStyle>
        <div
          className="left"
          onClick={() => {
            router.push(`/post/${postId}`);
          }}
        >
          {cornImg && (
            <div className="cornImg">
              <Image loading="lazy" src={cornImg} alt="cornTitle" width={60} height={60} />
            </div>
          )}
          {postImg && (
            <div className="itemImg">
              <Image loading="lazy" src={postImg} alt="postTitle" width={60} height={60} />
            </div>
          )}

          <div className="infos">
            {postTitle && (
              <div className="userId">{postTitle ? postTitle : "제목"}</div>
            )}
            {userNickName && <div className="userId">{userNickName}</div>}

            {postPrice ? (
              <div className="price">
                <span>₩{postPrice && postPrice.toLocaleString()}</span> ={">"} ₩
                {offerPrice.toLocaleString()}
              </div>
            ) : (
              <div className="deatil_price">
                <span>{offerPrice.toLocaleString()}</span>
              </div>
            )}

            <div className="date">
              {offerRegDate} {offerCheckDate && "/ " + offerCheckDate}
            </div>
          </div>
        </div>

        <div className="right">
          {type === "corn"
            ? offerType === "WAITING" && (
                <CornOfferSingleSelectMol offerId={offerId} />
              )
            : offerType === "WAITING" && <MyOfferCheckingMol />}

          {offerType === "ACCEPT" && <CornOfferOkMol />}
          {offerType === "REFUSE" && <CornOfferNoMol />}
        </div>
      </CornOfferSingleBoxOrgStyle>
    </>
  );
}

export default CornOfferSingleBoxOrg;
