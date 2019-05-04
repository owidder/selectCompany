// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

import {SelectCompany} from "./SelectCompany";

class SelectCompanyElement extends HTMLElement {

    constructor() {
        super();

        const div = document.createElement("div");
        document.body.appendChild(div);

        ReactDOM.render(<SelectCompany onChange={() => {}}/>, div);
    }
}

customElements.define("select-company", SelectCompanyElement);
