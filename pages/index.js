import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Saas/Banner";
import AgeBar from "../components/Saas/AgeBar";
import Analytics from "../components/Saas/Analytics";
import Employees from "../components/Saas/Employees";
import Solutions from "../components/Saas/Solutions";
import Features from "../components/Saas/Features";
import Attendance from "../components/Saas/Attendance";
import WhyLystface from "../components/Saas/WhyLystface";
import Demo from "../components/Saas/Demo";
import HowItWorks from "../components/Saas/HowItWorks";

const Index = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Solutions/>
        <Features/>
        <HowItWorks/>
        <Demo/>
        <WhyLystface/>
        <Attendance/>
        <AgeBar/>
        <Analytics/>
        <Employees/>
        <Footer />
    </>
  );
};

export default Index;
