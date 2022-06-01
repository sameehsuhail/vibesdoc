import * as React from 'react';
import classnames from 'classnames';
import {
  ArrayHelpers, FieldArray,
} from 'formik';
import {
  Checkbox, CheckboxProps, FormControlLabel, FormLabel, Theme, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import QuestionSection from './QuestionSection';
import useCommonStyles from '../pages/commonStyles';

interface IQuestionCheckboxGroupOption {
  label?: string;
  value?: string;
}

interface IQuestionCheckboxGroupProps {
  name: string;
  values: string[];
  options: IQuestionCheckboxGroupOption[];
  questionText: string;
  isTouched: boolean;
  errors?: string | string[];
  hasClearOption?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
  },
}));

const checkBoxStyles = (theme: Theme) => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.common.white,
    },
  },
  checked: {},
});
const CustomCheckbox = withStyles(checkBoxStyles)((props: CheckboxProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <Checkbox {...props} />
));

const QuestionCheckboxGroup: React.FunctionComponent<IQuestionCheckboxGroupProps> = (props) => {
  const {
    values, name, options, questionText, errors, hasClearOption, isTouched,
  } = props;


  const removeValueFromArray = (arrayHelpers: ArrayHelpers, arr: string[], value: string) => {
    const idx = arr.indexOf(value);
    if (idx !== -1) {
      arrayHelpers.remove(idx);
    }
  };

  const checkWithHasClearOption = (arrayHelpers: ArrayHelpers, arr: string[], value: string) => {
    if (!value) {
      const valuesLength = arr.length;
      // eslint-disable-next-line
      for (let i = 0; i < valuesLength; i++) {
        arrayHelpers.pop();
      }
    } else {
      removeValueFromArray(arrayHelpers, values, '');
    }
  };
  // eslint-disable-next-line
  const onChangeHandler = (arrayHelpers: ArrayHelpers, item: IQuestionCheckboxGroupOption) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (hasClearOption) {
        checkWithHasClearOption(arrayHelpers, values, item.value);
      }
      arrayHelpers.push(item.value);
    } else {
      removeValueFromArray(arrayHelpers, values, item.value);
    }
  };

  const classes = useStyles();
  const commonStyles = useCommonStyles();

  return (
    <QuestionSection>
      <FormLabel component="legend" className={commonStyles.fullWidth} id={name}>
        <Typography variant="h6" color="textSecondary">
          {questionText}
        </Typography>
      </FormLabel>

      {isTouched && errors ? (
        <div className={commonStyles.fieldError}>
          {errors}
        </div>
      ) : null}
      <FieldArray
        name={name}
        render={(arrayHelpers: ArrayHelpers) => (
          <div className={classes.root}>
            {options.map((item: IQuestionCheckboxGroupOption) => (
              <FormControlLabel
                key={item.value}
                label={item.label}
                className={classnames([commonStyles.fullWidth, commonStyles.questionOption,
                  { [commonStyles.activeQuestionOption]: values.includes(item.value) }])}
                control={(
                  <CustomCheckbox
                    name={item.value}
                    value={item.value}
                    checked={Boolean(values.indexOf(item.value) !== -1)}
                    onChange={onChangeHandler(arrayHelpers, item)}
                    inputProps={{ 'aria-label': item.label }}
                  />
)}
              />
            ))}
          </div>
        )}
      />
    </QuestionSection>
  );
};

QuestionCheckboxGroup.defaultProps = {
  errors: null,
  hasClearOption: false,
};

QuestionCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  questionText: PropTypes.string.isRequired,
  isTouched: PropTypes.bool.isRequired,
  hasClearOption: PropTypes.bool,
};

export default QuestionCheckboxGroup;
