import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export default class Provider extends Component {
    state = {
        track_list:[
            
        ],
        heading:'Top 10 Tracks'
    }
    componentDidMount(){
        axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
            .then(res => {
                this.setState({
                    track_list:res.data
                })
                // console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;


