import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";

const FormStyle = styled.div<{status:boolean, show?:boolean, label?:string}>`
  display: ${(props) => (props.show) ? "flex" : "none"};
  position: relative;
  margin: 0 18px 3px;
  height: 42px;
  line-height: 42px;
  font-size: 0.875rem;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  p {
    display: ${(props) => props.label ? "block": "none"};
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
    display: ${(props) => (props.status ? "block" : "none")};
    position: absolute;
    right: 0;
    top: 8px;
    fill: ${color.p_gray_dk};
  }
`;

function InputFormMol(props: {
  show?:boolean
  onChangeValue: Function;
  name: string;
  label?: string;
  type: string;
  text: string;
  value?: string;
  handleButtonClick?:Function
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

  return (
    <>
      <FormStyle status={removeIcon} show={props.show} label={props.label}>
        <p>{props.label}</p>
        <input
          name={props.name}
          onChange={(e) => props.onChangeValue(e)}
          type={props.type}
          placeholder={props.text}
          value={props.value}
        />

        <span >
          <i data-eva="close-circle-outline" data-eva-width="20px"></i>
        </span>
      </FormStyle>
    </>
  );
}

export default InputFormMol;
