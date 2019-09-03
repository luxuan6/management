import React, { Component } from 'react'

export default class login extends Component {
    state={
        name:"",
        pwd:""
    }
    render() {
        let {name,pwd} = this.state;
        return (
            <div>
                <input type="text" />
                <input type="text" />
                <button>登录</button>
            </div>
        )
    }
}
