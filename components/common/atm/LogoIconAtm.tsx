import Image from 'next/image'
import React from 'react'

function LogoIconAtm(props:{width:number, height:number, color?:'string'}) {
  return (
    <img   src="/assets/icons/logoIcon.svg" alt="logoIcon" width={props.width} height={props.height}/>
  )
}

export default LogoIconAtm