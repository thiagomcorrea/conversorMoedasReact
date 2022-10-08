import React, { Component } from 'react'

import './Conversor.css'

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y`

        fetch(url)
            .then(res => {

                return res.json()

            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed
                this.setState({ moedaB_valor })
            })


            // fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1", {
            //     "method": "GET",
            //     "headers": {
            //         "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            //         "x-rapidapi-key": "0b890bc3c1mshbe86754cd8f37f1p116d1ejsn232cbdc1e6be"
            //     }
            // })
            // .then(response => {
            //     console.log(response);
            // })
            // .catch(err => {
            //     console.error(err);
            // });

    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => { this.setState({moedaA_valor:event.target.value}) }}></input>
                <input type="button" value="Converter" onClick={ this.converter }></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}