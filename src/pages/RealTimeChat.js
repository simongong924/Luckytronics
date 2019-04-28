
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import './chat.css';
import { ChatManager, TokenProvider, Chatkit } from '@pusher/chatkit-client'
import { format } from "date-fns";

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/96427bf1-daef-46bd-a72f-f391e35f10fc/token"
const instanceLocator = "v1:us1:96427bf1-daef-46bd-a72f-f391e35f10fc"
const roomId = "31215878"
const username = "simon"


class RealTimeChat extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    render() {
        return (
            <div className="app">
            <br></br>
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
      return (
        <ul className="message-list">
          {this.props.messages.map((message, index) => {
          const time = format(new Date(`${message.updatedAt}`), "HH:mm");

      return (
        <li key={message.id} className="message">
        <div>{message.senderId}</div>
        <span className="message-time">{time}</span>
        <br></br>
        <div>{message.text}</div>

        </li>
        )
      })}
      </ul>
      )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

function Title() {
  return <p className="title">Chat with us!</p>
}

RealTimeChat.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(RealTimeChat);
