import { rest } from 'msw';

interface LoginBody {
  username: string;
}

interface LoginResponse {
  username: string;
  firstName: string;
}

const handlers = [
  rest.post<LoginBody, LoginResponse>(/\/login/, (req, res, ctx) => {
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
export { handlers, handlers as default };
