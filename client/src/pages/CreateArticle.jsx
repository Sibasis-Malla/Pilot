import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, TextField, Typography, styled } from "@mui/material";
import { createPost } from "../Lens/utils/setPublication";
import { v4 as uuidv4 } from "uuid";
import converter from "html-to-markdown";
import client from "../Lens/utils/ipfs";
import { getPublications } from "../Lens/query";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#7f5af0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7f5af0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#7f5af0",
    },
    "&:hover fieldset": {
      borderColor: "#7f5af0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7f5af0",
    },
  },
});

const CreateArticle = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const markup = convertedContent
    ? converter.convert(convertedContent)
    : convertedContent;

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const handle = async () => {
    const obj = {
      version: "1.0.0",
      metadata_id: uuidv4(),
      content: markup,
      attributes: [],
      external_url: null,
      name: "this is heaven",
      attributes: null,
      image: "https://res.cloudinary.com/doybtqm8h/image/upload/v1655456517/fw9poxxmang3uyew3xen.jpg",
      imageMimeType: 'image/jpeg',
      media: null,
      animation_url: null,
      appId: null,
    };
    const result = await client.add(JSON.stringify(obj));
    const str = "https://ipfs.io/ipfs/";
    const finalResult = str.concat(String(result.path));
    console.log(finalResult);
    //console.log(result)
    const res = await createPost("0x292f", finalResult);
    console.log(result);
  };
  const handlePub = async () => {
    const obj = {
      profileId: '0x292f',
      publicationTypes: ["POST", "COMMENT", "MIRROR"],
      limit: 10,
    };
    const res = await getPublications(obj);
    console.log(res);
  };

  //console.log(typeof convertedContent);

  return (
    <div className="App">
      <Typography
        variant="h4"
        sx={{ my: 5, color: " #fffffe" }}
        fontWeight={700}
        gutterBottom
      >
        Drop your thoughts
      </Typography>
      <CssTextField
        sx={{ mb: 3 }}
        autoComplete="title"
        name="titlr"
        required
        InputLabelProps={{
          style: { color: " #fffffe" },
        }}
        InputProps={{
          style: { color: "#fffffe" },
        }}
        fullWidth
        id="title"
        label="Title"
        autoFocus
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#7f5af0" }}
        onClick={handle}
      >
        Publish
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#7f5af0" }}
        onClick={handlePub}
      >
        getPublish
      </Button>
    </div>
  );
};

export default CreateArticle;
