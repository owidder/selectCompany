// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

import {SelectCompany} from "./SelectCompany";

class SelectCompanyElement extends HTMLElement {

    public onChangeCompany: (string) => void;

    constructor() {
        super();

        const div = document.createElement("div");
        div.setAttribute("id", "container");
        document.body.appendChild(div);

        ReactDOM.render(<SelectCompany onChange={(short: string) => {
            this.onChangeCompany && this.onChangeCompany(short)
        }}/>, document.getElementById("container"));
    }
}

customElements.define("select-company", SelectCompanyElement);
