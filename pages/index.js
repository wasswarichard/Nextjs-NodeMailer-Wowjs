import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Saas/Banner";
import AgeBar from "../components/Saas/AgeBar";
import Analytics from "../components/Saas/Analytics";
import Employees from "../components/Saas/Employees";
import Solutions from "../components/Saas/Solutions";

const Index = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Solutions/>
        <AgeBar/>
        <Analytics/>
        <Employees/>
        <Footer />
    </>
  );
};

export default Index;
