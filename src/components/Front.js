import React from 'react'
import Display from './Display'

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Front() {
    return (
        
            <div className="">
                <Display />
            <div className="container">
                <div className="row">
                 
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1 className="display-4 text-center">Select Quiz</h1>
                        <Link to="/general"><button className=" col-12  p-3 mb-3  bg-white text-black   text-center rounded ">General</button></Link>
                        <Link to='/sports'><button className=" col-12  p-3 mb-3  bg-white text-black   text-center rounded ">Sports</button></Link>
                        <Link to='/quiz'><button className=" col-12  p-3 mb-3  bg-white text-black   text-center rounded ">quiz</button></Link>
                    </div>

                  </div>
                <div className="col-3"></div>


                </div>

            </div>
    
       
    )
}
