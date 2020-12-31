import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({ name, path }) {
  return (
    <>
      <a href={path} className={`my-3 ${styles.btnCustom}`}>
        {name}
      </a>
      {/* <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style> */}
    </>
  );
}
