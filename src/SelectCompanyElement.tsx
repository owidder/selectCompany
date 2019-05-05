// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

import {SelectCompany} from "./SelectCompany";

class SelectCompanyElement extends HTMLElement {

    public onChangeCompany: (string) => void;

    constructor() {
        super();

        ReactDOM.render(<SelectCompany selected={this.getAttribute("selected")}
            onChange={(short: string) => {
            this.onChangeCompany && this.onChangeCompany(short)
        }}/>, this);
    }
}

customElements.define("select-company", SelectCompanyElement);
