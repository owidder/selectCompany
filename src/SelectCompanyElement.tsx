// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

import {SelectCompany} from "./SelectCompany";

class SelectCompanyElement extends HTMLElement {

    constructor() {
        super();

        const div = document.createElement("div");
        div.setAttribute("id", "container");
        document.body.appendChild(div);

        ReactDOM.render(<SelectCompany onChange={() => {}}/>, document.getElementById("container"));
    }
}

customElements.define("select-company", SelectCompanyElement);
