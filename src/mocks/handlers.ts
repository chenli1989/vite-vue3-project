import { rest } from 'msw';

interface LoginBody {
  username: string;
}

const handlers = [
  rest.post<LoginBody>(/\/login/, (req, res, ctx) => {
    const { username } = req.body;
    localStorage.setItem('is-authenticated', 'true');

    return res(
      ctx.status(200),
      ctx.json({
        username,
        firstName: 'chen',
      }),
    );
  }),
];
export default handlers;
export { handlers };
