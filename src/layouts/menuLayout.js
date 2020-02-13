import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../components/navigation'

const MenuLayout = ({ children }) => (
    <React.Fragment>
        <Navigation></Navigation>
        <div className="container">
            {children}
        </div>
    </React.Fragment>
)

const MenuLayoutRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={matchedProps => (
        <MenuLayout>
            <Component {...matchedProps} />
        </MenuLayout>
    )} />
)

export default MenuLayoutRoute