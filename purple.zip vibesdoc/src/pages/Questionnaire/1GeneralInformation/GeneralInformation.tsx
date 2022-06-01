import * as React from 'react';
import { useContext } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Hidden from '@material-ui/core/Hidden';
import { translationContext } from '../../../services/TranslateService';
import QuestionRadioButton from '../../../components/QuestionRadioButton';
import QuestionCheckboxGroup from '../../../components/QuestionCheckboxGroup';
import { TGeneralInformationState } from './GeneralInformationState';
import {
  addQuestionResultActionCreator,
  questionnaireContext,
  QuestionnairePagesPaths,
} from '../QuestionnaireState';
import HCCSFocusError from '../../../components/HCCSFocusError';
import Footer from '../../../components/Footer';
import useCommonStyles from '../../commonStyles';
import QuestionnaireBoolean from '../questionnaire-boolean.enum';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import BackNextNavigation from '../../../components/BackNextNavigation';
import useGlobalCommonStyles from '../../../useGlobalCommonStyles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const GeneralInformation = () => {
  const [t, defaultT] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const globalClasses = useGlobalCommonStyles();
  const [open, setOpen] = React.useState(true);
  useScrollToTheTop();

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={globalClasses.modalBody}>
      <h3>INSTRUCTIONS</h3>
      <p>
        This questionnaire works best if you have completed a medical exam.
      </p>
      <p>
        If you have one available please ensure you have taken the test,
        remembered what the result looked like,
        and taken a photograph of the test at the ‘reading’
        time specified by the manufacturer’s instructions.
      </p>
      <h3>CONFIDENTIALITY NOTICE</h3>
      <p>
        This questionnaire has been created by medical professionals.
      </p>
      <p>
        Any personal identifiable information you volunteer will NEVER be shared,
        sold or passed onto anyone else without your explicit permission.
      </p>
      <p>
        This has been launched with the sole purpose to help researchers learn about deseases,
        recovery and immunity on all our self-reported case stories in real-time.
      </p>
      <p>
        For more information contact: <span style={{color:"#8f0af7"}}>privacy@vibesdoc.com</span>
      </p>
      {/* <a href="http://cov-clear.com/privacy" target="blank"> http://cov-clear.com/privacy. </a> */}
     {/* <u> <a target="blank"> privacy@vibesdoc.com </a> </u> */}
    </div>
  );

  const genderItems = [
    {
      label: t.GENERALINFORMATION_GENDERQUESTION_MALE,
      value: '0',
    },
    {
      label: t.GENERALINFORMATION_GENDERQUESTION_FEMALE,
      value: '1',
    },
    {
      label: t.GENERALINFORMATION_GENDERQUESTION_OTHER,
      value: '2',
    },
  ];
  const ageItems = [
    { label: '0-19', value: '0-19' },
    { label: '20-29', value: '20-29' },
    { label: '30-39', value: '30-39' },
    { label: '40-49', value: '40-49' },
    { label: '50-59', value: '50-59' },
    { label: '60-69', value: '60-69' },
    { label: '70-79', value: '70-79' },
    { label: '80+', value: '80+' },
    {
      label: t.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY,
      value: defaultT.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY,
    },
  ];
  const healthItems = [
    {
      label: t.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL,
      value: '0',
    },
    {
      label: t.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER,
      value: '1',
    },
    {
      label: t.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY,
      value: '2',
    },
    {
      label: t.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY,
      value: '3',
    },
  ];
  const healthProblemsItems = [
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_NONE,
      value: '',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION,
      value: 'mildHeartCondition',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION,
      value: 'chronicHeartCondition',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM,
      value: 'mildLungCondition',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS,
      value: 'chronicLungCondition',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES,
      value: 'mildDiabetes',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES,
      value: 'chronicDiabetes',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS,
      value: 'recentCancer',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO,
      value: 'pastCancer',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_KIDNEY,
      value: 'reducedKidneyFunction',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_LIVER,
      value: 'chronicLiverDisease',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT,
      value: 'onImmunosuppressant',
    },
    {
      label: t.GENERALINFORMATION_COMMONQUESTION_PREGNANT,
      value: 'pregnant',
    },
  ];
  const fluItems = [
    { label: t.GLOBAL_LABEL_YES, value: QuestionnaireBoolean.true },
    { label: t.GLOBAL_LABEL_NO, value: QuestionnaireBoolean.false },
    { label: t.GLOBAL_LABEL_DO_NOT_KNOW, value: QuestionnaireBoolean.undefined },
  ];
  const commonStyles = useCommonStyles();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <h3 style={{color : "#956DF7"}} className={commonStyles.textCenter}>{t.GENERALINFORMATION_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.generalInformation.values}
        validationSchema={Yup.object({
          sex: Yup.string().required('Required'),
          age: Yup.string().required('Required'),
          health: Yup.string().required('Required'),
          healthProblems: Yup.array().required('Required'),
          flu: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addQuestionResultActionCreator({
            key: 'generalInformation',
            value: values,
            activePage: QuestionnairePagesPaths.locationAndTravel,
          }));
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.locationAndTravel);
        }}
      >
        {(values: TGeneralInformationState) => (
          <Form className={classes.root}>
            <QuestionRadioButton
              name="sex"
              items={genderItems}
              questionText={t.GENERALINFORMATION_GENDERQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="age"
              items={ageItems}
              questionText={t.GENERALINFORMATION_AGEQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="health"
              items={healthItems}
              questionText={t.GENERALINFORMATION_HEALTHQUESTION_TEXT}
            />
            <QuestionCheckboxGroup
              name="healthProblems"
              options={healthProblemsItems}
              values={values.values.healthProblems}
              errors={values.errors.healthProblems}
              isTouched={values.getFieldMeta('healthProblems')?.touched}
              questionText={t.GENERALINFORMATION_COMMONQUESTION_TEXT}
              hasClearOption
            />
            <QuestionRadioButton
              name="flu"
              items={fluItems}
              questionText={t.GENERALINFORMATION_FLUQUESTION_TEXT}
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

export default GeneralInformation;
