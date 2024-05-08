import styles from "./uploadBtn.module.scss";
import { FaFileCircleCheck } from "react-icons/fa6";
import { BsFileEarmarkImage } from "react-icons/bs";

const UploadBtn = ({ file, handleChange }) => {
  return (
    <button className={styles.uploadBtn} type="button">
      <label className={styles.uploadBtn__fileInputLabel}>
        {file ? <FaFileCircleCheck /> : <BsFileEarmarkImage />}

        <input
          onChange={(e) => handleChange(e, "file")}
          type="file"
          accept="image/*"
        />
      </label>
    </button>
  );
};

export default UploadBtn;
