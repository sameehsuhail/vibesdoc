import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeLanguageActionCreator, translationContext } from '../services/TranslateService';

enum Language {
  EN = 'en',
  RU = 'ru',
  ES = 'es',
  PT = 'pt'
}

const useStyles = makeStyles((theme) => ({
  item: {
    '&:hover': {
      color: theme.palette.common.white,
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
  },
}));

const ChangeLanguage: FunctionComponent = () => {
  const [,, lang, dispatch] = useContext(translationContext);

  const changeLanguage = (e: React.ChangeEvent<any>) => {
    dispatch(changeLanguageActionCreator(e.target.value));
  };
  const classes = useStyles();
  return (
    <FormControl>
      <InputLabel>文A</InputLabel>
      <Select
        labelId="language"
        value={lang}
        onChange={changeLanguage}
      >
        <MenuItem className={classes.item} value={Language.EN}>English</MenuItem>
        <MenuItem className={classes.item} value={Language.RU}>Pусский</MenuItem>
        <MenuItem className={classes.item} value={Language.ES}>Español</MenuItem>
        <MenuItem className={classes.item} value={Language.PT}>Portugues</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChangeLanguage;
