import React from "react";

export default function Aside(props) {
  return (
    <aside className={`col-2 border ${props.cls}`}>{props.children}</aside>
  );
}
//
