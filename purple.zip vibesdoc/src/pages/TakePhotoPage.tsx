import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Plugins, CameraResultType } from '@capacitor/core';
import { translationContext } from '../services/TranslateService';
import * as logo from '../assets/images/logo.png';
import * as videocall from '../assets/images/videocall.png';
import Footer from '../components/Footer';
import './style.css';

const { Camera } = Plugins;

const takePicture = async () => {
  try {
    const testPhoto = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      saveToGallery: true,
      resultType: CameraResultType.Base64,
    });
    console.log(testPhoto);
    // testPicture = testPhoto.base64String;
  } catch (error) {
    console.error(error);
  }
};

const TakePhotoPage = () => {
  const [t] = useContext(translationContext);
  return (
    <div>
      <div id="pagelogo">
        <Link to="/">
          <img alt="logo" width="150" src={String(logo)} />
        </Link>
      </div>
      <div id="centered">
        <h1>{t.TAKEPHOTO_PAGE_HEADER}</h1>
        <h3>Unsure if you’ve had COVID?</h3>
        <img alt="videoinstructions" width="40%" src={String(videocall)} />
        <h5>Upload your test to find out!</h5>
        <Button id="button" type="submit" variant="contained" onClick={() => takePicture()}>
          {t.TAKEPHOTO_PAGE_BTN}
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default TakePhotoPage;
