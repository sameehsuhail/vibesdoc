import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { translationContext } from '../../../services/TranslateService';
import codiApiClient from '../../../services/codi-api-client.service';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect } from 'react';
// import fbLogo from '../../../assets/images/facebook.png';
// import linkedInLogo from '../../../assets/images/LinkedIn.png';
// import twitterLogo from '../../../assets/images/Twitter.png';


const useStyles = makeStyles(() => ({
  root: {
    margin: '5rem 1rem',
    textAlign: 'center',
  },
}));

// const stats = codiApiClient.results

const TwentyResult = () => {
  const [t] = useContext(translationContext);
  const [open, setOpen] = React.useState(true)

  // eslint-disable-next-line @typescript-eslint/semi
  console.log(codiApiClient.getReply)
  useEffect(() => {
    return () => {
      setOpen(false)
    }
  }, [])
  const classes = useStyles();
  // const handleClose=()=>{
  //   setOpen(false)
  // }
  // const handleClickAway = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      {/* <h2>{t.RESULT_PAGE_TITLE}</h2>
      <p>{t.RESULT_PAGE_TEXT}</p> */}
     
            <div style={{width: "520px", height: "46px", fontStyle: "normal", fontWeight: "normal",
            fontSize: "18px", lineHeight: "34px", marginLeft: "15px"
          }}><p>Probability of a positive result, given casa data</p></div>
          <div style={{width: "544px", height: "91px", backgroundColor: "#E3F4EA",
           borderRadius: "12px", textAlign: "center", fontWeight: 700, fontStyle: "normal", fontSize: "24px",
           lineHeight: "34px", letterSpacing: "0.15px", color: "#27AE60", paddingTop: "30px", marginLeft: "15px"
           }}>
             0.20% (highly unlikely)
           </div>
           <br/>
           <br/>
           <br/>
           <div style={{width: "25px", height: "12px", backgroundColor: "#27AE60",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block", marginLeft: "12px"}}></div>
            <div style={{width: "80px", height: "12px", backgroundColor: "#27AE60",
             borderRadius: "4px", transform: "rotate(-180deg)", display: "inline-block"}}></div>
             <div style={{width: "25px", height: "12px", backgroundColor: "#27AE60",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block"}}></div>
            <div style={{width: "80px", height: "12px", backgroundColor: "#E0E0E0",
             borderRadius: "4px", transform: "rotate(-180deg)", display: "inline-block"}}></div>
             <div style={{width: "25px", height: "12px", backgroundColor: "#E0E0E0",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block"}}></div>
            <div style={{width: "80px", height: "12px", backgroundColor: "#E0E0E0",
             borderRadius: "4px", transform: "rotate(-180deg)", display: "inline-block"}}></div>
             <div style={{width: "25px", height: "12px", backgroundColor: "#E0E0E0",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block"}}></div>
            <div style={{width: "80px", height: "12px", backgroundColor: "#E0E0E0",
             borderRadius: "4px", transform: "rotate(-180deg)", display: "inline-block"}}></div>
             <div style={{width: "25px", height: "12px", backgroundColor: "#E0E0E0",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block"}}></div>
            <div style={{width: "80px", height: "12px", backgroundColor: "#E0E0E0",
             borderRadius: "4px", transform: "rotate(-180deg)", display: "inline-block"}}></div>
             <div style={{width: "25px", height: "12px", backgroundColor: "#E0E0E0",
            borderRadius: "4px", transform: "rotate(90deg)", display: "inline-block"}}></div>
            <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#219653",
              marginLeft: "15px", display: "inline-block"}}>0%</div>
             <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#219653", 
             marginLeft: "80px", display: "inline-block"}}>20%</div>
             <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#E0E0E0",
              marginLeft: "80px", display: "inline-block"}}>40%</div>
              <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#E0E0E0",
              marginLeft: "80px", display: "inline-block"}}>60%</div>
              <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#E0E0E0",
              marginLeft: "80px", display: "inline-block"}}>80%</div>
              <div style={{width: "25px", height: "19px", fontFamily: "Avenir Next", fontWeight: 500,
             fontSize: "14px", lineHeight: "19px", textAlign: "center", color: "#E0E0E0",
              marginLeft: "80px", display: "inline-block"}}>100%</div>
              <br/>
              <br/>
             
    </div>
  );
};

export default TwentyResult;