import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import { color } from "../../styles/theme";
import CommentMyFuncMol from "./CommentMyFuncMol";
import { CommentType } from "./CommentTmp";

const CommentOrgStyle = styled.div<{ type: string; mine: boolean }>`
  .comment_box {
    display: flex !important;
    padding: 12px 18px 9px;
    margin-left: ${(props) => (props.type === "head" ? "0px" : "48px")};

    img {
      border-radius: 100%;
    }

    .img_circle {
      border-radius: 100%;
      border: 1px solid
        ${(props) => {
          return props.mine ? color.p_pruple : color.p_gray_lt;
        }};
    }

    > div {
      :first-of-type {
        margin-right: 12px;
      }
      :last-of-type {
        width: ${(props) =>
          props.type === "head" ? "calc(100vw - 96px)" : "calc(100vw - 146px)"};
      }
    }
  }
`;
const CommentUserStyle = styled.div`
  line-height: 1.1rem;
  font-size: 0.875rem;
  margin-bottom: 6px;

  .head {
    font-weight: 700;
    margin-right: 6px;
  }
  .tail {
    color: ${color.p_pruple};
    margin-right: 6px;
  }
`;
const CommentAncorStyle = styled.div`
  display: flex;
  p {
    font-size: 0.75rem;
    :first-of-type {
      color: ${color.p_gray_md};
      margin-right: 9px;
    }
    :last-of-type {
      color: ${color.p_gray_dk};
      font-weight: 700;
    }
  }
`;

function CommentOrg(props: {
  comment: CommentType;
  setTempParent: Function;
  userId?: number;
}) {
  const {
    parentId,
    content,
    writerNick,
    regDate,
    commentId,
    children,
    cornImgUrl,
    parentNickname,
    userId,
  } = props.comment;
  
  const { setTempParent } = props;
  const userIdAtom = props.userId;


  const handleChangeTempParent = () => {
    setTempParent(commentId);
  };

  const sliderRef = useRef(null);
  const [temp, setTemp] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 30,
    slidesToShow: 1,
    slidesToScroll: 0.25,

    afterChange: (current: number) => {
      setTemp(current);
    },
  };

  useEffect(() => {
    if(temp > 0){
      setTempParent(-1)
    }

    if (temp > 0.25 || temp === 0) {
      setTimeout(() => {
        // @ts-ignore
        sliderRef?.current?.slickGoTo(0);
        setTempParent(0)
      }, 10);
      
    }
  }, [temp, sliderRef.current]);

  return (
    <CommentOrgStyle
      type={parentId ? "tail" : "head"}
      mine={
        userIdAtom !== undefined && userIdAtom === props.comment.userId
          ? true
          : false
      }
    >
      <Slider ref={sliderRef} {...settings}>
        <div className="comment_box">
          <div className="img_circle">
            <img  
              src={cornImgUrl ? cornImgUrl : "/assets/images/dummyUserImg.jpg"}
              alt="user dummy"
              width="48px"
              height="48px"
            />
          </div>
          <div>
            <CommentUserStyle>
              <p>
                <span className="head">{writerNick}</span>
                <span className="tail">
                  {parentNickname && "@" + parentNickname}
                </span>
                {content}
              </p>
            </CommentUserStyle>
            <CommentAncorStyle>
              <p>{regDate}시간 전 </p>
              <p onClick={() => handleChangeTempParent()}>답글달기</p>
            </CommentAncorStyle>
          </div>
        </div>

        {userIdAtom !== undefined && userIdAtom === props.comment.userId && (
          <CommentMyFuncMol commentId={commentId} setTempParent={setTempParent}/>
        )}
      </Slider>
    </CommentOrgStyle>
  );
}

export default CommentOrg;
