import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from './BackButton';
import NextButton from './NextButton';

interface IBackNextNavigationProps {
  nextButtonText: string;
}

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > button': {
      width: '40%',
      [theme.breakpoints.only('xs')]: {
        width: '50%',
      },
    },
  },
}));

const BackNextNavigation: React.FunctionComponent<IBackNextNavigationProps> = (props) => {
  const { nextButtonText } = props;
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <BackButton />
      <NextButton buttonText={nextButtonText} />
    </div>
  );
};

BackNextNavigation.propTypes = {
  nextButtonText: PropTypes.string.isRequired,
};

export default BackNextNavigation;
