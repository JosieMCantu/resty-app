import React, { Component } from 'react';
import { fetchApiCall } from '../services/apiUtils';
import Controls from '../components/presentaltional/Controls';
import Display from '../components/presentaltional/Display';
import HistoryList from '../components/presentaltional/HistoryList';

export default class RestyContainer extends Component {
    state = {
        url: '',
        method: 'GET',
        text: '',
        historyItems: [],
        response: {response: {}},
    }

    handleChange = async ({ target }) => {
        this.setState({ [target.name]: target.value })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { url, method, text } = this.state;
        const res = await fetchApiCall(url, method, text);
        const history = {method, url};

        this.setState({historyItems: [...this.state.historyItems, history]});
        
        this.setState({ response: {response: res} });
        this.setState({url: ''});
    };

    render() {
        const { response, url, historyItems, text } = this.state;
        return (
            <>
                <h1>RESTy</h1>
                <Controls url={url} text={text} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                <h1>Your search History</h1>
                <HistoryList historyItems={historyItems}/>
                <Display response={response} />
            </>
        )
    }
}
