import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import TopTmp from "../../common/tmp/TopTmp";
import PostSingleBottomSheetMol from "./PostSingleBottomSheetMol";

function PostSingleFooterOfferMol() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleOpenOffer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <p onClick={handleOpenOffer} className="offer">
        가격제안
      </p>

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <TopTmp type="postOffer" function={setOpen} />
        <PostSingleBottomSheetMol />
      </BottomSheet>
    </div>
  );
}

export default PostSingleFooterOfferMol;
