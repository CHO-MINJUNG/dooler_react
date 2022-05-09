import React, {createRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import ImagePreviewer from "./ImagePreviewer";

const ImageUploader = () => {

  //TODO: 이유는 모르겠으나 아래 useSelector를 지우면 이미지 갱신이 안됨;;
  const prevImage0 = useSelector((state) => state.imageList[0]);
  const prevImage1 = useSelector((state) => state.imageList[1]);
  const prevImage2 = useSelector((state) => state.imageList[2]);
  const prevImage3 = useSelector((state) => state.imageList[3]);

  return (
    <div style={{paddingTop: '15px',}}>
      <ImagePreviewer/>
    </div>
  );
}

export default ImageUploader;