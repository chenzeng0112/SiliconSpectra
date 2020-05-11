import React, { Component } from 'react'
import axios from 'axios';

export default class Converter extends Component {
    state = {
        options: [],
        fromCurrency: "USD",
        toCurrency: "CNY",
        amount: "",
        result: ""
    }

    componentDidMount() {
        axios.get("https://api.exchangeratesapi.io/latest")
            .then(res => {
                const currency = ["EUR"]
                for (const key in res.data.rates) {
                    currency.push(key);
                }
                this.setState({ options: currency })
            });
    }

    handleChange = e => {
        this.setState({ amount: e.target.value }, this.calculate)
    }

    handleSelectChange = e => {
        this.setState({ [e.target.name]: e.target.value }, this.calculate)
    }

    calculate = () => {
        const amount = this.state.amount;
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}`)
            .then(res => {
                const result = (res.data.rates[`${this.state.toCurrency}`] * amount).toFixed(4);
                this.setState({ result })
            })
    }

    handleSwap = e => {
        e.preventDefault();
        this.setState(
            {
                fromCurrency: this.state.toCurrency,
                toCurrency: this.state.fromCurrency,
                result: ''
            },
            this.calculate
        )
    }

    render() {
        return (
            <div>
                <h1>CONVERTER</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        className="input"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    <select
                        name="fromCurrency"
                        onChange={this.handleSelectChange}
                        value={this.state.fromCurrency}
                    >
                        {this.state.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </form>
                <hr />
                <form>
                    <input
                        className="input"
                        value={
                            this.state.amount === "" ? "" : this.state.result
                        }
                    />
                    <select
                        name="toCurrency"
                        onChange={this.handleSelectChange}
                        value={this.state.toCurrency}
                    >
                        {this.state.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <input type="submit" style={{ display: 'none' }} />
                </form>
                <br />
                <button onClick={this.handleSwap} className="input">SWAP</button>
            </div>
        )
    }
}
