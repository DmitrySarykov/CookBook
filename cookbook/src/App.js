import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import Header from "./components/Header";

export default function App() {
    return (
      <>
        <Header />
        <main className="main">
          <Routes>
              <Route path="/recipe/:id" element={<Recipe/>}></Route>
              <Route path="/category/:id" element={<Category/>}></Route>
              <Route path="/" element={<Home/>}></Route>
          </Routes>
        </main>
      </>
    
    );
}