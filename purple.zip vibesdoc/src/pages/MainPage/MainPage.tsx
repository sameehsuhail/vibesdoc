import * as React from 'react';
import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { translationContext } from '../../services/TranslateService';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as arrow from '../../assets/images/arrow.png';
import * as watch from '../../assets/images/watch.png';
import * as question from '../../assets/images/question.png';
import * as upload from '../../assets/images/upload.png';
import useGlobalCommonStyles from '../../useGlobalCommonStyles';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: '2rem',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  section: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
    marginTop: '1rem',
    borderRadius: '2%',
    padding: '0.5rem 1rem',
    color: theme.palette.primary.dark,
    '&:hover': {
      filter: 'drop-shadow(0 0 0.3rem silver)',
      transition: 'filter 0s',
    },
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));


const MainPage: React.FunctionComponent<null> = () => {
  const [t] = useContext(translationContext);
  const classes = useStyles();
  const commonStyles = useGlobalCommonStyles();
React.useEffect(()=>{
if(localStorage.getItem('questionnaire')){
  localStorage.removeItem('questionnaire')
}
},[])

  return (
    <Grid container alignItems="center">
      <article className={commonStyles.wrapper}>
        <Header />
        <main className={classes.mainContent}>
          <h1 className={classes.textAlignCenter}>{t.MAINPAGE_PAGE_TITLE}</h1>
          <p className={classes.textAlignCenter}>{t.MAINPAGE_PAGE_TEXT}</p>
          <Grid container direction="column" alignItems="center" className={classes.mainContent}>
            <Link to="/questionnaire" className={classes.section}>
              <section aria-label="answer questionnaire" className={classes.sectionContent}>
                <h5>{t.MAINPAGE_PAGE_QUESTIONNAIRE}</h5>
                <img alt="questionnaire" src={String(question)} />
              </section>
              <img alt="go" src={String(arrow)} />
            </Link>
            <Link to="/video-instructions" className={classes.section}>
              <section aria-label="video instructions" className={classes.sectionContent}>
                <h5>{t.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS}</h5>
                <img alt="video" src={String(watch)} />
              </section>
              <img alt="go" src={String(arrow)} />
            </Link>
            {/* <Link to="/take-test-photo" className={classes.section}>
              <section aria-label="upload test image" className={classes.sectionContent}>
                <h5>{t.MAINPAGE_PAGE_TEST_IMAGE}</h5>
                <img alt="upload" src={String(upload)} />
              </section>
              <img alt="go" src={String(arrow)} />
            </Link> */}
          </Grid>
        </main>
        <Footer />
      </article>
    </Grid>
  );
};

export default MainPage;
