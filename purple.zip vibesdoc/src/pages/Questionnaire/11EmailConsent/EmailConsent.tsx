import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
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
// import QuestionText from '../../../components/QuestionText';
import useCommonStyles from '../../commonStyles';
import QuestionnaireBoolean from '../questionnaire-boolean.enum';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import questionnaireParser from '../../../services/questionnaire-parser.service';
import codiApiClient from '../../../services/codi-api-client.service';
// import { TEmailConsentState } from './EmailConsentState';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const EmailConsent: React.FunctionComponent = () => {
  const [t] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  const history = useHistory();

  const emailConsentItems = () => [
    {
      label: t.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED,
      value: QuestionnaireBoolean.false,
    },
    {
      label: t.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO,
      value: QuestionnaireBoolean.true,
    },
  ];

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  useScrollToTheTop();

  useEffect(() => {
    const submitData = async () => {
      const parsed = questionnaireParser.parseQuestionnaireForm(questionnaireState);
      try {
        // TODO: why isnt this working
        codiApiClient.submitQuestionnaire(parsed);
        history.push(QuestionnairePagesPaths.results);
      } catch (err) {
        setFormError(t.GLOBAL_ERROR_FORMSUBMISSION);
        throw err;
      }
    };

    if (formSubmitting) {
      submitData();
    }
  },
  // eslint-disable-next-line
  [formSubmitting]);

  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.EMAILCONSENT_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.emailConsent.values}
        validationSchema={Yup.object({
          emailConsent: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          // email: Yup.string().email().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addQuestionResultActionCreator({
            key: 'emailConsent',
            value: values,
            activePage: QuestionnairePagesPaths.results,
          }));
          setSubmitting(true);
          setFormSubmitting(true);
        }}
      >
        {() => {
          // values: TEmailConsentState
          const error = formError
            ? (<div className={commonStyles.fieldError}>{formError}</div>)
            : undefined;
          return (
            <Form className={classes.root}>
              <QuestionRadioButton
                name="emailConsent"
                items={emailConsentItems()}
                questionText={t.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT}
              />
              {/* {
                 values.values.emailConsent !== QuestionnaireBoolean.false
                 && (
                 <QuestionText
                   name="email"
                   questionText={t.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT}
                 />
                 )
              } */}
              <HCCSFocusError />
              {error}
              <BackNextNavigation nextButtonText={t.GLOBAL_LABEL_SUBMIT} />
            </Form>
          );
        }}
      </Formik>
      <Hidden smDown>
        <Footer />
      </Hidden>
    </>
  );
};

export default EmailConsent;
