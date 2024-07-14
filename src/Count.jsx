import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        counter: 0,
        increament_by: 1
    }


    render() {
        return (
            <center>
                <div className='btns'>
                <h1>Counter : {this.state.counter}</h1>
                    <button onClick={this.inc}>Counter++</button>
                    <button onClick={this.dec}>Counter--</button>
                <h3>Increament By : {this.state.increament_by}</h3>
                    <button onClick={this.incc}>Increament_by++</button>
                    <button onClick={this.decc}>Increament_by--</button>
                </div>
                    <button className='reser' onClick={this.res}>Reset</button>
            </center>
        )
    }

    inc=()=>{
        this.setState({counter:this.state.counter+this.state.increament_by})
    };

    dec=()=>{
        this.setState({counter:this.state.counter+this.state.increament_by})
    };

    incc=()=>{
        this.setState({increament_by:++this.state.increament_by})
    };

    decc=()=>{
        this.setState({increament_by:(this.state.increament_by)==1? this.state.increament_by:--this.state.increament_by})
    };

    res=()=>{
        this.setState({counter:0,increament_by:1})
    }
}
