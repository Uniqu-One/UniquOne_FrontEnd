import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Paging from "../animation/paging";
import FooterTmp from "../common/tmp/FooterTmp";
import PostTmp from "../common/tmp/PostTmp";

const MyStyleSelectContentMolStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 18px;
  margin-bottom: 54px; // Footer
  div {
    div {
      margin: 3px 0px;
    }
  }
  .unSelected {
    opacity: 40%;
  }
`;

function MyStyleSelectContentMol() {
  const notify = () => toast.error("최소한 하나의 스타일을 선택해주세요!");

  const router = useRouter();

  const STYLE_DUMMY = [1, 2, 3, 4, 5, 6];

  const [selected, setSelected] = useState<number[]>([]);
  const [btnStatus, setStatus] = useState(false);

  const handleChangeList = (item: number) => {
    if (selected.includes(item)) {
      const newArr = selected.filter((key) => key !== item);
      setSelected(newArr);
    } else {
      setSelected((prev) => [...prev, item]);
    }
  };

  const handleSubmitStyle = () => {
    if (btnStatus) {
      router.replace("/redirect/style");
    } else {
      notify();
    }
  };

  useEffect(() => {
    if (selected.length > 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [selected]);

  return (
    <>
      <Toaster />
      <MyStyleSelectContentMolStyle>
        {STYLE_DUMMY.map((item) => {
          const status = selected.includes(item);

          return (
            <div
              key={item}
              onClick={() => handleChangeList(item)}
              className={status ? "selected" : "unSelected"}
            >
                <PostTmp type="lg" />
            </div>
          );
        })}
      </MyStyleSelectContentMolStyle>

      <div onClick={() => handleSubmitStyle()}>
        <FooterTmp type="btn" text="선택 완료하기" status={btnStatus} />
      </div>
    </>
  );
}

export default MyStyleSelectContentMol;
