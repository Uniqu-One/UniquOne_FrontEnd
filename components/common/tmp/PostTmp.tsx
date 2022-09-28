import React from "react";
import PostLgOrg from "../org/PostLgOrg";
import PostSmOrg from "../org/PostSmOrg";

function PostTmp(props: { type: string; opt?: string; size?: number }) {
  switch (props.type) {
    case "lg":
      return <PostLgOrg opt={props.opt} />;

    case "sm":
      return <PostSmOrg size={props.size ? props.size: undefined}/>;

    default:
      return <PostLgOrg />;
  }
}

export default PostTmp;
