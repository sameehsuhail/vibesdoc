import React, { createContext, FunctionComponent, useReducer } from 'react';
import PropTypes from 'prop-types';
import translation, { IDefaultExports } from '../assets/i18n/languages';
import { I18N } from '../assets/i18n/i18n';

export type TLanguage = keyof IDefaultExports;

enum TranslateServiceActionType {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  SET_TO_DEFAULT = 'SET_TO_DEFAULT'
}

export interface ILanguageState {
  lang: TLanguage;
}

interface IChangeLanguage {
  type: typeof TranslateServiceActionType.CHANGE_LANGUAGE
  lang: TLanguage
}

interface ISetLanguageToDefault {
  type: typeof TranslateServiceActionType.SET_TO_DEFAULT
}

type TLanguageActionTypes =
    | IChangeLanguage
    | ISetLanguageToDefault;

export const changeLanguageActionCreator = (lang: TLanguage): IChangeLanguage => ({
  type: TranslateServiceActionType.CHANGE_LANGUAGE,
  lang,
});

export const defaultLanguage: ILanguageState = { lang: 'en' };

const translationContext = createContext<[
  I18N,
  I18N,
  TLanguage,
  React.Dispatch<TLanguageActionTypes>]>(translation[defaultLanguage.lang] as any);
const { Provider } = translationContext;
const reducer = (state: ILanguageState, action: TLanguageActionTypes) => {
  switch (action.type) {
    case TranslateServiceActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
      };
    case TranslateServiceActionType.SET_TO_DEFAULT:
      return {
        ...state,
        ...defaultLanguage,
      };
    default:
      return state;
  }
};

const TranslationsProvider: FunctionComponent<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultLanguage);

  return (
    <Provider value={[
      translation[state.lang],
      translation[defaultLanguage.lang],
      state.lang,
      dispatch]}
    >
      {children}
    </Provider>
  );
};

TranslationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { translationContext, TranslationsProvider };
