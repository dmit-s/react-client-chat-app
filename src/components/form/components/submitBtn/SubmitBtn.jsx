import { CiPaperplane } from "react-icons/ci";
import styles from "./submitBtn.module.scss";

const SubmitBtn = () => {
  return (
    <button className={styles.sendBtn} type="submit">
      <CiPaperplane />
    </button>
  );
};

export default SubmitBtn;
