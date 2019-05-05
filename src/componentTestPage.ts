
const onChangeCompany = (short: string) => {
    console.log(short);
}

const selectCompanyElement: any = document.createElement("select-company");
selectCompanyElement.onChangeCompany = onChangeCompany;

const containerElement = document.getElementById("container");
containerElement.appendChild(selectCompanyElement);
