import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as logo from '../assets/images/logo.png';
import ChangeLanguage from './ChangeLanguage';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
  },
}));

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/homecovidtests">
        <img alt="logo" src={String(logo)} className={classes.logo} />
      </Link>
      <div>
        <ChangeLanguage />
      </div>
    </header>
  );
};

export default Header;
