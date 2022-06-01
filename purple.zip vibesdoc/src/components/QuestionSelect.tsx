import * as React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import QuestionSection from "./QuestionSection";
import useCommonStyles from "../pages/commonStyles";

interface IQuestionSelectOption {
  label?: string;
  value?: string;
}

interface IQuestionSelect {
  name: string;
  items: IQuestionSelectOption[];
  questionText: string;
}

const useStyles = makeStyles((theme) => ({
  option: {
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}));

const QuestionSelect: React.FunctionComponent<IQuestionSelect> = (props) => {
  const [field, meta] = useField(props);
  const { name, items, questionText } = props;
  const commonStyles = useCommonStyles();
  const classes = useStyles();

  return (
    <QuestionSection>
      <FormControl
        component="fieldset"
        className={commonStyles.fullWidth}
        id={name}
      >
        <FormLabel component="legend">
          <Typography variant="h6" color="textSecondary">
            {questionText}
          </Typography>
        </FormLabel>
        <Select name={name} value={field.value} onChange={field.onChange}>
          {items.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              className={classes.option}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <div className={commonStyles.fieldError}>
          {meta.touched && meta.error ? <ErrorMessage name={name} /> : null}
        </div>
      </FormControl>
    </QuestionSection>
  );
};

QuestionSelect.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  questionText: PropTypes.string.isRequired,
};

export default QuestionSelect;
