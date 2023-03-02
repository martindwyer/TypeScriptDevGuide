import { Router, Request, Response, NextFunction } from 'express';
import { loginPage, welcomePage } from './siteMarkup';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send(
    "This page requires you to be logged in: <a href='/login'>Log In</a>"
  );
}

const loginRouter = Router();

loginRouter.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(welcomePage(req.session.loggedIn));
  } else {
    res.send(welcomePage(false));
  }
});

loginRouter.get('/login', (req: Request, res: Response) => {
  res.send(loginPage);
});

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'marty@me.com' && password === '1234') {
    // mark person as logged in
    req.session = { loggedIn: true };

    // redirect to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password.');
  }
});

loginRouter.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

loginRouter.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route');
});

export { loginRouter };
