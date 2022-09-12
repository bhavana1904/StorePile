import React, { Component } from 'react'
import { Button } from './components/Button'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>
            <Button >Create a new transaction</Button>
        </h1>
      </div>
    )
  }
}
