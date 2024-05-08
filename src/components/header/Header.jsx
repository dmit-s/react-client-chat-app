import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>CHAT</h1>
    </header>
  );
};

export default Header;
