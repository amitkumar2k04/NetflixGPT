import OpenAI from 'openai';
import { GEMINI_API_KEY } from './constants';

const openai = new OpenAI({
  apiKey: GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;