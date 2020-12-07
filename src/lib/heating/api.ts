import Axios from 'axios';

const BASE_URL = '/api/heating';

const config = {baseURL: BASE_URL};
const httpClient = Axios.create(config);

interface IAgentResponse {
  state: boolean;
}

export const heatingStatus = async () =>
  httpClient.get<IAgentResponse>('/status').then(({data: {state}}) => state);

export const heatingOn = async () =>
  httpClient.get<IAgentResponse>('/on').then(({data: {state}}) => state);

export const heatingOff = async () =>
  httpClient.get<IAgentResponse>('/off').then(({data: {state}}) => state);