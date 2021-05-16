import React, { Component } from 'react';
import axios from 'axios';

class FrequencyTable extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = this.props.location.state
    }

    frequencyCalculation(string) {
        const puncRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let words = string.replace(puncRegex, '').split(/\s/);
        let freqMap = new Map();
        let freqArr = [];
        let topFreq = [];
        words.forEach(function (w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
        freqMap["has"] = 1;

        for (const [key, value] of Object.entries(freqMap)) {
            freqArr.push({ word: key, count: value });
        }

        if (freqArr.length < this.state.number) {
            window.location('/');
            return;
        }

        freqArr.sort((a,b) => {
            return b.count - a.count;
        });

        for (let index = 0; index < this.state.number; index++) {
            topFreq.push(freqArr[index]);
        }
       
        return topFreq;
   }

   componentDidMount() {
       axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md')
        .then(response => {
            let wordFreq = this.frequencyCalculation(response.data)

            this.setState({
                frequencies: wordFreq
            })
        }).catch(function (error) {
               console.log(error);
        })
   }

    renderTableData() {
        return this.state.frequencies.map((frequency, index) => {
            const {word, count } = frequency
            return (
                <tr key={index} >
                    <td>{word}</td>
                    <td>{count}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys({word: 'test', count: 2})
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Top {this.state.number} most frequenctly occurring words</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FrequencyTable
