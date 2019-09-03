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
                <input type="text" value={name} onChange={(e)=>{
                    console.log(e)
                }}/>
                <input type="text" value={pwd} onChange={(e)=>{
                     console.log(e)
                }}/>
                <button>登录</button>
            </div>
        )
    }
}
