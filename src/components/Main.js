import React from 'react'
import Front from './Front'
import {  BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Knowledge from './Knowledge'
import Sports from './Sports'
import Quiz from './Quiz'


export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Front} exact />
                <Route path="/general" component={Knowledge} />
                <Route path="/sports" component={Sports} />
                <Route path="/quiz" component={Quiz} />
            </BrowserRouter>
            
        </div>
    )
}
