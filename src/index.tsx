import * as React from "react";
import * as ReactDOM from "react-dom";

import {SelectCompany} from "./SelectCompany";

const handleSelect = (short: string) => {
    document.getElementById("short").innerHTML = short;
}

ReactDOM.render(<SelectCompany onChange={(short => handleSelect(short))}/>, document.getElementById("select"));
