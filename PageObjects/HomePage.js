const {expect} = require("@playwright/test")

class HomePage{

    constructor(page){
        this.page = page;
        this.ConsentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" });
        this.slider = page.locator("div[id='slider-carousel']")
        this.Products = page.getByRole("link",{name:'Products'})
        this.Cart = page.getByRole("link",{name:'Cart'})
        this.SignUpLogin = page.locator("text='Signup / Login'")
    }


async AcceptCookies(){
    await this.ConsentButton.waitFor(); // waiting for element
    await this.ConsentButton.click(); // clicking on consent
}

async VerifySlider(){
    await expect(this.slider).toBeVisible();
}

async ClickProducts(){
    await this.Products.click()
}

async ClickCart(){
    await this.Cart.click()
}

async ClickSignUpLogin(){
    await this.SignUpLogin.click()
}

}

module.exports = {HomePage}

