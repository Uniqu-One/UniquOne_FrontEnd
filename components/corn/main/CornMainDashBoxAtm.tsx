import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const CornMainDashBoxAtmStyle = styled.div`
  height: 60px;
  background-color: white;
  width: calc((100vw - 54px) / 4);
  border-radius: 9px;
  text-align: center;
  

  >div{
    height: 100%;
    display: block;
    margin: auto;

    color: ${color.p_gray_dk};
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
      font-weight: 650;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    p{
      font-size: 0.875rem;
    }
  }
`;

function CornMainDashBoxAtm(props:{title:string, value:number}) {

  return (
    <CornMainDashBoxAtmStyle>
      <div>
        <div>
          <h3>+{props.value}</h3>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    </CornMainDashBoxAtmStyle>
  );
}

export default CornMainDashBoxAtm;
