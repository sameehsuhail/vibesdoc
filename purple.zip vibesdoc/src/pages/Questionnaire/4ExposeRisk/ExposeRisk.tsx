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
  addQuestionResultActionCreator, GenerateNextPageAndSection,
  questionnaireContext, QuestionnairePagesPaths,
} from '../QuestionnaireState';
import QuestionCheckboxGroup from '../../../components/QuestionCheckboxGroup';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';
import { IExposeRiskState, TExposeRiskState } from './ExposeRiskState';
import QuestionText from '../../../components/QuestionText';
import useCommonStyles from '../../commonStyles';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const exposeRiskNext: GenerateNextPageAndSection<IExposeRiskState> = (values) => {
  // if user mark that his family is not ill we will skip IllHousemates section
  const nextPage = values.householdIllness === '0'
    ? QuestionnairePagesPaths.wereYouIll : QuestionnairePagesPaths.illHousemates;
  return { nextPage };
};

const ExposeRisk: React.FunctionComponent = () => {
  const [t] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const didWorkItems = [
    { label: t.GLOBAL_LABEL_NO, value: '0' },
    { label: t.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE, value: '1' },
    { label: t.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE, value: '2' },
    { label: t.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE, value: '3' },
  ];
  const avoidCatchingItems = [
    { label: t.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE, value: 'keepDistanceFromOthers' },
    { label: t.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK, value: 'mask' },
    { label: t.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE, value: 'timeInVehicles' },
    { label: t.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE, value: 'washedHands' },
    { label: t.EXPOSURERISK_SPENDTIMEQUESTION_NONE, value: '' },
  ];
  const contactWithCovid19Items = [
    { label: t.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID, value: '1' },
    { label: t.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID, value: '2' },
    { label: t.EXPOSURERISK_SPENDTIMEQUESTION_NONE, value: '0' },
  ];
  const householdIllnessItems = [
    { label: t.GLOBAL_LABEL_NO, value: '0' },
    { label: t.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE, value: '1' },
    { label: t.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY, value: '2' },
  ];
  return (
    <>
      <h3 className={commonStyles.textCenter} style={{color: "#956DF7"}}>{t.EXPOSURERISK_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.exposeRisk.values}
        validationSchema={Yup.object({
          didWork: Yup.string().required('Required'),
          avoidCatching: Yup.array().required('Required'),
          contactWithCovid19: Yup.string().required('Required'),
          amountPeopleLiveWith: Yup.string().required('Required'),
          householdIllness: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { nextPage } = exposeRiskNext(values);
          dispatch(addQuestionResultActionCreator({
            key: 'exposeRisk',
            value: values,
            activePage: nextPage,
          }));
          setSubmitting(false);
          history.push(nextPage);
        }}
      >
        {(values: TExposeRiskState) => (
          <Form className={classes.root}>
            <QuestionRadioButton
              name="didWork"
              items={didWorkItems}
              questionText={t.EXPOSURERISK_GOTOWORKQUESTION_TEXT}
            />
            <QuestionCheckboxGroup
              name="avoidCatching"
              options={avoidCatchingItems}
              values={values.values.avoidCatching}
              errors={values.errors.avoidCatching}
              isTouched={values.getFieldMeta('avoidCatching')?.touched}
              questionText={t.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT}
              hasClearOption
            />
            <QuestionRadioButton
              name="contactWithCovid19"
              items={contactWithCovid19Items}
              questionText={t.EXPOSURERISK_SPENDTIMEQUESTION_TEXT}
            />
            <QuestionText
              name="amountPeopleLiveWith"
              fieldType="number"
              questionText={t.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="householdIllness"
              items={householdIllnessItems}
              questionText={t.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT}
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

export default ExposeRisk;
