import { setupWorker } from 'msw';
import { handlers } from './handlers';

const worker = process.env.NODE_ENV === 'development' ? setupWorker(...handlers) : null;

export default worker;

export { worker };
