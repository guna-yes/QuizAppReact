import React from 'react'
import Front from './components/Front'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

import Quiz from './components/Quiz'


export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                    <Route path="/" component={Front} exact />
                    <Route path="/general" component={() => <Quiz category="quiz" />} />
                    <Route path="/sports" component={() => <Quiz category="sports" />} />
                    <Route path="/quiz" component={() => <Quiz category="general" />} />
            </Switch> 
            </BrowserRouter>

        </div>
    )
}
