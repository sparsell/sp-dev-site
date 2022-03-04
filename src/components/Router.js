import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './Intro'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Intro} />
        </Routes>
    </BrowserRouter>
)

export default Router