import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import { ThemeProvider } from '@material-ui/core/styles/';
import TakePhotoPage from './pages/TakePhotoPage';
import NoMatchPage from './pages/NoMatchPage';
import { TranslationsProvider } from './services/TranslateService';
import MainPage from './pages/MainPage/MainPage';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import VideoInstructions from './pages/VideoInstructions/VideoInstructions';
import Redirects from './components/Redirect';
import theme from './theme';


function App() {
  return (
    <TranslationsProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/take-test-photo" component={TakePhotoPage} />
            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/video-instructions" component={VideoInstructions} />
            <Route path="/homecovidtests" component={Redirects} loc="https://vibesdoc.com" />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </Router>
      </ThemeProvider>

    </TranslationsProvider>
  );
}

export default App;
