import React from "react";
import style from "./textInput.module.css";

const TextArea = ({ placeHolder, referance }) => {
  return (
    <div className={style.wavegroup}>
      <textarea
        required
        className={`${style.input} ${style.textarea}`}
        style={{ width: "570px" }}
        ref={referance}
      ></textarea>
      <span className={style.bar}></span>
      <label className={style.label}>
        {placeHolder.split("").map((char, index) => (
          <span
            key={"char" + index}
            className={style.labelchar}
            style={{ "--index": index }}
          >
            {char}
          </span>
        ))}
      </label>
    </div>
  );
};

export default TextArea;
