const TestData = JSON.parse(JSON.stringify(require('../ExcelData/TestData.json')));
class SignUpLoginPage{

constructor(page){
    this.page = page;
    this.loginEmail = page.locator("input[data-qa='login-email']");
    this.loginPassword = page.locator("input[data-qa='login-password']");
    this.loginButton = page.locator("button[data-qa='login-button']");
}


async LoginAppOld(){
    await this.loginEmail.type(TestData.UserName);
    await this.loginPassword.type(TestData.Password);
    await this.loginButton.click();
}

async LoginApp(username, password){
    await this.loginEmail.type(username);
    await this.loginPassword.type(password);
    await this.loginButton.click();
}


}

module.exports = {SignUpLoginPage}