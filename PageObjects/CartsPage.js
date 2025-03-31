class CartsPage{

constructor(page){
    this.page = page;
    this.NoofProducts = page.locator("//table[@id='cart_info_table']/tbody/tr")
    this.FirstProductName = page.locator("//table[@id='cart_info_table']/tbody/tr[1]/td[2]/h4/a")
    this.SecondProductName = page.locator("//table[@id='cart_info_table']/tbody/tr[2]/td[2]/h4/a")
    this.FirstProductPrice =  page.locator("//table[@id='cart_info_table']/tbody/tr[1]/td[3]/p")
    this.SecondProductPrice =  page.locator("//table[@id='cart_info_table']/tbody/tr[2]/td[3]/p")

}


async CountNoofProducts(){
    let rows = await this.NoofProducts.count()
    return rows;
}

async CaptureFirstProductName(){
    return await this.FirstProductName.textContent();
}

async CaptureSecondProductName(){
    return await this.SecondProductName.textContent();
}

async CaptureFirstProductPrice(){
    return await this.FirstProductPrice.textContent();
}

async CaptureSecondProductPrice(){
    return await this.SecondProductPrice.textContent();
}

}

module.exports = {CartsPage}