import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../../hooks/useEvaIcon";
import { color } from "../../../styles/theme";

const FormStyle = styled.div`
  position: relative;
  margin: 0 18px 3px;
  height: 42px;
  line-height: 42px;
  display: flex;
  font-size: 0.875rem;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  p {
    color: ${color.p_gray_dk};
    width: 50px;
    margin-right: 24px;
  }
  input {
    ::placeholder {
      color: ${color.p_gray_md};
    }
    width: 70%;
    border: none;
  }
  span {
    position: absolute;
    right: 0;
    top: 8px;
    fill: ${color.p_gray_dk};
    width: 48;
  }
`;

function InputFormMol(props: {
  onChangeValue: Function;
  name: string;
  label: string;
  type: string;
  text: string;
  value?: string;
}) {
  const [removeIcon, setRemoveIcon] = useState(false);

  useEvaIcon();

  useEffect(() => {
    if (props.value !== "") {
      setRemoveIcon(true);
    } else {
      setRemoveIcon(false);
    }
  }, [props.value]);

  console.log(removeIcon);

  return (
    <>
      <FormStyle>
        <p>{props.label}</p>
        <input
          name={props.name}
          onChange={(e) => props.onChangeValue(e)}
          type={props.type}
          placeholder={props.text}
        />

        {removeIcon ? (
          <span>
            <i data-eva="close-circle-outline" data-eva-width="20px"></i>
          </span>
        ) : (
          <></>
        )}
      </FormStyle>
    </>
  );
}

export default InputFormMol;
