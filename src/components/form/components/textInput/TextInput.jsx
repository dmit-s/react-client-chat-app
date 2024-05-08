import styles from "./textInput.module.scss";

const TextInput = ({ value, handleChange, placeholder }) => {
  return (
    <input
      className={styles.textInput}
      onChange={(e) => handleChange(e, "text")}
      type="text"
      value={value}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default TextInput;
