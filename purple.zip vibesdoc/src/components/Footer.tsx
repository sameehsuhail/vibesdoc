import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import useGlobalCommonStyles from '../useGlobalCommonStyles';

const hStyle = {
  color: 'black',
};

const qStyle = {
  fontWeight: 'bold' as 'bold',
};

const pStyle = {
  color: "#ae50f9"
}

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0.3rem 1rem',
    // padding: '0.3rem 3rem',
    background: theme.palette.background.default,
    color: theme.palette.common.white,
    fontSize: '12px',
  },
  faq: {
    '&:hover': {
      cursor: 'pointer',
      filter: 'drop-shadow(0 0 0.3rem silver)',
      transition: 'filter 0s',
    },
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  const globalClasses = useGlobalCommonStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* eslint-disable */
  const body = (
    <div className={globalClasses.modalBody}>
      <h2 style={hStyle}>FAQs</h2>
      <p style={pStyle}>
        For general information about Coronavirus and COVID-19 please follow
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="blank" style={{ color: "#ef97fd" }}> CDC guidelines </a>
      </p>
      <h4 style={hStyle}>About the Questionnaire </h4>
      <p style={qStyle}>Why is the questionnaire so long? </p>
      <p style={pStyle}>In order to give the most reliable prediction our software leverages various sources of data, thus the most complete and exhaustive information is required for an accurate prediction.</p>
      <p style={qStyle}>Do I have to answer all questions?</p>
      <p style={pStyle}>YES! We know it’s a lot, but complete information will allow our algorithm to give the most reliable prediction of your potential exposure and antibody levels.</p>
      <p style={qStyle}>I did not perform an antibody test, can I still use your questionnaire?</p>
      <p style={pStyle}>Yes you can. Our questionnaire works much better when it is combined with an antibody test, however, our algorithm can still predict with some accuracy whether you’ve had COVID even if you haven’t done an antibody test. </p>
      <h4 style={hStyle}>About antibody tests </h4>
      <p style={qStyle}>What does an antibody test tell me?</p>
      <p style={pStyle}>Most COVID antibody tests look for the presence of IgM and IgG antibodies specific against SARS-CoV-2 (coronavirus). These antibodies tend to accumulate to detectable levels during or after your recovery, and as such are not good indicators of an early infection, nor do they definitely tell you whether you are or are not infectious. If the tests detect these antibodies then it is likely that you have had COVID19 and have developed an immune response. If the test does not detect antibodies then you may not have had COVID, or you may have had COVID and the antibodies did not accumulate to high enough levels, they may still be increasing (if you’ve recently been infected), or may have now declined (if you were infected a long time ago). </p>
      <p style={qStyle}>Which is better: an antibody test or a test for viral antigen/RNA? </p>
      <p style={pStyle}>Tests for viral antigens or RNA, like the PCR tests which are counted on official case numbers, are good at very specifically detecting early infection. This is useful as you may get a positive result before you get symptoms or even if you remain asymptomatic. This can help you to get the best treatment if necessary, and also warn you to self-isolate to reduce the risk of spreading COVID-19. However, PCR and viral antigen tests cannot detect previous COVID infections, while antibody tests can. Antibody tests do not tell you whether you’re infectious, but do tell you whether you have COVID antibodies and therefore whether you’ve had COVID in the past. </p>
      <p style={qStyle}>How accurate are antibody tests?</p>
      <p style={pStyle}>About 95% accurate. The accuracy of antibody tests can be broken down into sensitivity (the percentage of people who were confirmed to have COVID by nucleic acid amplification tests, who also showed a positive antibody result) and specificity (the proportion of samples known to be negative because they were taken before the pandemic started, i.e. before 2020, that showed a negative antibody result). Despite this high sensitivity and specificity, it is still possible that in a population with a low prevalence of COVID, that the positive predictive value (PPV) is as low as 50%. For example, a test with 95% sensitivity and 95% specificity used on a population with a COVID prevalence of 5% would have a PPV of 50% and an NPV of 99.7%. This means that if an antibody test is applied to the population at random a positive result means there is a 50% chance that the person has had COVID, and a negative antibody result means there is a 99.7% chance that the person has not had COVID. </p>
      <p style={qStyle}>Why do I need to take the questionnaire, won’t the antibody test be enough? </p>
      <p style={pStyle}>Although antibody tests are reasonably accurate, if they are applied to a population with a low rate of COVID then a positive result is not very predictive. The questionnaire assesses your risk of COVID and the antibody test can confirm or infirm (deny) the prediction. Think of it like having a second opinion on a medical diagnosis: if two doctors independently agree on a diagnosis you can be much more confident than if they disagree</p>
      <h4 style={hStyle}>Taking the antibody test photo </h4>
      <p style={qStyle}>When do I take the photo of the test?</p>
      <p style={pStyle}>After applying the dilution buffer to the test cassette, wait for the amount of time specified by the manufacturer’s instructions. This is usually around 10 minutes. You should notice the fluid flowing up to the far end of the test strip and the control line appearing, you should wait until this control line is no longer getting any stronger, but should not wait more than the manufacturer’s recommended time limit, which is usually around 20 minutes. </p>
      <p style={qStyle}>How should I take a photo of the test?</p>
      <p style={pStyle}>Once the test cassette is ready, please lay it on a flat surface with a plain dark background. If you have no dark surfaces you can use a dark piece of paper or clothing or just choose a plain surface of any colour. To prevent you sharing any private information, please try to avoid including any other identifiable information in the picture, such as your hand, your name written on the test strip etc. Ideally, there should be even illumination from above, but if there is one strong lightsource point the strip towards it to reduce the shadows on the test strip. We recommend not using a flash as this tends to bleach out the lines on the test strip. Try to hold your phone or camera as still as possible when taking the picture, particularly in low light conditions. Pick the best photo and upload, but don’t worry too much, our image classification algorithm is pretty smart!</p>
      <h4 style={hStyle}>Data privacy </h4>
      <p style={qStyle}>Are my results public?</p>
      <p style={pStyle}>No, your results are not public. Your personally identifiable results will not be shared with anyone, (including researchers, organisations, or governments) outside of Silibrain LLC. Silibrain LLC maintains this data only for reference with our clinicians under the strictest of privacy policies as with any of our patient’s data. You maintain every right to have your responses immediately deleted from our patient records and hence automatically from all of our de-identified research datasets at any time by contacting privacy@vibesdoc.com</p>
      <p style={qStyle}>What will happen with my data? How is it stored and distributed?</p>
      <p style={pStyle}>Your deidentified/anonymised data (no possible way of connecting the data with you), will be used for research purposes. Your data is stored with the highest security standards according to HIPAA and GDPR regulations. </p>
      <p style={qStyle}>Do you keep my data private?</p>
      <p style={pStyle}>Yes, your personally identifiable results will not be shared with anyone, (including researchers, organisations, or governments) outside of Silibrain LLC. Silibrain LLC maintains this data only for reference with our clinicians under the strictest of privacy policies as with any of our patient’s data. You maintain every right to have your responses immediately deleted from our patient records and hence automatically from all of our de-identified research datasets at any time by contacting privacy@vibesdoc.com.</p>
      <h4 style={hStyle}>My Results </h4>
      <p style={qStyle}>Where can I find my results?</p>
      <p style={pStyle}>Your results should have been sent to the email address you provided within a few minutes of clicking submit on the questionnaire. If you can’t find the email try checking in your spam folder, or try redoing the questionnaire. If you still don’t get an email please email info@chhp.com. </p>
      <p style={qStyle}>Is my result reviewed by a medical professional?</p>
      <p style={pStyle}>No. The process has been reviewed by several medical professionals, but each individual result is not independently reviewed by a medical professional. </p>
      <p style={qStyle}>I’ve got my questionnaire result, do I still have to take the COVID antibody test?</p>
      <p style={pStyle}>If you only took the questionnaire and got a positive or negative result, you can make the diagnosis much more accurate by taking an antibody test. If you want to know whether you’ve had COVID we do not recommend relying on the questionnaire alone.</p>
      <p style={qStyle}>What does my result mean? </p>
      <p style={pStyle}>If you have completed the questionnaire and test you should have received a detailed report by email which explains your personal results. The most likely outcomes are that either the test strip and our algorithm agree that you have had COVID, or they agree that you have not had COVID. In this case you can be confident that the results are likely to be correct. If the antibody test and the algorithm disagree this may mean that the test result was a false positive or negative. In this scenario we recommend repeating the test. </p>
      <p style={qStyle}>My result was negative, does it mean I did not have COVID?</p>
      <p style={pStyle}>If the algorithm and test strip both gave a negative result it means that you are unlikely to have had COVID and you probably have no IgM or IgG antibodies specific to SARS-CoV2 (Coronavirus). It is possible but unlikely that you did have COVID and did not show the normal symptoms or other indicators and also did not develop a strong antibody response. In this unusual case it may be safer anyway to assume that you have not had COVID. </p>
      <p style={qStyle}>My result was positive, what does it mean?</p>
      <p style={pStyle}>If the algorithm and test strip both gave a positive result it means that you are likely to have had COVID and you likely have IgM and/or IgG antibodies. As of 1st July 2020 there is not enough evidence to suggest that the presence of IgM and IgG antibodies will definitely decrease your chances of catching COVID-19 again, in other words a positive result does not necessarily mean that you are immune. Many studies are being done on the immunity/protection provided by antibodies and this answer will be updated when new evidence arises.</p>
      <p style={qStyle}>My result was positive, does it mean I am now immune?</p>
      <p style={pStyle}>As of 1st July 2020 there is not enough evidence to suggest that the presence of IgM and IgG antibodies will definitely decrease your chances of catching COVID-19 again, in other words a positive result does not necessarily mean that you are immune. Many studies are being done on the immunity/protection provided by antibodies and this answer will be updated when new evidence arises.</p>
      <h4 style={hStyle}>Algorithm </h4>
      <p style={qStyle}>How does the prediction algorithm work?</p>
      <p style={pStyle}>The prediction algorithm is a stochastic expectation maximization algorithm that combines the questionnaire answers with the antibody test result along with the uncertainties associated with each. By providing the algorithm with lots of anonymised patient data it predicts which symptoms (e.g. cough, fever etc) and other indicators (e.g. going to work during lockdown, number of infected housemates etc) are associated with COVID. Then, the trained algorithm is applied to your data to take all the information you supplied and predict how likely you are to have had COVID. The output is a probability distribution which represents how certain the algorithm is that you’ve had or not had COVID. This is then combined with the test outcome and its own uncertainty to modify the probability distribution and give you a final diagnosis and probability distribution. </p>
      <p style={pStyle}>About 98% accurate when combined with approved lateral flow antibody tests. Most FDA EUA approved lateral flow antibody tests have roughly 95% accuracy or higher, but their positive predictive value (if the test result is positive the chance that you have actually had COVID) can be much lower. By combining the questionnaire with the antibody test you can be more confident when both results are the same, which happens most of the time, but you can also be warned when they disagree, which might suggest that the test was a false positive or negative</p>
      <h4 style={hStyle}>Recomendations </h4>
      <p style={qStyle}>Can I share my results?</p>
      <p style={pStyle}>If you would like to share your results, you are free to do so. If you would like to share the website and recommend that friends and family try it out, we would very much appreciate it. </p>
      <p style={qStyle}>Can I use my results as proof of immunity?</p>
      <p style={pStyle}>No, these results are not currently accepted as proof of immunity. As more research is done it may provide evidence that IgM and IgG antibodies provide immunity against reinfection with SARS-CoV-2, at which point certain organisations may decide that this type of result is sufficient proof of immunity. As of 1st July 2020, we are not aware of any diagnosis being accepted as proof of immunity.</p>
      <p style={qStyle}>Can I return to normal daily life? </p>
      <p style={pStyle}>You should follow the recommendations of your local government whether it be to return to normal, or to wear a mask/face covering, maintain physical distancing and avoid crowds or, to practice healthy personal hygiene and infection prevention measures such as hand washing and avoiding touching your face. If your result was positive, then it is likely that you have had COVID and so you might be less likely to suffer from it again, or may be likely to have similar symptoms were you to catch it again as you had during your first infection. It is your decision how to use this information, but we strongly suggest you consider your risk and the risk of others around you. </p>
    </div>
  );
  /* es-lint-enable */
  return (
    <footer className={classes.footer}>
      <p style={pStyle}> 2021 Silibrain LLC | All Right Reserved </p>
      <div onClick={handleOpen} onKeyDown={handleOpen} role="button" tabIndex={0}>
        <p className={classes.faq}>FAQs</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </footer>
  );
};

export default Footer;
