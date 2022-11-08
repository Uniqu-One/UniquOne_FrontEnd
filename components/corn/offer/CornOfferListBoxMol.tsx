import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";
import { CornOfferType } from "./CornOfferListTmp";

const CornOfferListBoxMolStyled = styled.div`
  height: 84px;
  display: flex;
  justify-content: space-between;
  padding: 0px 18px;
  border-bottom: 0.5px solid ${color.p_gray_lt};

  .left {
    margin: auto 0;
    display: flex;

    .infos {
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      color: ${color.p_gray_dk};
      font-weight: 500;
      margin: 3px 0;
    }

    .price {
      color: ${color.p_gray_md};
      font-size: 0.875rem;
      margin: 3px 0;
    }

    .offers {
      font-size: 0.875rem;
      margin: 3px 0;

      .offer {
        color: ${color.p_pruple};
      }
      .ok {
        color: ${color.p_green};
        ::before {
          content: "·";
        }
      }
      .no {
        color: ${color.p_red};
        ::before {
          content: "·";
        }
      }
    }
  }

  .icon {
    margin: auto 0;
    fill: ${color.p_gray_dk};
  }
`;

function CornOfferListBoxMol(props: { offer: CornOfferType }) {
  const router = useRouter();
  useEvaIcon();

  //@ts-ignore
  const { acceptCount, postId, postImg, price, postPrice, refuseCount, waitingCnt } =
    props.offer;

  //@ts-ignore
  if(props.offer === "Loading"){
    return <></>
  }



  return (
    <>
      <CornOfferListBoxMolStyled onClick={() => router.push(`/corn/offer/${postId}`)}>
        <div className="left">
          <div className="item_box">
            <img   src={postImg} alt="dummy img" width="60px" height="60px" />
          </div>
          <div className="infos">
            <div className="title">
              <p>제목</p>
            </div>
            <div className="price">
              
              <p>
              ₩
                {price === undefined && postPrice.toLocaleString()}
                {postPrice===undefined && price.toLocaleString()}
                원
                
                </p>

            </div>
            <div className="offers">
              <span className="offer">
                {acceptCount + refuseCount + waitingCnt}개 제안
              </span>
              {acceptCount !== 0 && (
                <span className="ok">{acceptCount}개 수락</span>
              )}
              {refuseCount !== 0 && (
                <span className="no">{refuseCount}개 거절</span>
              )}
            </div>
          </div>
        </div>
        {postPrice ? (
          <></>
        ) : (
          <div className="icon">
            <i
              data-eva="arrow-ios-forward-outline"
              data-eva-width="30px"
              data-eva-height="30px"
            ></i>
          </div>
        )}
      </CornOfferListBoxMolStyled>
    </>
  );
}

export default CornOfferListBoxMol;
