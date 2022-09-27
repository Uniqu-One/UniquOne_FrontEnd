import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const FormStyle = styled.div`
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
`;

function InputFormMol(props: {
  onChangeValue:Function
  ref?:any
  name:string;
  label: string;
  type: string;
  text: string;
  value?:string;
  
}) {
  return (
    <>
      <FormStyle>
        <p>{props.label}</p>
        <input name={props.name} onChange={(e) => props.onChangeValue(e)} type={props.type} placeholder={props.text} />
      </FormStyle>
    </>
  );
}

export default InputFormMol;
