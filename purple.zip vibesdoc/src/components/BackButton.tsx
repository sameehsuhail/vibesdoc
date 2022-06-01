import * as React from 'react';
import { Button } from '@material-ui/core';
import { useContext } from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { translationContext } from '../services/TranslateService';

interface IBackButtonProps {
  hasArrow?: boolean;
}

const useStyles = makeStyles((theme) => ({
  backButton: {
    width: '100%',
    cursor: 'pointer',
    border: 'solid 1px',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.background.paper,
    },
  },
  arrow: {
    marginRight: '0.5rem',
  },
}));

const BackButton: React.FunctionComponent<IBackButtonProps> = ({ hasArrow }) => {
  const [t] = useContext(translationContext);
  const history = useHistory();
  const classes = useStyles();
  const goBack = () => history.goBack();
  return (
    <Button aria-label="back-button" onClick={goBack} className={classes.backButton}>
      {hasArrow && <Icon fontSize="small" className={classes.arrow}>arrow_back</Icon>}
      {t.GLOBAL_LABEL_BACK}
    </Button>
  );
};

BackButton.defaultProps = {
  hasArrow: true,
};

BackButton.propTypes = {
  hasArrow: PropTypes.bool,
};

export default BackButton;
