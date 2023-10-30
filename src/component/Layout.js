import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className="mt-20px">
        <div className="cont container">
          <div className="row h-100">
            <Aside cls="leftaside">Left</Aside>
            {props.children}
            <Aside cls="rightaside">Right</Aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
