import React, { Component } from 'react'

import {Redirect,Route,Switch} from 'react-router-dom'

// import Home from '../viwes/home/home'
export default class routerconfig extends Component {
    render() {
        let {router}=this.props;
        let routerArr =router &&router.filter(item =>!item.redirect);
        let redirectArr = router &&router.filter(item=>item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}></Redirect>)
        console.log(redirectArr)
        return (
        
            <Switch>
                {
                    routerArr && routerArr.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} child={item.children} ></item.component>
                        }}></Route>
                    }).concat(redirectArr)
                }
            </Switch>
            
        )
    }
}
