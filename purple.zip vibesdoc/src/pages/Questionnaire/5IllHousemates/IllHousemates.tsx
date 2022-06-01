import * as React from 'react';
import { useContext } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { translationContext } from '../../../services/TranslateService';
import QuestionText from '../../../components/QuestionText';
import {
  addQuestionResultActionCreator,
  questionnaireContext,
  QuestionnairePagesPaths,
} from '../QuestionnaireState';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';
import QuestionDatePicker from '../../../components/QuestionDatePicker';
import useCommonStyles from '../../commonStyles';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const IllHousemates = () => {
  const [t, , currentLang] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);

  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.ILLHOUSEMATES_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.illHousemates.values}
        validationSchema={Yup.object({
          numberOfIllInHousehold: Yup.number().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          firstHouseholdIllnessDate: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addQuestionResultActionCreator({
            key: 'illHousemates',
            value: values,
            activePage: QuestionnairePagesPaths.wereYouIll,
          }));
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.wereYouIll);
        }}
      >
        {() => (
          <Form className={classes.root}>
            <QuestionText
              name="numberOfIllInHousehold"
              fieldType="number"
              questionText={t.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT}
            />
            <QuestionDatePicker
              name="firstHouseholdIllnessDate"
              questionText={t.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT}
              locale={currentLang}
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

export default IllHousemates;
