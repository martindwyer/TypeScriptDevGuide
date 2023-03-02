"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const siteMarkup_1 = require("./siteMarkup");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("This page requires you to be logged in: <a href='/login'>Log In</a>");
}
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
loginRouter.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send((0, siteMarkup_1.welcomePage)(req.session.loggedIn));
    }
    else {
        res.send((0, siteMarkup_1.welcomePage)(false));
    }
});
loginRouter.get('/login', (req, res) => {
    res.send(siteMarkup_1.loginPage);
});
loginRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'marty@me.com' && password === '1234') {
        // mark person as logged in
        req.session = { loggedIn: true };
        // redirect to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password.');
    }
});
loginRouter.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
loginRouter.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route');
});
