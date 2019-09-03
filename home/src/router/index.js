import React, { Component } from 'react'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
// import {} from 'react-router-dom'
import router from './routerviwes'
import RouterConfig from './routerconfig'
console.log(router)
export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
            <RouterConfig router={router}></RouterConfig>
            </BrowserRouter>
            
        )
    }
}
