const exceljs=require("exceljs")


let TestData = {}





async function getExcelData(UserAccess){

    const WorkBook = new exceljs.Workbook();
    //await WorkBook.xlsx.readFile("C:/Users/umama/OneDrive/Desktop/new.xlsx")
    await WorkBook.xlsx.readFile('../ExcelData/new.xlsx')
    const Worksheet1 =await WorkBook.getWorksheet("Sheet1")

    let Rws = await Worksheet1.actualRowCount
    let clms = await Worksheet1.actualColumnCount

    console.log("rows - "+Rws);
    console.log("Coulmns - "+clms);
    for(let i = 1;i<=Rws;i++){
     let Celldata =await  Worksheet1.getCell(i,1).value

        if(Celldata===UserAccess){
            //Capture the complete row values and add to an object
            TestData.Fname = await Worksheet1.getCell(i,2).value
            TestData.Lname = await Worksheet1.getCell(i,3).value
            TestData.Company = await Worksheet1.getCell(i,4).value
            TestData.Address = await Worksheet1.getCell(i,5).value
            TestData.Country = await Worksheet1.getCell(i,6).value
            TestData.State = await Worksheet1.getCell(i,7).value
            TestData.City = await Worksheet1.getCell(i,8).value
            TestData.ZipCode = await Worksheet1.getCell(i,9).value
            TestData.Mobile = await Worksheet1.getCell(i,10).value
            break
        }

    }
return TestData;

}


async function UpdateExcelData(Access, EmailAddress){

    const WorkBook = new exceljs.Workbook();
    await WorkBook.xlsx.readFile('../ExcelData/new.xlsx')
    const Worksheet1 =await WorkBook.getWorksheet("Sheet1")

    let Rws = await Worksheet1.actualRowCount
    let clms = await Worksheet1.actualColumnCount

    console.log("rows - "+Rws);
    console.log("Coulmns - "+clms);
    for(let i = 1;i<=Rws;i++){
        let Celldata =await  Worksheet1.getCell(i,1).value
           if(Celldata===Access){
            const updCell3 = await Worksheet1.getCell(i,11)
            updCell3.value = EmailAddress
               break
           }
   
       }

 await WorkBook.xlsx.writeFile("C:/Users/umama/OneDrive/Desktop/new.xlsx")
}




module.exports = {getExcelData, UpdateExcelData}
