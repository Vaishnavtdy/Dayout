// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import InquiryPage from './HomePage/AnimatedText/EnquireForm/EnquireForm';
import SignupForm from './login form/siggnUp';
import Layout from './HomePage/Nav Bar/Layout';
import AdventureDetailPage from './AdventureDetailPage/adventureDetailpage';
import ViewCart from './Cart/viewCart';
import CheckoutPage from './Cart/checkoutPage';
import Prefaces from './HomePage/preface/preface';
function App() {
  const dummyData = [
    { id: 1, name: 'Product 1', quantity: 2, price: 10.99 },
    { id: 2, name: 'Product 2', quantity: 1, price: 19.99 },
    // Add more dummy data as needed
  ];
  const total = dummyData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    

    
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} /> 
         
         <Route path="/inquiry" element={<InquiryPage />} />
         <Route path="contact" element={<SignupForm />} />
         <Route path="/adventure/:id" element={<AdventureDetailPage/>} />
         <Route path="/cart" element={<ViewCart cartItems={dummyData} />} />
         <Route path="/checkout" element={<CheckoutPage cartItems={dummyData} total={total}  />} />

         <Route path="Prefaces" element={<Prefaces />} />

         {/* <Prefaces/>
        <TourPackages/>
        <ServiceSection/>
        <ContactCard/>
        <SpecialOffers/>
        <Reviews/>
        <NewsletterSection/>
        <FooterSection/> */}

        

        </Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;