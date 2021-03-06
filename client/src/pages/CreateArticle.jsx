import React, { useState, useContext } from 'react';

// libraries
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import {
  Button,
  TextField,
  Typography,
  styled,
  FormGroup,
  Switch,
  FormControlLabel,
  Grid,
  Container,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

// lens queries
import { createPost } from '../Lens/utils/setPublication';
import client from '../Lens/utils/ipfs';

// context
import Web3Context from '../context';

// css libraries
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomizedInput = styled(TextField)({
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
  const [coverImage, setCoverImage] = useState();
  const [coverImageURI, setCoverImageURI] = useState();
  const [mime, setMime] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState('');
  const [preview, setPreview] = useState(false);
  const { profileId } = useContext(Web3Context);

  const handleCoverImage = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const markup = convertedContent;

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const UploadImage = async (image, ind) => {
    const data = new FormData();
    data.append('file', coverImage);
    data.append('upload_preset', 'mystiq');
    data.append('cloud_name', 'doybtqm8h');
    await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCoverImageURI(data.url);
        setMime(data.format);
        alert('Cover Image Uploaded');
      })
      .catch((err) => console.log(err));
  };

  const handle = async () => {
    const obj = {
      version: '1.0.0',
      metadata_id: uuidv4(),
      content: markup,
      attributes: [],
      external_url: null,
      name: title,
      image: 'https://res.cloudinary.com/doybtqm8h/image/upload/v1655456517/fw9poxxmang3uyew3xen.jpg',
      imageMimeType: 'image/jpeg',
      media: [
        {
          item: coverImageURI,
          type: `image/${mime}`,
        },
      ],
      animation_url: null,
      appId: null,
    };
    const result = await client.add(JSON.stringify(obj));
    const str = 'https://ipfs.io/ipfs/';
    const finalResult = str.concat(String(result.path));
    await createPost(profileId, finalResult);
    alert('Post Published!');
    window.location.href = `/${profileId}/profile`;
  };

  return (
    <Container maxWidth="lg" sx={{ my: 10, mt: 7 }}>
      <div className="App">
        <Typography variant="h4" sx={{ my: 5, color: ' #fffffe' }} fontWeight={700} gutterBottom>
          Drop your thoughts
        </Typography>
        <FormGroup sx={{ color: ' #fffffe', mb: 5, alignItems: 'flex-end' }}>
          <FormControlLabel
            control={
              <Switch checked={preview} onChange={(e) => setPreview(e.target.checked)} aria-label="login switch" />
            }
            label={preview ? 'Write in Editor' : 'Preview'}
          />
        </FormGroup>
        {preview ? (
          <div style={{ color: ' #fffffe' }}>
            <h1>{title} </h1>
            <img style={{ width: '50%' }} src={coverImageURI} alt={title} />
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
          </div>
        ) : (
          <>
            <CustomizedInput
              sx={{ mb: 3 }}
              autoComplete="title"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputGroupFile02" onChange={handleCoverImage} />
                  <label className="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="contained"
                  component="span"
                  sx={{ mb: 3, backgroundColor: '#7f5af0' }}
                  onClick={() => UploadImage()}
                >
                  Upload your cover Image
                </Button>
              </Grid>
            </Grid>
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </>
        )}
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }} onClick={handle}>
          Publish
        </Button>
      </div>
    </Container>
  );
};

export default CreateArticle;
