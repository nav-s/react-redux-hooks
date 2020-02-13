import React from 'react'
import { Route } from 'react-router-dom'

const LoginLayout = ({ children }) => (
    <div className="container">
    {children}
    </div>
)

const LoginLayoutRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={matchedProps => (
        <LoginLayout>
            <Component {...matchedProps} />
        </LoginLayout>
    )} />
)

export default LoginLayoutRoute