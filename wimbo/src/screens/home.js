import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
    return (
    <router>
      <Routes>
        <Route path="/" element={<Library/>}></Route>
      </Routes>
    </router>;
    )
};