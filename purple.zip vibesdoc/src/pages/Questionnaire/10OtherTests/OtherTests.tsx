import * as React from 'react';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import QuestionRadioButton from '../../../components/QuestionRadioButton';
import { translationContext } from '../../../services/TranslateService';
import {
  addQuestionResultActionCreator,
  questionnaireContext,
  QuestionnairePagesPaths,
} from '../QuestionnaireState';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';
import useCommonStyles from '../../commonStyles';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const OtherTests: React.FunctionComponent = () => {
  const [t] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const otherTestItems = () => [
    { label: t.OTHERTESTS_DIDNOTDOOPTION_TEXT, value: '0' },
    { label: t.OTHERTESTS_NEGATIVEOPTION_TEXT, value: '1' },
    { label: t.OTHERTESTS_POSITIVEOPTION_TEXT, value: '2' },
    { label: t.OTHERTESTS_UNKNOWNOPTION_TEXT, value: '3' },
  ];

  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.OTHERTESTS_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.otherTests.values}
        validationSchema={Yup.object({
          labTest: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          swabTest: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          antigenTest: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          xrayTest: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          diagnosedByDoctor: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addQuestionResultActionCreator({
            key: 'otherTests',
            value: values,
            activePage: QuestionnairePagesPaths.results,
          }));
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.results);
        }}
      >
        {() => (
          <Form className={classes.root}>
            <QuestionRadioButton
              name="labTest"
              items={otherTestItems()}
              questionText={t.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="swabTest"
              items={otherTestItems()}
              questionText={t.OTHERTESTS_SWABTESTQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="antigenTest"
              items={otherTestItems()}
              questionText={t.OTHERTESTS_VIRALANTIGENQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="xrayTest"
              items={otherTestItems()}
              questionText={t.OTHERTESTS_XRAYQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="diagnosedByDoctor"
              items={otherTestItems()}
              questionText={t.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT}
            />
            <HCCSFocusError />
            <BackNextNavigation nextButtonText={t.GLOBAL_LABEL_NEXT} />
          </Form>
        )}
      </Formik>
      <Hidden smDown>
        <Footer />
      </Hidden>
    </>
  );
};

export default OtherTests;
