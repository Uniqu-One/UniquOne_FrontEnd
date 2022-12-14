import React from "react";
import PostLgOrg from "../org/PostLgOrg";
import PostMdOrg from "../org/PostMdOrg";
import PostSmOrg from "../org/PostSmOrg";

function PostTmp(props: { type: string; opt?: string; size?: number, imgUrl?:string }) {
  switch (props.type) {
    case "lg":
      return <PostLgOrg opt={props.opt} imgSrc={props.imgUrl}/>;

    case "sm":
      return <PostSmOrg size={props.size ? props.size : undefined} imgUrl={props.imgUrl}/>;

    case "md":
      return <PostMdOrg opt={props.opt} />;

    default:
      return <PostLgOrg />;
  }
}

export default PostTmp;
