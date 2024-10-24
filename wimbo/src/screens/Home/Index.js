import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './home.css';
import Sidebar from "../../components/sidebar";

export default function Home() {
    return (
        <Router>
            <div className="main-body">
              <Sidebar/>
                <Routes>
                    <Route></Route>
                </Routes>
            </div>
        </Router>
    );
}