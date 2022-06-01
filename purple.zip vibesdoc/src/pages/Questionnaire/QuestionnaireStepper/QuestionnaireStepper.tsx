import * as React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  checkQuestionnaireActivity,
  questionnaireContext, QuestionnairePagesPaths, TQuestionnaireKeys,
} from '../QuestionnaireState';

const useStyles = makeStyles((theme) => ({
  stepper: {
    width: '100%',
    padding: '1rem 0',
    background: theme.palette.common.white,
    '& > div': {
      paddingRight: '0',
      [theme.breakpoints.only('xs')]: {
        paddingLeft: '0',
      },
      '& > span ': {
        cursor: 'pointer',
        '& > span': {
          [theme.breakpoints.only('xs')]: {
            paddingRight: '2px',
          },
        },
      },
    },
    step: {
      "& $completed": {
        color: "lightgreen"
      },
      "& $active": {
        color: "pink"
      },
      "& $disabled": {
        color: "red"
      }
    },
  },
}));

const QuestionnaireStepper: React.FunctionComponent = () => {
  const [questionnaireState] = useContext(questionnaireContext);
  const history = useHistory();
  const pathName = history.location.pathname;
  const goToPath = (path: string,
    key: TQuestionnaireKeys,
    isDisabled: boolean) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDisabled) {
      history.push(path);
    }
  };
  const {
    generalInformation,
    locationAndTravel,
    travelContinued,
    exposeRisk,
    illHousemates,
    wereYouIll,
    yourSymptoms,
    covidTesting,
    antibodyTest,
    otherTests,
    emailConsent,
  } = questionnaireState;
  const classes = useStyles();

  const isExposeRiskDisabled = !((locationAndTravel.isCompleted
    && locationAndTravel.values.travelledToOtherCountries === '0') || travelContinued.isCompleted);
  const isWereYouIllDisabled = !((exposeRisk.isCompleted
    && exposeRisk.values.householdIllness === '0') || illHousemates.isCompleted);
  const isCovidTestingDisabled = !((wereYouIll.isCompleted
    && wereYouIll.values.hasFeltIll === '0') || yourSymptoms.isCompleted);
  const isOtherTestDisabled = !((covidTesting.isCompleted
    && (covidTesting.values.antibodyTest === '1' || covidTesting.values.testType === '1'))
    || antibodyTest.isCompleted);
  const isEmailConsentDisabled = !((covidTesting.isCompleted
    && covidTesting.values.antibodyTest === '0') || otherTests.isCompleted);
  const questionnaireActivity = checkQuestionnaireActivity(pathName);

  return (
    <Stepper className={classes.stepper}>
      <Step
        active={questionnaireActivity.generalInformation}
        completed={generalInformation.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.generalInformation, 'generalInformation',
          false)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.locationAndTravel}
        completed={locationAndTravel.isCompleted}
        disabled={!generalInformation.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.locationAndTravel, 'locationAndTravel',
          !generalInformation.isCompleted)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.travelContinued}
        completed={travelContinued.isCompleted}
        disabled={!locationAndTravel.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.travelContinued, 'travelContinued',
          !locationAndTravel.isCompleted)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.exposeRisk}
        completed={exposeRisk.isCompleted}
        disabled={isExposeRiskDisabled}
        onClick={goToPath(QuestionnairePagesPaths.exposeRisk, 'exposeRisk',
          isExposeRiskDisabled)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.illHousemates}
        completed={illHousemates.isCompleted}
        disabled={!exposeRisk.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.illHousemates, 'illHousemates',
          !exposeRisk.isCompleted)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.wereYouIll}
        completed={wereYouIll.isCompleted}
        disabled={isWereYouIllDisabled}
        onClick={goToPath(QuestionnairePagesPaths.wereYouIll, 'wereYouIll',
          isWereYouIllDisabled)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.yourSymptoms}
        completed={yourSymptoms.isCompleted}
        disabled={!wereYouIll.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.yourSymptoms, 'yourSymptoms',
          !wereYouIll.isCompleted)}
      >
        <StepLabel />
      </Step>
      <Step
        active={questionnaireActivity.covidTesting}
        completed={covidTesting.isCompleted}
        disabled={isCovidTestingDisabled}
        onClick={goToPath(QuestionnairePagesPaths.covidTesting, 'covidTesting',
          isCovidTestingDisabled)}
      >
        <StepLabel />
      </Step>
      {/* <Step
        active={questionnaireActivity.antibodyTest}
        completed={antibodyTest.isCompleted}
        disabled={!covidTesting.isCompleted}
        onClick={goToPath(QuestionnairePagesPaths.antibodyTest, 'antibodyTest',
          !covidTesting.isCompleted)}
      >
        <StepLabel />
      </Step> */}
      <Step
        active={questionnaireActivity.otherTests}
        completed={otherTests.isCompleted}
        disabled={isOtherTestDisabled}
        onClick={goToPath(QuestionnairePagesPaths.otherTests, 'otherTests',
          isOtherTestDisabled)}
      >
        <StepLabel />
      </Step>
      {/* <Step
        active={questionnaireActivity.emailConsent}
        completed={emailConsent.isCompleted}
        disabled={isEmailConsentDisabled}
        onClick={goToPath(QuestionnairePagesPaths.emailConsent, 'emailConsent',
          isEmailConsentDisabled)}
      >
        <StepLabel />
      </Step> */}
    </Stepper>
  );
};

export default QuestionnaireStepper;
