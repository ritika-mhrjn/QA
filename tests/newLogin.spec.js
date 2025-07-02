import{test, expect} from '@playwright/test';
import{LoginPage} from '../pageObject/login.po.js';
const testData = require('../fixtures/loginFixture.json');

test.beforeEach(async({page})=>{
    await page.goto('/');
})

test.describe('Valid login tests', ()=>{
    test('Login using valid usename and password',async({page})=>{
        const login = new LoginPage(page);
            await login.login(testData.validUser.userName,testData.validUser.password);
            await login.verifyValidLogin();
    });
})

test.describe('Invalid login tests', ()=>{
    test('Login using invalid usename and valid password',async({page})=>{
        const login = new LoginPage(page);
            await login.login("user@useri.com","Password");
            await login.verifyInvalidLogin();
    });

    test('Login using valid usename and invalid password',async({page})=>{
        const login = new LoginPage(page);
            await login.login("user@user.com","Paswowrd");
            await login.verifyInvalidLogin();
    });

    test('Login using invalid usename and invalid password',async({page})=>{
        const login = new LoginPage(page);
            await login.login("user@useri.com","Paswowrd");
            await login.verifyInvalidLogin();
    });
})



