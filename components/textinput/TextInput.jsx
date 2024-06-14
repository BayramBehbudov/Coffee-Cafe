import style from "./textInput.module.css";

const TextInput = ({ placeHolder, type, referance }) => {
  return (
    <div className={style.wavegroup}>
      <input required type={type} className={style.input} ref={referance} />
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

export default TextInput;
