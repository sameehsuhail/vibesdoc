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
  questionnaireContext,
  QuestionnairePagesPaths,
} from '../QuestionnaireState';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';
import QuestionRadioButton from '../../../components/QuestionRadioButton';
import QuestionCheckboxGroup from '../../../components/QuestionCheckboxGroup';
import { TYourSymptomsState } from './YourSymptomsState';
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

const YourSymptoms = () => {
  const [t, , currentLang] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);

  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const whichSymptomsItems = [
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS,
      value: 'achyJointsMuscles',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE,
      value: 'headaches',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS,
      value: 'chills',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE,
      value: 'congestedNose',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM,
      value: 'coughWithSputum',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH,
      value: 'dryCough',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER,
      value: 'fever',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE,
      value: 'lossTasteSmell',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED,
      value: 'fatigue',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE,
      value: 'runnyNose',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH,
      value: 'shortnessOfBreath',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH,
      value: 'skinRash',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING,
      value: 'sneezing',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT,
      value: 'soreThroat',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE,
      value: 'stomachUpsetDiarrhoea',
    },
    {
      label: t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING,
      value: 'nausea',
    },
  ];

  const zeroTenRangeItems = () => Array.from(Array(11).keys()).map((n) => ({ label: `${n}`, value: `${n}` }));

  const lengthOfTimeSymptomsItems = [
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS,
      value: '0',
    },
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK,
      value: '1',
    },
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS,
      value: '2',
    },
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS,
      value: '3',
    },
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS,
      value: '4',
    },
    {
      label: t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL,
      value: '5',
    },
  ];

  const didYouThinkInfectedItems = [
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY,
      value: '0',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE,
      value: '1',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE,
      value: '2',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE,
      value: '3',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED,
      value: '4',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE,
      value: '5',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL,
      value: '6',
    },
    {
      label: t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE,
      value: '7',
    },
  ];

  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.YOURSYMPTOMS_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.yourSymptoms.values}
        validationSchema={Yup.object({
          whichSymptoms: Yup.array().min(1, t.GLOBAL_FORMVALIDATION_REQUIRED),
          howShortOfBreath: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          howBadDidTheyFeel: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          howAnxious: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          firstSymptoms: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          lengthOfTimeOfSymptoms: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          wereTheyInfected: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addQuestionResultActionCreator({
            key: 'yourSymptoms',
            value: values,
            activePage: QuestionnairePagesPaths.covidTesting,
          }));
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.covidTesting);
        }}
      >
        {(values: TYourSymptomsState) => (
          <Form className={classes.root}>
            <QuestionCheckboxGroup
              name="whichSymptoms"
              options={whichSymptomsItems}
              values={values.values.whichSymptoms}
              errors={values.errors.whichSymptoms}
              isTouched={values.getFieldMeta('whichSymptoms')?.touched}
              questionText={t.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT}
              hasClearOption
            />
            <QuestionRadioButton
              name="howShortOfBreath"
              questionText={t.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT}
              items={zeroTenRangeItems()}
            />
            <QuestionRadioButton
              name="howBadDidTheyFeel"
              questionText={t.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT}
              items={zeroTenRangeItems()}
            />
            <QuestionRadioButton
              name="howAnxious"
              questionText={t.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT}
              items={zeroTenRangeItems()}
            />
            <QuestionDatePicker
              name="firstSymptoms"
              questionText={t.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT}
              locale={currentLang}
            />
            <QuestionRadioButton
              name="lengthOfTimeOfSymptoms"
              questionText={t.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT}
              items={lengthOfTimeSymptomsItems}
            />
            <QuestionRadioButton
              name="wereTheyInfected"
              questionText={t.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT}
              items={didYouThinkInfectedItems}
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

export default YourSymptoms;
