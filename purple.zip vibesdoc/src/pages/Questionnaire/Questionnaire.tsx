import * as React from 'react';
import { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch, useHistory,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  defaultQuestionnaire, IQuestionnaireState,
  QuestionnairePagesPaths,
  QuestionnaireProvider,
  questionnaireReducer,
} from './QuestionnaireState';
import GeneralInformation from './1GeneralInformation/GeneralInformation';
import LocationAndTravel from './2LocationAndTravel/LocationAndTravel';
import TravelContinued from './3TravelContinued/TravelContinued';
import ExposeRisk from './4ExposeRisk/ExposeRisk';
import IllHousemates from './5IllHousemates/IllHousemates';
import WereYouIll from './6WereYouIll/WereYouIll';
import YourSymptoms from './7YourSymptoms/YourSymptoms';
import CovidTesting from './8CovidTesting/CovidTesting';
import AntibodyTest from './9AntibodyTest/AntibodyTest';
import OtherTests from './10OtherTests/OtherTests';
import EmailConsent from './11EmailConsent/EmailConsent';
import storage from '../../services/storage.service';
import QuestionnaireResult from './QuestionnaireResult/QuestionnaireResult';
import Header from '../../components/Header';
import QuestionnaireStepper from './QuestionnaireStepper/QuestionnaireStepper';
import useGlobalCommonStyles from '../../useGlobalCommonStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
}));

const Questionnaire: React.FunctionComponent<null> = () => {
  const questionnaireFromStorage = storage.getObject('questionnaire') as IQuestionnaireState;
  const defaultValue = questionnaireFromStorage || defaultQuestionnaire;
  const history = useHistory();
  const path = history.location.pathname !== '/questionnaire'
    ? history.location.pathname : defaultValue.activePage;
  const [state, dispatch] = useReducer(questionnaireReducer, defaultValue);
  const classes = useStyles();
  const commonStyles = useGlobalCommonStyles();

  useEffect(() => {
    storage.setObject('questionnaire', state);  
  }, [state]);

  return (
    <QuestionnaireProvider value={[state, dispatch]}>
      <main className={commonStyles.wrapper}>
        <Header />
        <Router>
          <Redirect to={path} />
          <section className={classes.root}>
            <QuestionnaireStepper />
            <Switch>
              <Route
                path={QuestionnairePagesPaths.generalInformation}
                component={GeneralInformation}
              />
              <Route
                path={QuestionnairePagesPaths.locationAndTravel}
                component={LocationAndTravel}
              />
              <Route
                path={QuestionnairePagesPaths.travelContinued}
                component={TravelContinued}
              />
              <Route
                path={QuestionnairePagesPaths.exposeRisk}
                component={ExposeRisk}
              />
              <Route
                path={QuestionnairePagesPaths.illHousemates}
                component={IllHousemates}
              />
              <Route
                path={QuestionnairePagesPaths.wereYouIll}
                component={WereYouIll}
              />
              <Route
                path={QuestionnairePagesPaths.yourSymptoms}
                component={YourSymptoms}
              />
              <Route
                path={QuestionnairePagesPaths.covidTesting}
                component={CovidTesting}
              />
              <Route
                path={QuestionnairePagesPaths.antibodyTest}
                component={AntibodyTest}
              />
              <Route
                path={QuestionnairePagesPaths.otherTests}
                component={OtherTests}
              />
              {/* <Route
                path={QuestionnairePagesPaths.emailConsent}
                component={EmailConsent}
              /> */}
              <Route
                path={QuestionnairePagesPaths.results}
                component={QuestionnaireResult}
              />
            </Switch>
          </section>
        </Router>
      </main>
    </QuestionnaireProvider>
  );
};

export default Questionnaire;
