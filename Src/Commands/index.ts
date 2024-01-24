import { PREFIX } from '../config';
import play from './play';
import help from './help';
import lyrics from './lyrics';
import alexa from './alexa';


export default {
  [`${PREFIX}play`]: play,
  [`${PREFIX}help`]: help,
  [`${PREFIX}lyrics`]: lyrics,
   [`${PREFIX}alexa`]: alexa,

};
