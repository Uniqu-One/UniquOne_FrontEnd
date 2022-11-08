import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import QuestionMarkAtm from "../../components/common/atm/QuestionMarkAtm";
import PostMdOrg from "../../components/common/org/PostMdOrg";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import MyUniStarTmp from "../../components/my/MyUniStarTmp";
import { ProfileContentsStyle } from "../../components/profile/ProfileContentTmp";
import { UniStarUtils } from "../../lib/utils/UniStarUtils";
import { TokenState } from "../../states/recoil/TokenState";

function UniStar() { 

  const token = useRecoilValue(TokenState).token;
  const [uniStar, setUniStar] = useState([]);
  const [tempFilter,setTempFilter ] = useState(0)


  const updateUniStarData = async () => {

    if(tempFilter === 0){
      setUniStar(await UniStarUtils.getMyUniStarAllList(token));
    } else {
      setUniStar(await UniStarUtils.getMyUniStarList(token,tempFilter));
    }
    
  };

  useEffect(() => {
    updateUniStarData();
  }, [tempFilter]);


  console.log(uniStar[0])

  return (
    <>
      <TopTmp type="setting" text="유니스타" />
      <ProfileContentsStyle>

      <MyUniStarTmp tempFilter={tempFilter} setTempFilter={setTempFilter}/>
        {uniStar[0] === undefined && (
          <>
          
          <div className="no-data">
            <QuestionMarkAtm />
            <p>현재 유니스타 레벨이 없습니다.</p>
          </div>
          </>
        )}

        {
          <div className="container">
            {uniStar.map((contents) => {
              let post = {};
              // @ts-ignore
              post.postId = contents.postId;
              // @ts-ignore
              post.postImg = contents.postImgUrl;
              // @ts-ignore
              post.uniStarLevel = contents.uniStarLevel;
              // @ts-ignore
              return <PostMdOrg key={contents.postId} post={post} opt="star"/>;
            })}
          </div>
        }
      </ProfileContentsStyle>

      <FooterTmp />
    </>
  );
}

export default UniStar;
