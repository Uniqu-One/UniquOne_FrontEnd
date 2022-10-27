import React from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import CornOfferList from '../../components/corn/offer/CornOfferListTmp'
import CornOfferSingleBoxOrg from '../../components/corn/offer/CornOfferSingleBoxOrg'
import CornOfferSingleSelectMol from '../../components/corn/offer/CornOfferSingleSelectMol'
import MyOfferListMol from '../../components/my/MyOfferListMol'

function offer() {
  return (
    <>
      <TopTmp text='내 오퍼 내역'/>
        <MyOfferListMol/>
      <FooterTmp/>
    </>
  )
}

export default offer