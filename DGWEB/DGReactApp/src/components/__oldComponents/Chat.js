﻿import React, { Component } from 'react';
//import { HubConnection } from '../lib/signalr/dist/browser/signalr.js';
import * as signalR from "@microsoft/signalr";


export class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            message: '',
            messages: [],
            hubConnection: null,
        };
    }

    componentDidMount = () => {
        const nick = window.prompt('Your name:', 'John');

        //const hubConnection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
        //const hubConnection = new HubConnection("/chatHub");
        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub")
            .configureLogging(signalR.LogLevel.Information)
            .build();

        this.setState({ hubConnection, nick }, () => {
            this.state.hubConnection
                .start()
                .then(() => console.log('Connection started!'))
                .catch(err => console.log('Error while establishing connection :('));

            this.state.hubConnection.on('ReceiveMessage', (nick, receivedMessage) => {
                console.log(nick);
                console.log(receivedMessage);
                const text = `${nick}: ${receivedMessage}`;
                const messages = this.state.messages.concat([text]);
                this.setState({ messages });
            });
        });
    }

    sendMessage = () => {
        this.state.hubConnection
            .invoke('SendMessage', this.state.nick, this.state.message)
            .catch(err => console.error(err));

        this.setState({ message: '' });
    };

    render() {
        return (
            <div style={{ position: "relative" }}>
                <br />
                <input
                    type="text"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                />

                <button onClick={this.sendMessage}>Send</button>

                <div>
                    {this.state.messages.map((message, index) => (
                        <span style={{ display: 'block' }} key={index}> {message} </span>
                    ))}
                </div>
            </div>
        );
    }
}
