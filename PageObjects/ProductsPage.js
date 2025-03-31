
class ProductsPage{

    constructor(page){
        this.page = page;
        this.ProductOne = page.locator("a[data-product-id='1']")
        this.ProductTwo = page.locator("a[data-product-id='2']")
        this.ContinueShip = page.getByRole("button", {name:'Continue Shopping'})
    }


async AddFirstProduct(){
    await this.ProductOne.first().hover()
    await this.ProductOne.first().click()
    await this.ContinueShip.click()
}

async AddSecondProduct(){
    await this.ProductTwo.first().hover()
    await this.ProductTwo.first().click()
    await this.ContinueShip.click()
}

}

module.exports = {ProductsPage}