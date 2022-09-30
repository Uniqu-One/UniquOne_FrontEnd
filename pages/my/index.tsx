import styled from '@emotion/styled'
import React from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import ProfileBoxTmp from '../../components/profile/ProfileBoxTmp'
import ProfileContentTmp from '../../components/profile/ProfileContentTmp'
import { color } from '../../styles/theme'

const ProfileInterVal = styled.div`
  margin-top: 12px;
  height: 12px;
  background-color: ${color.p_gray_lt};
`

function index() {
  return (
    <>
    <TopTmp type='my'/>

    <ProfileBoxTmp/>
    <ProfileInterVal/>
    <ProfileContentTmp/>
    
    <FooterTmp/>
    </>
  )
}

export default index