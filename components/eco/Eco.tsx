import styled from '@emotion/styled';
import axios from 'axios';
import Lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
import { color } from '../../styles/theme';


const EcoStyle = styled.div`
  background-color: ${color.p_gray_lt};
  position: relative;
  height: 400px;
  border-bottom: 0.5px solid ${color.p_gray_md};

  .title{
    
    
    color: #7ED321;
    width: 100%;
    top: 48px;
    position: absolute;
    text-align: center;
    p{
      margin-bottom: 6px;
      :first-of-type{
        font-weight: 500;
      }
      :last-of-type{
        font-size: 0.875rem;
      }
    }
  }

  .container {
    position: absolute;
    bottom: 50px;
    z-index: 2;
    display: flex;
    div{
    position: relative;
    svg {
      g{
        :first-of-type{
          background-color: red;
          g{
            :first-of-type{
              background-color: blue;
              g{
                :first-of-type{
                  background-color: green;
                  opacity: 0;
                }
              }
            }
          }
        }
      }
      scale: 2;
      path{
        fill-opacity: 10;
      }
    }
    p {
      color: #7ED321;
      position: absolute;
      width: 100%;
      text-align: center;
      z-index: 2;
      bottom: -5%;
      /* bottom: -12px; */
    }}
  }
`;


function Eco() {

  const [data, setData] = useState();

  const moveCarbone = useRef(null);
  const moveDistance = useRef(null);
  const moveWater = useRef(null);
  const moveEco = useRef(null);

  

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/eco/allSum`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.error(err));


    if (moveEco.current)
    Lottie.loadAnimation({
      container: moveEco.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../public/assets/images/animation/ecoMainMove.json"),
    });

    if (moveCarbone.current)
      Lottie.loadAnimation({
        container: moveCarbone.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/carboneMove.json"),
      });

    if (moveDistance.current)
      Lottie.loadAnimation({
        container: moveDistance.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/DistanceMove.json"),
      });

    if (moveWater.current)
      Lottie.loadAnimation({
        container: moveWater.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/waterMove.json"),
      });
  }, []);

  let water,carbon,distance;
  if(data){
    //@ts-ignore
    water = data.water;
    //@ts-ignore
    carbon = data.carbon;
    //@ts-ignore
    distance = data.distance
  }

  return (
    <>
    
    <EcoStyle>
    <div className='title'>
      <p>지금껏 유니콘들이 지켜온 환경지수에요 :{')'}</p>
    </div>
    <div ref={moveEco}>

    </div>
    <div className='container'>

      <div ref={moveCarbone}>
        
        <p>
          탄소<br/>
          <CountUp end={carbon} duration={2} />KG
        </p>
      </div>
      <div ref={moveDistance}>
        <p>
        거리<br/>
          <CountUp end={distance} duration={6} />KM
        </p>
      </div>
      <div ref={moveWater}>
        <p>
        물<br/>
          <CountUp end={water} duration={3} />L
        </p>
      </div>
      </div>
    </EcoStyle>
    </>
  )
}

export default Eco