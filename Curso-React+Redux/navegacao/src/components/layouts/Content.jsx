import React from "react";
import '../layouts/Content.css'
import About from "../views/examples/About";
import { Routes, Route } from "react-router-dom"
import Home from "../views/examples/Home";
import Param from "../views/examples/Param";
import NotFound from "../views/examples/NotFound";

const Content = props => (
    <main className="content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    </main>
);

export default Content