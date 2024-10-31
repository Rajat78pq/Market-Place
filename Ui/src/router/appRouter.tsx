import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from "../layouts/HomeLayout/homeLayout";

//Dyanamic imports for page
// const HomePage = lazy(() => import('../pages/Home'));
// const ProductDetailsPage = lazy(() => import('../pages/ProductDetails'));
// const CartPage = lazy(() => import('../pages/Cart'));
// const CheckoutPage = lazy(() => import('../pages/Checkout'));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomeLayout />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;