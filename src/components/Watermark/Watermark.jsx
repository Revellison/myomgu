import React, { useState, useEffect, useRef } from "react";
import styles from "./Watermark.module.css"; 
import ShinyText from "../ShinyText/ShinyText";
function Watermark() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/Revellison/myomgu">Demo by Revellison</a>
    </footer>
  );
}

export default Watermark;
