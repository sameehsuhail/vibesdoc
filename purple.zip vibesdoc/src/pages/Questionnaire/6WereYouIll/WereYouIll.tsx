import * as React from 'react';
import { useContext } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { translationContext } from '../../../services/TranslateService';
import {
  addQuestionResultActionCreator,
  questionnaireContext, GenerateNextPageAndSection, QuestionnairePagesPaths,
} from '../QuestionnaireState';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';
import QuestionRadioButton from '../../../components/QuestionRadioButton';
import useCommonStyles from '../../commonStyles';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import { IWereYouIllState } from './WereYouIllState';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const wereYouIllNext: GenerateNextPageAndSection<IWereYouIllState> = (values) => {
  // If user says no, we won't be asked about symptoms
  const nextPage = values.hasFeltIll === '0'
    ? QuestionnairePagesPaths.covidTesting : QuestionnairePagesPaths.yourSymptoms;
  return { nextPage };
};

const WereYouIll = () => {
  const [t] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);

  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const hasFeltIllItems = [
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE,
      value: '0',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL,
      value: '1',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL,
      value: '2',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_VERYILL,
      value: '3',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER,
      value: '4',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE,
      value: '5',
    },
    {
      label: t.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD,
      value: '6',
    },
  ];

  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.WEREYOUILL_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.wereYouIll.values}
        validationSchema={Yup.object({
          hasFeltIll: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { nextPage } = wereYouIllNext(values);
          dispatch(addQuestionResultActionCreator({
            key: 'wereYouIll',
            value: values,
            activePage: nextPage,
          }));
          setSubmitting(false);
          history.push(nextPage);
        }}
      >
        {() => (
          <Form className={classes.root}>
            <QuestionRadioButton
              name="hasFeltIll"
              items={hasFeltIllItems}
              questionText={t.WEREYOUILL_WEREYOUILLQUESTION_TEXT}
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

export default WereYouIll;
