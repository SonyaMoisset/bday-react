import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

import AgeStats from './AgeStats'
import './App.css'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            newDate: '',
            birthday: '',
            showStats: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    changeBirthday() {
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        })
    }

    handleChange(event) {
        this.setState({
            newDate: event.target.value
        })
    }

    handleClick() {
        this.changeBirthday()
    }

    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl
                        type="date"
                        onChange={this.handleChange}>
                    </FormControl>
                    {' '}
                    <Button onClick={this.handleClick}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ?
                            <div className="fade age-stats">
                                <AgeStats date={this.state.birthday} />
                            </div>
                        :
                        <div></div>
                    }     
                </Form>
            </div>
        )
    }
}
