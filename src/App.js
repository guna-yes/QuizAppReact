import React from 'react'
import Front from './components/Front'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Knowledge from './components/Knowledge'
import Sports from './components/Sports'
import Quiz from './components/Quiz'


export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                    <Route path="/" component={Front} exact />
                    <Route path="/general" component={Knowledge} />
                    <Route path="/sports" component={Sports} />
                    <Route path="/quiz" component={Quiz} />
            </Switch>

                
            </BrowserRouter>

        </div>
    )
}
