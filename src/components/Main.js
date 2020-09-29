import React from 'react'
import Front from './Front'
import {  BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Knowledge from './Quiz'
import Sports from './Sports'
import Quiz from './Quiz'


export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Front} exact />
                <Route path="/general" component={() => <Quiz category="general"/>} />
                <Route path="/sports" component={() => <Quiz category="sports" />} />
                <Route path="/quiz" component={() => <Quiz category="questions" />} />
            </BrowserRouter>
            
        </div>
    )
}
