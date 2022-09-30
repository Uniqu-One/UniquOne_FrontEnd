import styled from "@emotion/styled";
import React from "react";
import { color, styleColor } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";
import ProfileBoxTopMol from "./ProfileBoxTopMol";

const ProfileBoxTmpStyle = styled.div`
  margin: 18px 18px 0px 18px;
  > div {
    :first-of-type {
      margin-bottom: 21px;
    }

    :nth-of-type(2) {
      line-height: 1.1rem;
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
    }
    :nth-of-type(3) {
      margin-top: 9px;
      margin-bottom: 18px;
      color: ${styleColor.blue};
    }
  }
`;

function ProfileBoxTmp() {
  return (
    <>
      <ProfileBoxTmpStyle>
        <ProfileBoxTopMol />

        <div>
          <p>
            시나모롤 덕후샵은 어쩔티비 저쩔시구 우짤래미 드등드시나모롤 덕후샵은
            어쩔티비 저쩔시구 우짤래미 드등드을을시나모롤 덕후샵은 어쩔티비
            저쩔시구 우짤래미 드등드시나모롤 덕후샵은 어쩔티비 저쩔시구 우짤래미
            드등드을을시나모롤 덕후샵은 어쩔티비 저쩔시구 우짤래미
            드등드시나모롤 덕후샵은 어쩔티비 저쩔시구 우짤래미 드등드을을
          </p>
        </div>

        <div>
          <span>http://www.instagram.com</span>
        </div>
      </ProfileBoxTmpStyle>
      <div>
        <BtnTmp size="default" value="콘 수정" />
      </div>
    </>
  );
}

export default ProfileBoxTmp;
