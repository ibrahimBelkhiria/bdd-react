import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            gifts: []
        }
    }

    addGift = ()=> {
        const {gifts} = this.state;

        gifts.push(1);
    }

  render() {
    return (
      <div>
        <h1>Gift giver</h1>
        <Button className='btn-add' onClick={this.addGift}>Add a gift</Button>
      </div>
    )
  }
}

