import { setupWorker } from 'msw';
import { handlers } from './handlers';

const worker = import.meta.env.DEV ? setupWorker(...handlers) : null;

export default worker;

export { worker };
