import React, { lazy, Suspense, Component, FunctionComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

// Primereact style
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Login = lazy(() => import('./components/Login'));

const Home = lazy(() => import('./components/Home'));

const fakeAuth = {
    isAuthenticated: false,

    authenticate(cb: any) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },

    signout(cb: any) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

function PrivateRoute({ children, ...rest }: { children: FunctionComponent }) {
    return (
        <Route
            { ...rest }
            render={({ location }) => 
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }}/>
                )   
        
            }
        
        />
    )
}

function App() {
    return (    
        <Router>

            <Suspense fallback={<div>Loading...</div>}>

                <Switch>
                        
                    <Route exact path='/login' component={Login} />
                    
                    <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute>

                    <Redirect from="/" to="/login"  />
                </Switch>

            </Suspense>

        </Router>
    );
}

export default App;
