import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import BtnTmp from "../../common/tmp/BtnTmp";

function CornRegImageMol(props: {
  inputs: { cornName: string; cornDesc: string };
  imgFile?: File;
}) {
  const { cornName, cornDesc } = props.inputs;
  const imgfile = props.imgFile;

  const router = useRouter();

  const onSubmitReg = async () => {
    if (imgfile) {
      const formData = new FormData();
      formData.append("imgfile", imgfile);
      const cornData = {
        userId: 8,
        title: cornName,
        dsc: cornDesc,
      };

      console.log(cornData);

      const blob = new Blob([JSON.stringify(cornData)], {
        type: "application/json",
      });

      formData.append("cornCreateDto", blob);

      await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then((res) => {
          if (res.status === 200) {
            handleRegCorn();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRegCorn = () => {
    router.replace("/redirect/corn");
  };

  return (
    <div onClick={() => onSubmitReg()}>
      <BtnTmp size="default" value="콘 개설하기" />
    </div>
  );
}

export default CornRegImageMol;
