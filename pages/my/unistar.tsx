import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import PostMdOrg from "../../components/common/org/PostMdOrg";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import MyUniStarTmp from "../../components/my/MyUniStarTmp";
import { ProfileContentsStyle } from "../../components/profile/ProfileContentTmp";
import { UniStarUtils } from "../../lib/utils/UniStarUtils";
import { TokenState } from "../../states/recoil/TokenState";

function UniStar() {
  //TODO - default check 오류 해결

  const token = useRecoilValue(TokenState).token;
  const [uniStar, setUniStar] = useState([]);

  const updateUniStarData = async () => {
    setUniStar(await UniStarUtils.getMyUniStarList(token));
  };
  useEffect(() => {
    updateUniStarData();
  }, []);

  return (
    <>
      <TopTmp type="setting" text="유니스타" />
      <MyUniStarTmp />
      <ProfileContentsStyle>
        {uniStar.map((contents) => {
          let post = {};
          // @ts-ignore
          post.postId = contents.postId;
          // @ts-ignore
          post.postImg = contents.postImgUrl;
          // @ts-ignore
          post.uniStarLevel = contents.uniStarLevel;
          // @ts-ignore
          return <PostMdOrg key={contents.postId} post={post} />;
        })}
      </ProfileContentsStyle>

      <FooterTmp />
    </>
  );
}

export default UniStar;
