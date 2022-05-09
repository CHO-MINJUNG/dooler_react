import {React, useState} from "react";
import TitleEditor from "./TitleEditor";
import OfficeInfoEditor from "./OfficeInfoEditor";
import { Provider } from "react-redux";
import { createStore } from "redux";
import contentReducer from './contentSlice';
import ImageUploader from "./ImageUploader";
import ThumnbnailEditor from "./ThumbnailEditor";

const FormContainer = () => {
  const contentStore = createStore(contentReducer);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div style={{paddingTop: '10px'}}>
      <Provider store={contentStore}>
        <TitleEditor
          placeholder={"제목을 입력해주세요"}
        />
        {/* <OfficeImageContainer imageList={renderImageListOrDefault(data.image_link)}></OfficeImageContainer> */}
        <ImageUploader/>
        <OfficeInfoEditor></OfficeInfoEditor>
      </Provider>
    </div>
  );
};

export default FormContainer;