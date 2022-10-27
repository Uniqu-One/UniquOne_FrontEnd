import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";

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

function CornOfferListBoxMol() {
  const router = useRouter();
  useEvaIcon();

  return (
    <>
      <CornOfferListBoxMolStyled>
        <div className="left">
          <div>
            <Image
              src="/assets/images/postImage.jpg"
              alt="dummy img"
              width={60}
              height={60}
            />
          </div>
          <div className="infos">
            <div className="title">
              <p>제목</p>
            </div>
            <div className="price">
              <p>₩ 27,000</p>
            </div>
            <div className="offers">
              <span className="offer">5개 제안</span>
              <span className="ok">2개 수락</span>
              <span className="no">5개 거절</span>
            </div>
          </div>
        </div>
        {router.query.offerId ? (
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
