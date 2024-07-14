import axios from 'axios'
import React, { Component } from 'react'

export default class Card extends Component {
    state={
        users:[]
    }
    render() {
        let users = this.state.users
        return (
            <>
                <ul>
                    {users.map(user=><li key={user.id}>{user.name}</li>)}
                </ul>
            </>
        )
    }

    getUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            resp=>{
                this.setState({users:resp.data})
            }
        )
    }

    componentDidMount(){
        this.getUsers()
    }
}
