import React, { useEffect, useState } from "react";
import BottomSheetColorAtm from "./BottomSheetColorAtm";
import { postMenuListData } from "../../public/assets/datas/postMenuListData";
import styled from "@emotion/styled";
import BottomSheetTopMol from "./BottomSheetTopMol";
import { color } from "../../styles/theme";
import { CornPostState } from "../../states/recoil/CornPostState";
import { useRecoilState } from "recoil";

const BottomSheetPriceMolStyle = styled.div`
  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  .colorAtmStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 18px;

    div {
      margin: 0px 6px;
    }
  }

  .middle {
    padding: 20px 18px;

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

function BottomSheetPriceMol(props: { setOpen: Function; type?: string }) {
  const [tempSelect, setTempSelect] = useState<string[]>([]);

  const [postData, setPostData] = useRecoilState(CornPostState);

  useEffect(() => {
    if (postData.price.length > 0) {
      setTempSelect([postData.price]);
    }
  }, []);

  console.log(tempSelect)

  return (
    <>
      <BottomSheetPriceMolStyle>
        <BottomSheetTopMol
          type="price"
          setOpen={props.setOpen}
          tempSelect={tempSelect}
          setTempSelect={setTempSelect}
        />

        <div className="middle">
          <div>
            <h3>제안 가격</h3>
          </div>
          <div className="price_input">
            <h3>₩</h3>
            <input
              type="number"
              placeholder="가격을 입력해주세요"
              value={tempSelect.toLocaleString()}
              onChange={(e) => setTempSelect([String(e.target.value)])}
            ></input>
          </div>
        </div>
      </BottomSheetPriceMolStyle>
    </>
  );
}

export default BottomSheetPriceMol;
