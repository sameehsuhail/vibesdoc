import * as React from 'react';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
// import QuestionRadioButton from '../../../components/QuestionRadioButton';
import { translationContext } from '../../../services/TranslateService';
import {
  addQuestionResultActionCreator,
  questionnaireContext,
  QuestionnairePagesPaths,
} from '../QuestionnaireState';
import Footer from '../../../components/Footer';
import HCCSFocusError from '../../../components/HCCSFocusError';

import testExample from '../../../assets/images/test_example.jpg';
// import cImage from '../../../assets/images/test-outcome/c.png';
// import cIggImage from '../../../assets/images/test-outcome/c-igg.png';
// import cIgmImage from '../../../assets/images/test-outcome/c-igm.png';
// import cIgmIggImage from '../../../assets/images/test-outcome/c-igm-igg.png';
// import iggImage from '../../../assets/images/test-outcome/igg.png';
// import igmImage from '../../../assets/images/test-outcome/igm.png';
// import iggIgmImage from '../../../assets/images/test-outcome/igg-igm.png';
// import noLinesImage from '../../../assets/images/test-outcome/no-lines.png';
import QuestionImageUpload from '../../../components/QuestionImageUpload';
import useCommonStyles from '../../commonStyles';
import useScrollToTheTop from '../../../hooks/useScrollToTheTop';
import BackNextNavigation from '../../../components/BackNextNavigation';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const AntibodyTest: React.FunctionComponent = () => {
  const [t] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  // const testOutcomeItems = [
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C, value: '0', imagePath: cImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG, value: '1', imagePath: cIggImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM, value: '2', imagePath: cIgmImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG,
  //      value: '3', imagePath: cIgmIggImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG, value: '4', imagePath: iggImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM, value: '5', imagePath: igmImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM,
  //      value: '6', imagePath: iggIgmImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES,
  //      value: '7', imagePath: noLinesImage },
  //   { label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE, value: '8' },
  // ];

  return (
    <>
      <h3 className={commonStyles.textCenter}>{t.ANTIBODYTEST_PAGE_TITLE}</h3>
      <Formik
        initialValues={questionnaireState.antibodyTest.values}
        // validationSchema={Yup.object({
        //   testOutcome: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        //   testImageSrc: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(QuestionnairePagesPaths.otherTests,"RRRRRRRR",QuestionnairePagesPaths)

          dispatch(addQuestionResultActionCreator({
            key: 'antibodyTest',
            value: values,
            activePage: QuestionnairePagesPaths.otherTests,
          }));
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.otherTests);
        }}
      >
        {() => (
          <Form className={classes.root}>
            {/* <QuestionRadioButton
              name="testOutcome"
              items={testOutcomeItems}
              questionText={t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT}
            /> */}
            <QuestionImageUpload
              name="testImageSrc"
              questionText={t.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT}
              exampleSrc={testExample}
              exampleAlt="Test example"
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

export default AntibodyTest;
