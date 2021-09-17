import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


const getGreeting = async () => {
  const greetings = ['hello', 'hi', 'good day', 'bon jour!', 'ciao', 'hola', 'salut']

  return formatJSONResponse({
    greeting: `${greetings[getRandomIntInclusive(0, greetings.length)]}!`,
  });
}

export const main = middyfy(getGreeting);
