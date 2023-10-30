import React from "react";
import "./component/Style.css";
import Layout from "./component/Layout";
import Section from "./component/Section";
import { Page1 } from "./component/pages/Page1";
import { Page2 } from "./component/pages/Page2";

export default function App() {
  return (
    <>
      <Layout>
        <Section>
          <Page1></Page1>
          <Page2></Page2>
        </Section>
      </Layout>
    </>
  );
}
