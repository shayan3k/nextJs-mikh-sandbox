import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function main({ children }) {
  return (
    <div className="container-fluid  vh-100 text-white">
      <Navbar  />
      <div className="container row  my-3 mb-5">
        <div className="col-12 col-md-3">
         
      <Sidebar />
        </div>
        <div className="col-12 col-md-9  ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
