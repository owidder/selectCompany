import * as React from "react";
import * as _ from "lodash";
import {AutoComplete} from "antd";

export interface SymbolMap {
    [key: string]: string;
}

interface SelectSymbolProps {
    symbols: Symbol[];
    selected: string;
    onChange: (symbol: string)  => void;
}

interface SelectSymbolState {
    data: Array<string>;
    value?: string;
}

export interface Symbol {
    short: string;
    full: string;
}

const getSymbolMap = async (): Promise<SymbolMap> => {
    const symbolsResonse = await fetch("./service/symbols");
    const symbols = await symbolsResonse.json();
    return symbols;
}

export class SelectSymbol extends React.Component<SelectSymbolProps, SelectSymbolState> {

    readonly state: SelectSymbolState = {data: []};

    handleSearch(value: string) {
        const data = _.uniq(this.props.symbols.map(symbol => symbol.full).filter(full => full.toLowerCase().indexOf(value.toLowerCase()) > -1));
        this.setState({data, value})
    }

    handleSelect(full: string) {
        const short = this.props.symbols.find(s => s.full == full).short;
        this.props.onChange(short);
        this.setState({value: full})
    }


    render() {
        return <div className="input-field">
            <AutoComplete
                dataSource={this.state.data}
                onSearch={(text) => this.handleSearch(text)}
                onSelect={this.handleSelect.bind(this)}
                value={this.state.value || this.props.selected}
                placeholder="Enter company"/>
        </div>
    }
}
