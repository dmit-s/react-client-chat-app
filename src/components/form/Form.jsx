import { useRef, useState } from "react";
import SubmitBtn from "./components/submitBtn/SubmitBtn";
import TextInput from "./components/textInput/TextInput";
import UploadBtn from "./components/uploadBtn/UploadBtn";
import styles from "./form.module.scss";
import imageToBase64 from "../../utils/imageToBase64";

const Form = ({ socket }) => {
  const [formData, setFormData] = useState({
    text: "",
    file: null,
  });
  const formRef = useRef();

  const uploadFile = (e) => {
    const file = [...e.target.files][0];
    if (!/^image\//.test(file.type)) {
      alert("You can only send images.");
      e.target.value = "";
      return null;
    } else {
      return file;
    }
  };

  const handleChange = (e, type) => {
    switch (type) {
      case "text":
        const text = e.target.value;
        setFormData({ ...formData, text });
        break;
      case "file":
        const file = uploadFile(e);
        setFormData({ ...formData, file });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { text, file } = formData;
    const finalText = text.trim();

    const base64Img = formData.file && (await imageToBase64(file));

    if (finalText.length || base64Img) {
      socket.emit("addMessage", {
        text: finalText,
        pic: base64Img,
      });
      setFormData({ text: "", file: null });
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className={styles.form}>
      <TextInput
        value={formData.text}
        handleChange={handleChange}
        placeholder="Message..."
      />
      <div className={styles.form__buttons}>
        <UploadBtn file={formData.file} handleChange={handleChange} />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default Form;
