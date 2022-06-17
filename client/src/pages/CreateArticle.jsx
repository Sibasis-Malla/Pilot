import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, TextField, Typography, styled } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7f5af0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7f5af0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7f5af0',
    },
    '&:hover fieldset': {
      borderColor: '#7f5af0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7f5af0',
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

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  console.log(typeof convertedContent);

  return (
    <div className="App">
      <Typography
        variant="h4"
        sx={{ my: 5, color: ' #fffffe' }}
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
          style: { color: ' #fffffe' },
        }}
        InputProps={{
          style: { color: '#fffffe' },
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
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }}
      >
        Publish
      </Button>
    </div>
  );
};

export default CreateArticle;
