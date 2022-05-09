import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TitleEditor = ({setState, name, placeholder}) => {
  const dispatch = useDispatch();

  return (
    <TextField
      name={name}
      placeholder={placeholder}
      fullWidth
      size="middle"
      onChange={function(e) {
        dispatch({
          type: 'TITLE_CHANGE',
          text: e.target.value,
        });
      }}
    />
  );
};

export default TitleEditor;