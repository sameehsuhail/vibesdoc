import * as React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

interface INextButton {
  buttonText: string;
  hasArrow?: boolean;
}

const useStyles = makeStyles((theme) => ({
  nextButton: {
    width: '100%',
    cursor: 'pointer',
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  arrow: {
    marginLeft: '0.5rem',
  },
}));


const NextButton: React.FunctionComponent<INextButton> = (props) => {
  const { buttonText, hasArrow } = props;

  const classes = useStyles();
  return (
    <Button type="submit" aria-label="next" className={classes.nextButton}>
      {buttonText}
      {hasArrow && <Icon fontSize="small" className={classes.arrow}>arrow_forward</Icon>}
    </Button>
  );
};

NextButton.defaultProps = {
  hasArrow: true,
};

NextButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool,
};

export default NextButton;
