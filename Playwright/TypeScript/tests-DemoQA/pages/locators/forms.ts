export const formsLocators={
    formsScreen: "//div[@class='card-body'][h5[text()='Forms']]",
    practiceFormScren: "//span[@class='text'][text()='Practice Form']",

    //Inputs

    nameInput: "#firstName",
    lastName: "#lastName",
    emailInput: "#userEmail",
    
    mobileInput: "#userNumber",
    dateBirthInput:"#dateOfBirthInput",
    subjectsInput: "#subjectsInput",
    hobbiesInput: "#hobbies-checkbox-",
    currentAddressInput: "#currentAddress",
    stateInput:"//div[text()='Select State']",
    cityInput:"//div[text()='Select City']",
    fileInput:"#uploadPicture",
    submitButton: "#submit",

    monthBirthday:".react-datepicker__month-select",
    yearBirthday:".react-datepicker__year-select",
    dayBirthday:"//div[@role='option']",

    submitText: "//div[text()='Thanks for submitting the form']",

    //locators to validate submit text

    studentSubmit: "//tr[position()=1]/td[position()=2]",
    emailSubmit: "//tr[position()=2]/td[position()=2]",
    genderSubmit: "//tr[position()=3]/td[position()=2]",
    mobileSubmit: "//tr[position()=4]/td[position()=2]",
    subjectSubmit: "//tr[position()=6]/td[position()=2]",
    hobbieSubmit: "//tr[position()=7]/td[position()=2]",
    addressSubmit: "//tr[position()=9]/td[position()=2]",
    stateSubmit: "//tr[position()=10]/td[position()=2]",
    //Close button
    closeButton: "#closeLargeModal",

}