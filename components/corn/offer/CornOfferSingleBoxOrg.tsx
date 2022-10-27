import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import UserImgAtm from "../../common/atm/UserImgAtm";
import MyOfferCheckingMol from "../../my/MyOfferCheckingMol";
import CornOfferNoMol from "./CornOfferSingleNoMol";
import CornOfferOkMol from "./CornOfferSingleOkMol";
import CornOfferSingleSelectMol from "./CornOfferSingleSelectMol";

const CornOfferSingleBoxOrgStyle = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_md};

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
  .right{
      margin: auto 0;
    }
`;

function CornOfferSingleBoxOrg(props: { type: string }) {
  return (
    <>
      <CornOfferSingleBoxOrgStyle>
        <div className="left">
          <div>
            <UserImgAtm width={60} height={60} />
          </div>
          <div className="infos">
            <div className="userId">UserId_is_Here</div>
            <div className="price">
              <span>₩17,000</span> ={">"} ₩15,000
            </div>
            <div className="date">날짜 / 날짜</div>
          </div>
        </div>

        <div className="right">
        {props.type === "select" && <CornOfferSingleSelectMol />}
        {props.type === "ok" && <CornOfferOkMol/>}
        {props.type === "no" && <CornOfferNoMol />}
        {props.type === "check" && <MyOfferCheckingMol/>}
        </div>
      </CornOfferSingleBoxOrgStyle>
    </>
  );
}

export default CornOfferSingleBoxOrg;
