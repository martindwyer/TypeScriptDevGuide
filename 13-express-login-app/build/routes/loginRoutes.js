"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const siteMarkup_1 = require("./siteMarkup");
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
loginRouter.get('/', (req, res) => {
    res.send(siteMarkup_1.welcomePage);
});
loginRouter.get('/login', (req, res) => {
    res.send(siteMarkup_1.loginPage);
});
loginRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email) {
        res.send(email);
    }
    else {
        res.send('You must provide an email address.');
    }
});
