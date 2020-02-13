import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginLayoutRoute from '../layouts/loginLayout'
import MenuLayoutRoute from '../layouts/menuLayout'
import Form from '../components/form'
import Home from '../components/home'
import Lists from '../components/lists'

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <MenuLayoutRoute exact path="/" component={Home} />
        <MenuLayoutRoute exact path="/add" component={Form} />
        <MenuLayoutRoute exact path="/list" component={Lists} />
        <Route path="/nav" render={()=>(<div>asdasd</div>)} />
      </Switch>
    </BrowserRouter>
)

export default Routes