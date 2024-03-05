import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_Key is not set');
  process.exit(1);
}

const configuraiton = new Configuration({
  apiKey: openaiApiKey
});

const openai = new OpenAIApi(configuraiton);

export default openai;
