import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";
import { color } from "../../../styles/theme";
import BtnTmp from "../../common/tmp/BtnTmp";

const PostBottomOfferMolStyle = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    padding: 12px 18px;
    color: ${color.p_gray_dk};

    h3 {
      margin-left: 9px;
      font-weight: 600;
    }

    p {
      font-weight: 600;
    }

    div {
      display: flex;
      margin: auto 0;
    }

    img {
      border-radius: 9px;
    }
  }

  .middle {
    padding: 0 18px;

    border-bottom: 0.5px solid ${color.p_gray_md};
    color: ${color.p_gray_dk};

    h3 {
      font-weight: 500;
      margin-bottom: 12px;
    }

    input {
      border: 0;
      width: 100%;
      height: 30px;
    }

    .price_input {
      display: flex;
      line-height: 30px;
      h3 {
        margin-right: 12px;
      }
    }
  }

  .bottom {
    margin-top: 12px;
  }
`;

function PostBottomOfferMol(props: { setComplete: Function }) {
  const [offerPrice, setOfferPrice] = useState("");

  const { setComplete } = props;

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferPrice(e.target.value);
  };
  return (
    <>
      <PostBottomOfferMolStyle>
        <div className="top">
          <div>
            <div>
              <Image
                src="/assets/images/postImage.jpg"
                alt="dummy post"
                width={42}
                height={42}
              />
            </div>
            <div>
              <h3>글자글자 제목</h3>
            </div>
          </div>
          <div>
            <p>
              <span>32,000</span> 원
            </p>
          </div>
        </div>

        <div className="middle">
          <div>
            <h3>제안 가격</h3>
          </div>
          <div className="price_input">
            <h3>₩</h3>
            <input
              type="number"
              placeholder="가격을 입력해주세요"
              value={offerPrice}
              onChange={(e) => onChangePrice(e)}
            ></input>
          </div>
        </div>

        <div className="bottom" onClick={() => offerPrice && setComplete(true)}>
          <BtnTmp
            size="lg"
            value="제안 보내기"
            status={offerPrice ? true : false}
          />
        </div>
      </PostBottomOfferMolStyle>
    </>
  );
}

export default PostBottomOfferMol;
