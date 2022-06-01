import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { translationContext } from "../../../services/TranslateService";
import codiApiClient from "../../../services/codi-api-client.service";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useEffect } from "react";
import fbLogo from "../../../assets/images/facebook.png";
import linkedInLogo from "../../../assets/images/LinkedIn.png";
import twitterLogo from "../../../assets/images/Twitter.png";
import intagramLogo from "../../../assets/images/instagram.svg";
import Line from "../../../assets/images/line.svg";
import storage from "../../../services/storage.service";
import { IQuestionnaireState } from "../QuestionnaireState";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "5rem 1rem",
    textAlign: "center",
  },
}));

// const stats = codiApiClient.results

const QuestionnaireResult = () => {
  const questionnaireFromStorage = storage.getObject(
    "questionnaire"
  ) as IQuestionnaireState;

  const [t] = useContext(translationContext);
  const [open, setOpen] = React.useState(true);
  const [result, setResult] = React.useState(null);
  // eslint-disable-next-line @typescript-eslint/semi

  useEffect(() => {
    let formData = {
      generalInformation: {
        sex: parseInt(questionnaireFromStorage.generalInformation.values.sex),

        age: questionnaireFromStorage.generalInformation.values.age,
        health: questionnaireFromStorage.generalInformation.values.health
          ? parseInt(questionnaireFromStorage.generalInformation.values.health)
          : 0,
        fluVaccine: Boolean(
          questionnaireFromStorage.generalInformation.values.flu
        ),
        mildHeartCondition: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "mildHeartCondition"
        ),
        chronicHeartCondition: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "chronicHeartCondition"
        ),
        mildLungCondition: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "mildLungCondition"
        ),
        chronicLungCondition: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "chronicLungCondition"
        ),
        mildDiabetes: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "mildDiabetes"
        ),
        chronicDiabetes: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "chronicDiabetes"
        ),
        recentCancer: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "recentCancer"
        ),
        pastCancer: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "pastCancer"
        ),
        reducedKidneyFunction: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "reducedKidneyFunction"
        ),
        chronicLiverDisease: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "chronicLiverDisease"
        ),
        onImmunosuppressant: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "onImmunosuppressant"
        ),
        pregnant: questionnaireFromStorage.generalInformation.values.healthProblems.includes(
          "pregnant"
        ),
      },
      locationAndTravel: {
        country: questionnaireFromStorage.locationAndTravel.values.country,
        postcode: questionnaireFromStorage.locationAndTravel.values.postcode,
        region: questionnaireFromStorage.locationAndTravel.values.region,
        travelledToOtherCountries: questionnaireFromStorage.locationAndTravel
          .values.travelledToOtherCountries
          ? parseInt(
              questionnaireFromStorage.locationAndTravel.values
                .travelledToOtherCountries
            )
          : 0,
      },
      travelContinued: {
        highestRiskCountry:
          questionnaireFromStorage.travelContinued.values.highestRiskCountry,
        dateEnteredCountry: questionnaireFromStorage.travelContinued.values
          .dateEnteredCountry
          ? new Date(
              questionnaireFromStorage.travelContinued.values.dateEnteredCountry
            ).getTime()
          : 0,
        dateLeftCountry: questionnaireFromStorage.travelContinued.values
          .dateLeftCountry
          ? new Date(
              questionnaireFromStorage.travelContinued.values.dateLeftCountry
            ).getTime()
          : 0,
      },
      exposureRisk: {
        didWork: questionnaireFromStorage.exposeRisk.values.didWork
          ? parseInt(questionnaireFromStorage.exposeRisk.values.didWork)
          : 0,
        keepDistanceFromOthers: questionnaireFromStorage.exposeRisk.values.avoidCatching.includes(
          "keepDistanceFromOthers"
        ),
        mask: questionnaireFromStorage.exposeRisk.values.avoidCatching.includes(
          "mask"
        ),
        timeInVehicles: questionnaireFromStorage.exposeRisk.values.avoidCatching.includes(
          "timeInVehicles"
        ),
        washedHands: questionnaireFromStorage.exposeRisk.values.avoidCatching.includes(
          "washedHands"
        ),
        contactWithCovid19: questionnaireFromStorage.exposeRisk.values
          .contactWithCovid19
          ? parseInt(
              questionnaireFromStorage.exposeRisk.values.contactWithCovid19
            )
          : 0,
        amountPeopleLiveWith: questionnaireFromStorage.exposeRisk.values
          .amountPeopleLiveWith
          ? questionnaireFromStorage.exposeRisk.values.amountPeopleLiveWith
          : 0,
        householdIllness: questionnaireFromStorage.exposeRisk.values
          .householdIllness
          ? parseInt(
              questionnaireFromStorage.exposeRisk.values.householdIllness
            )
          : 0,
      },
      illHousemates: {
        numberOfIllInHousehold: questionnaireFromStorage.illHousemates.values
          .numberOfIllInHousehold
          ? questionnaireFromStorage.illHousemates.values.numberOfIllInHousehold
          : 0,
        firstHouseholdIllnessDate: questionnaireFromStorage.illHousemates.values
          .firstHouseholdIllnessDate
          ? new Date(
              questionnaireFromStorage.illHousemates.values.firstHouseholdIllnessDate
            ).getTime()
          : 0,
      },
      wereYouIll: {
        hasFeltIll: questionnaireFromStorage.wereYouIll.values.hasFeltIll
          ? parseInt(questionnaireFromStorage.wereYouIll.values.hasFeltIll)
          : 0,
      },
      yourSymptoms: {
        achyJointsMuscles: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "achyJointsMuscles"
        ),
        headaches: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "headaches"
        ),
        chills: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "chills"
        ),
        congestedNose: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "congestedNose"
        ),
        coughWithSputum: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "coughWithSputum"
        ),
        dryCough: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "dryCough"
        ),
        fever: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "fever"
        ),
        fatigue: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "fatigue"
        ),
        lossTasteSmell: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "lossTasteSmell"
        ),
        runnyNose: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "runnyNose"
        ),
        shortnessOfBreath: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "shortnessOfBreath"
        ),
        skinRash: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "skinRash"
        ),
        sneezing: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "sneezing"
        ),
        soreThroat: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "soreThroat"
        ),
        stomachUpsetDiarrhoea: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "stomachUpsetDiarrhoea"
        ),
        nausea: questionnaireFromStorage.yourSymptoms.values.whichSymptoms.includes(
          "nausea"
        ),
        howShortOfBreath: questionnaireFromStorage.yourSymptoms.values
          .howShortOfBreath
          ? parseInt(
              questionnaireFromStorage.yourSymptoms.values.howShortOfBreath
            )
          : 0,
        howBadDidTheyFeel: questionnaireFromStorage.yourSymptoms.values
          .howBadDidTheyFeel
          ? parseInt(
              questionnaireFromStorage.yourSymptoms.values.howBadDidTheyFeel
            )
          : 0,
        howAnxious: questionnaireFromStorage.yourSymptoms.values.howAnxious
          ? parseInt(questionnaireFromStorage.yourSymptoms.values.howAnxious)
          : 0,
        firstSymptoms: questionnaireFromStorage.yourSymptoms.values
          .firstSymptoms
          ? new Date(
              questionnaireFromStorage.yourSymptoms.values.firstSymptoms
            ).getTime()
          : 0,
        lengthOfTimeOfSymptoms: questionnaireFromStorage.yourSymptoms.values
          .lengthOfTimeOfSymptoms
          ? parseInt(
              questionnaireFromStorage.yourSymptoms.values
                .lengthOfTimeOfSymptoms
            )
          : 0,
        wereTheyInfected: questionnaireFromStorage.yourSymptoms.values
          .wereTheyInfected
          ? parseInt(
              questionnaireFromStorage.yourSymptoms.values.wereTheyInfected
            )
          : 0,
      },
      covidTesting: {
        antibodyTest: questionnaireFromStorage.covidTesting.values.antibodyTest
          ? parseInt(questionnaireFromStorage.covidTesting.values.antibodyTest)
          : 0,
        dateOfTest: questionnaireFromStorage.covidTesting.values.dateOfTest
          ? new Date(
              questionnaireFromStorage.covidTesting.values.dateOfTest
            ).getTime()
          : 0,
        testType: Boolean(
          questionnaireFromStorage.covidTesting.values.testType
        ),
        testOutcome: questionnaireFromStorage.covidTesting.values.testOutcome
          ? parseInt(questionnaireFromStorage.covidTesting.values.testOutcome)
          : 0,
      },
      antibodyTest: questionnaireFromStorage.antibodyTest.values,
      otherTests: {
        labTest: questionnaireFromStorage.otherTests.values.labTest
          ? parseInt(questionnaireFromStorage.otherTests.values.labTest)
          : 0,
        swabTest: questionnaireFromStorage.otherTests.values.swabTest
          ? parseInt(questionnaireFromStorage.otherTests.values.swabTest)
          : 0,
        antigenTest: questionnaireFromStorage.otherTests.values.antigenTest
          ? parseInt(questionnaireFromStorage.otherTests.values.antigenTest)
          : 0,
        xrayTest: questionnaireFromStorage.otherTests.values.xrayTest
          ? parseInt(questionnaireFromStorage.otherTests.values.xrayTest)
          : 0,
        diagnosedByDoctor: questionnaireFromStorage.otherTests.values
          .diagnosedByDoctor
          ? parseInt(
              questionnaireFromStorage.otherTests.values.diagnosedByDoctor
            )
          : 0,
      },
      emailConsent: {
        emailConsent: Boolean(
          questionnaireFromStorage.emailConsent.values.emailConsent
        ),
      },
    };

    Axios.post(
      `https://app.vibesdoc.com/api/v1/questionnaires`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        Axios.get(`https://app.vibesdoc.com/api/v1/questionnaires/${res.data.id}`)
          .then((res) => {
            setResult(
              Math.round((res.data.questionnaire.mean + Number.EPSILON) * 100) /
                100
            );
          })
          .catch((err) => {
            alert(err);
            console.log(err);
          });
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    return () => {
      setOpen(false);
    };
  }, []);
  const classes = useStyles();
  // const handleClose=()=>{
  //   setOpen(false)
  // }
  // const handleClickAway = () => {
  //   setOpen(false);
  // };
  const widthCalculator = (input = Number()) => {
    return result < input ? `${(result / input) * 100}%` : "100%";
  };
  return (
    <div className={classes.root}>
      {/* <h2>{t.RESULT_PAGE_TITLE}</h2>
      <p>{t.RESULT_PAGE_TEXT}</p> */}
      {result === 0 || result ? (
        <Dialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            className="mx-auto"
            style={{
              position: "absolute",
              width: "192px",
              height: "36px",
              top: "10px",
              fontFamily: "Josefin Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "34px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "0.15px",
              color: "#8E0AF7",
            }}
          >
            <h3>Test Results</h3>
          </DialogTitle>
          <br />
          <br />
          <DialogActions>
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#FFFFFF",
                fontFamily: "Josefin Sans",
              }}
            >
              <div
                style={{
                  width: "98%",
                  height: "auto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "34px",
                  marginLeft: "15px",
                }}
              >
                <p>Probability of a positive result, given case data</p>
              </div>
              <div
                style={{
                  width: "96%",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "34px",
                  letterSpacing: "0.15px",
                  padding: "30px 15px",
                  margin: "auto",
                }}
                className={
                  (result >= 0 && result <= 20) ||
                  (result >= 20 && result <= 40)
                    ? "bar-text-active active-bg"
                    : result >= 40 && result <= 60
                    ? "bar-text-active-orange active-bg-orange"
                    : (result >= 60 && result <= 80) ||
                      (result >= 80 && result <= 100)
                    ? "bar-text-active-red active-bg-red"
                    : ""
                }
              >
                {result}% (
                {result < 20
                  ? "highly unlikely"
                  : result < 40
                  ? "unlikely"
                  : result < 60
                  ? "even chance"
                  : result <= 80
                  ? "likely"
                  : result > 80
                  ? "highly likely"
                  : null}
                )
              </div>
              <br />
              <br />
              <br />
              <div className="vertical" style={{ marginLeft: "12px" }}>
                <div
                  className={`bar-inner ${
                    result >= 0 && result <= 20 ? "bar-inner-active" : ""
                  }`}
                ></div>
              </div>
              <div className="horizontal">
                <div
                  className={`bar-inner ${
                    result >= 0 && result <= 20 ? "bar-inner-active" : ""
                  }`}
                  style={{
                    width: widthCalculator(20),
                  }}
                ></div>
              </div>
              <div className="vertical">
                <div
                  className={`bar-inner ${
                    result >= 20 && result <= 40 ? "bar-inner-active" : ""
                  }`}
                ></div>
              </div>
              <div className="horizontal">
                <div
                  className={`bar-inner ${
                    result > 20 && result <= 40 ? "bar-inner-active" : ""
                  }`}
                  style={{
                    width: widthCalculator(40),
                  }}
                ></div>
              </div>
              <div className="vertical">
                <div
                  className={`bar-inner ${
                    result > 40 && result <= 60
                      ? "bar-inner-active-orange"
                      : result == 40
                      ? "bar-inner-active"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="horizontal">
                <div
                  className={`bar-inner ${
                    result > 40 && result <= 60 ? "bar-inner-active-orange" : ""
                  }`}
                  style={{
                    width: widthCalculator(60),
                  }}
                ></div>
              </div>
              <div className="vertical">
                <div
                  className={`bar-inner ${
                    result > 60 && result <= 80
                      ? "bar-inner-active-red"
                      : result == 60
                      ? "bar-inner-active-orange"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="horizontal">
                <div
                  className={`bar-inner ${
                    result > 60 && result <= 80 ? "bar-inner-active-red" : ""
                  }`}
                  style={{
                    width: widthCalculator(80),
                  }}
                ></div>
              </div>
              <div className="vertical">
                <div
                  className={`bar-inner ${
                    result >= 80 && result <= 100 ? "bar-inner-active-red" : ""
                  }`}
                ></div>
              </div>
              <div className="horizontal">
                <div
                  className={`bar-inner ${
                    result > 80 && result <= 100 ? "bar-inner-active-red" : ""
                  }`}
                  style={{
                    width: widthCalculator(100),
                  }}
                ></div>
              </div>
              <div className="vertical">
                <div
                  className={`bar-inner ${
                    result >= 100 ? "bar-inner-active-red" : ""
                  }`}
                ></div>
              </div>
              <div
                className={`bar-text ${
                  result >= 0 && result <= 20 ? "bar-text-active" : ""
                }`}
                style={{ marginLeft: "15px" }}
              >
                0%
              </div>
              <div
                className={`bar-text ${
                  result >= 20 && result <= 40 ? "bar-text-active" : ""
                }`}
              >
                20%
              </div>
              <div
                className={`bar-text ${
                  result > 40 && result <= 60
                    ? "bar-text-active-orange"
                    : result == 40
                    ? "bar-text-active"
                    : ""
                }`}
              >
                40%
              </div>
              <div
                className={`bar-text ${
                  result > 60 && result <= 80
                    ? "bar-text-active-red"
                    : result == 60
                    ? "bar-text-active-orange"
                    : ""
                }`}
              >
                60%
              </div>
              <div
                className={`bar-text ${
                  result > 80 && result <= 100
                    ? "bar-text-active-red"
                    : result == 80
                    ? "bar-text-active-red"
                    : ""
                }`}
              >
                80%
              </div>
              <div
                className={`bar-text ${
                  result == 100 ? "bar-text-active-red" : ""
                }`}
              >
                100%
              </div>
              <br />
              <br />
              {/* <div
                style={{
                  width: "160px",
                  height: "34px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "34px",
                  letterSpacing: "0.15px",
                  color: "#8E0AF7",
                  margin: "20px auto",
                }}
              >
                Share my results in
              </div> */}
              <div style={{ width: "100%", border: "1px solid #B7D7D7" }}></div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ marginTop: "25px" }}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={fbLogo} />
                  </a>
                </div>
                <div>
                  {" "}
                  <img src={Line} />
                </div>
                {/* <div style={{ marginTop: "25px" }}>
                  {" "}
                  <img src={intagramLogo} />
                </div> */}
                {/* <div>
                  {" "}
                  <img src={Line} />
                </div> */}
                <div style={{ marginTop: "25px" }}>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedInLogo} />
                  </a>
                </div>
                <div>
                  {" "}
                  <img src={Line} />
                </div>
                <div style={{ marginTop: "25px" }}>
                  <a
                    href={`http://twitter.com/intent/tweet/?url=${window.location.origin}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitterLogo} />
                  </a>
                </div>
              </div>

              {/* <img alt="Facebook" src={String(fbLogo)} />
               <div style={{width: "67px", border: "1px solid #B7D7D7", transform: "rotate(90deg)",
               display: "inline-block", marginLeft: "70px"}}></div>

               <div style={{width: "10.5px", height: "20px", margin: "25px 0px 0px 80px", display: "inline-block"}}>
               <img alt="Facebook" src={String(intagramLogo)} /></div>
               <div style={{width: "67px", border: "1px solid #B7D7D7", transform: "rotate(90deg)",
               display: "inline-block", marginLeft: "70px"}}></div>
               <div style={{width: "10.5px", height: "20px", margin: "25px 0px 0px 70px", display: "inline-block"}}>
                 <img alt="LinkedIn" src={String(linkedInLogo)} /></div>
               <div style={{width: "67px", border: "1px solid #B7D7D7", transform: "rotate(90deg)",
               display: "inline-block", marginLeft: "70px"}}></div>
               <div style={{width: "10.5px", height: "20px", margin: "25px 0px 0px 50px", display: "inline-block"}}>
                 <img alt="Twitter" src={String(twitterLogo)} /></div> */}
            </div>
          </DialogActions>
        </Dialog>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
};

export default QuestionnaireResult;
