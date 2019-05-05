
const onChangeCompany = (short: string) => {
    document.getElementById("text").innerHTML = `Selected company: <b>${short}</b>`;
}

const selectCompanyElement: any = document.createElement("select-company");
selectCompanyElement.onChangeCompany = onChangeCompany;

const containerElement = document.getElementById("container");
containerElement.appendChild(selectCompanyElement);
