import * as React from "react";
import { useContext } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { translationContext } from "../../../services/TranslateService";
import QuestionRadioButton from "../../../components/QuestionRadioButton";
import QuestionText from "../../../components/QuestionText";
import QuestionSelect from "../../../components/QuestionSelect";
import {
  addQuestionResultActionCreator,
  GenerateNextPageAndSection,
  questionnaireContext,
  QuestionnairePagesPaths,
} from "../QuestionnaireState";
import Footer from "../../../components/Footer";
import HCCSFocusError from "../../../components/HCCSFocusError";
import countries, {
  usaRegions,
} from "../../../services/countries-translate.service";
import useCommonStyles from "../../commonStyles";
import useScrollToTheTop from "../../../hooks/useScrollToTheTop";
import { ILocationAndTravelState } from "./LocationAndTravelState";
import BackNextNavigation from "../../../components/BackNextNavigation";
import Axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const locationAndTravelNext: GenerateNextPageAndSection<ILocationAndTravelState> = (
  values
) => {
  // if user did not visit other country we will skip Travel and Continue section
  const nextPage =
    values.travelledToOtherCountries === "0"
      ? QuestionnairePagesPaths.exposeRisk
      : QuestionnairePagesPaths.travelContinued;
  return { nextPage };
};

const LocationAndTravel = () => {
  const [t, , currentLang] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const [locationItems, setLocationItems] = React.useState([]);
  const [regions, setRegions] = React.useState([]);

  const [selectedCountry, setSelectedCountry] = React.useState(null);

  React.useEffect(() => {
    Axios.get(`https://app.vibesdoc.com/api/v1/country`)
      .then((res) => {
        var countries = Array();
        res.data.countries.map((elem = Object()) => {
          if (elem.name === "United States") {
            let obj = {
              label: elem.name,
              value: elem.name,
            };
            countries.push(obj);
            Axios.get(
              `https://app.vibesdoc.com/api/v1/region?country_id=${elem.id}`
            )
              .then((res) => {
                let idRegions = Array();
                res.data.region.map((elem = Object()) => {
                  let obj = {
                    label: elem.name,
                    value: elem.name,
                  };
                  idRegions.push(obj);
                });
                setRegions(idRegions);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
        setLocationItems(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const anyOtherCountriesItems = [
    {
      label: t.GLOBAL_LABEL_NO,
      value: "0",
    },
    {
      label: t.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN,
      value: "1",
    },
    {
      label: t.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN,
      value: "2",
    },
    {
      label: t.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN,
      value: "3",
    },
  ];

  const threeCharacters = /^.{3}$/;
  const clearRegion = (
    values: ILocationAndTravelState,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ): null => {
    if (values.region) {
      setFieldValue("region", "");
    }
    return null;
  };

  return (
    <>
      <h3
        style={{ color: "#956DF7 !important" }}
        className={commonStyles.textCenter}
      >
        {t.LOCATIONANDTRAVEL_PAGE_TITLE}
      </h3>
      <Formik
        initialValues={questionnaireState.locationAndTravel.values}
        validationSchema={Yup.object({
          country: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
          region: Yup.string().notRequired(),
          postcode: Yup.string()
            .required(t.GLOBAL_FORMVALIDATION_REQUIRED)
            .matches(
              threeCharacters,
              t.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS
            ),
          travelledToOtherCountries: Yup.string().required(
            t.GLOBAL_FORMVALIDATION_REQUIRED
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { nextPage } = locationAndTravelNext(values);
          dispatch(
            addQuestionResultActionCreator({
              key: "locationAndTravel",
              value: values,
              activePage: nextPage,
            })
          );

          setSubmitting(false);
          history.push(nextPage);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className={classes.root}>
            <QuestionSelect
              name="country"
              questionText={t.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT}
              items={locationItems}
            />
            {values.country ? (
              <>
                {regions.length > 0 ? (
                  <QuestionSelect
                    name="region"
                    questionText={t.LOCATIONANDTRAVEL_REGIONQUESTION_TEXT}
                    items={regions}
                  />
                ) : null}
              </>
            ) : (
              clearRegion(values, setFieldValue)
            )}
            <QuestionText
              name="postcode"
              questionText={t.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT}
            />
            <QuestionRadioButton
              name="travelledToOtherCountries"
              questionText={t.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT}
              items={anyOtherCountriesItems}
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

export default LocationAndTravel;
