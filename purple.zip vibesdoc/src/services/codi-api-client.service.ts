/* eslint-disable arrow-body-style */
import axios from 'axios';
import { QuestionnaireRequestBody } from './questionnaire-parser.service';

export type QuestionnaireAnswers = { [key:string]: any };

export interface CovidTestImage {
  id: string,
  userId: string,
  source: string,
  url: string,
  score: number,
}

const codiApi = axios.create({
  baseURL: `${process.env.REACT_APP_CODI_API_URL}/api/v1/`,
});

// const mapAxiosResponse = <T>(response: AxiosResponse<T>): T => response.data;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submitQuestionnaire = async (answers: QuestionnaireRequestBody) => {
  // // Mock API Call
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // return new Promise((resolve, reject) => {
  //   // eslint-disable-next-line @typescript-eslint/no-implied-eval
  //   setTimeout(resolve('hello world!'), 10000000);
  // });
  codiApi
    .post<void>('questionnaires', answers);
};
  // .then((res) => {
  // const result = res.data;
  // eslint-disable-next-line no-console
  // console.log('#0', res);
  // Returning an html which strips away virtual DOM
  // eslint-disable-next-line no-console
  // console.log('#2', answers);
  // All answered questions are sent parsed through the answers variable
  // this.setState({ testData: res.data });
  // setting state was not succesful here, rejected by server
  // eslint-disable-next-line no-console
  // console.log('Numero3', this.state.testData);
  // });
// };

const getReply = (persona: CovidTestImage) => codiApi
  .get<void>('questionnaires', persona)
  .then((response) => {
    // eslint-disable-next-line no-console
    console.log(response);
  });

export default {
  submitQuestionnaire,
  getReply,
};
