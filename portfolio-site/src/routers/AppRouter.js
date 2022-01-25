import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;