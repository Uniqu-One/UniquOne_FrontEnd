import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import MainContentTitleAtm from "./MainContentTitleAtm";
import MainRecUserCardMol from "./MainRecUserCardMol";
import { mainRecUserCardsDummy } from "../../public/assets/datas/mainRecUserCardsDummy";

const MainRecUserCardContainerStyle = styled.div`
  background-color: ${color.p_gray_lt};
  padding: 18px 0px 18px 18px;

  > h2 {
    margin-bottom: 12px;
  }

  > div {
    overflow-x: scroll;
    /* background-color: red; */

    > div {  
      /* background-color: blue; */
      display: flex;
      width: 170%;

      div{
        margin-right: 12px;
      }
    }
  }
`;

function MainRecUserCardTmp() {
  return (
    <>
      <MainRecUserCardContainerStyle>
        <MainContentTitleAtm
          title={"이번주에 주목할만한 유니콘을 소개합니다! 🦄"}
        />
        <div>
          <div>
            {mainRecUserCardsDummy.map((user) => {
              return <MainRecUserCardMol key={user.id} />;
            })}
          </div>
        </div>
      </MainRecUserCardContainerStyle>
    </>
  );
}

export default MainRecUserCardTmp;
