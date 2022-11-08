import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color } from "../../styles/theme";
import MainContentTitleAtm from "./MainContentTitleAtm";
import MainRecUserCardMol from "./MainRecUserCardMol";
import { MainUtils } from "../../lib/utils/MainUtils";

const MainRecUserCardContainerStyle = styled.div`
  background-color: ${color.p_gray_lt};
  padding: 18px 0px 24px 18px;
  border-radius: 0 0 12px 12px;
  box-shadow: 1px 2px 2px 1px #00000030;
  > h2 {
    margin-bottom: 12px;
  }

  > div {
    overflow-x: scroll;

    > div {
      
      display: flex;
      width: 200%;

      div {
        margin-right: 12px;
      }
    }
  }

  .container {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function MainRecUserCardTmp() {
  const [usersInfo, setUsersInfo] = useState([]);

  const hadleUpdateUsersInfo = async () => {
    setUsersInfo(await MainUtils.getThisWeekUnicorn());
  };

  useEffect(() => {
    hadleUpdateUsersInfo();
  }, []);


  return (
    <>
      <MainRecUserCardContainerStyle>
        <MainContentTitleAtm
          title={"이번주에 주목할만한 유니콘을 소개합니다! 🦄"}
        />
        <div className="container">
          <div>
            {usersInfo && usersInfo.map(
              (user: {
                cornId: string;
                cornImgUrl: string;
                postImgUrl: string;
                userNickName: string;
              }) => {
                return <MainRecUserCardMol key={user.cornId} user={user} />;
              }
            )}
          </div>
        </div>
      </MainRecUserCardContainerStyle>
    </>
  );
}

export default MainRecUserCardTmp;
