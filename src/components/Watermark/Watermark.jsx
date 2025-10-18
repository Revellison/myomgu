import React, { useState, useEffect, useRef } from "react";
import styles from "./Watermark.module.css"; 
import ShinyText from "../ShinyText/ShinyText";
function Watermark() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/Revellison/myomgu"><ShinyText text="Demo by Revellison" disabled={false} speed={3} className='watermark-text'/></a>
    </footer>
  );
}

export default Watermark;
