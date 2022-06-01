import * as React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { translationContext } from '../../services/TranslateService';
import * as logo from '../../assets/images/logo.png';
import Footer from '../../components/Footer';
import './vistyle.css';


const VideoInstructions: React.FunctionComponent<null> = () => {
  const [t] = useContext(translationContext);
  return (
    <div>
      <div id="pagelogo">
        <Link to="/">
          <img alt="logo" width="150" src={String(logo)} />
        </Link>
      </div>
      <div id="centered">
        <h1>{t.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS}</h1>
        <h3>Unsure if you’ve had COVID?</h3>
        <h5>Watch Abingdon Health Video Instructions to learn how to use AbC-19 Rapid Test!</h5>
        <div className="yt">
          <iframe
            title="Video Instructions"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WqT2z8jCEHs"
            frameBorder="0"
            data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          />
        </div>
        <h6>
          This video and all related content is property of Abingdon Health,
          and it is displayed for educational and professional purposes only.
        </h6>
      </div>
      <Footer />
    </div>
  );
};

export default VideoInstructions;
