import styles from "./Button.module.css";
const Button = ({ children, type, id, onClick, style, href, target }) => {
  return type === "link" ? (
    <a
      style={{ backgroundColor: style }}
      target={target}
      id={id}
      className={styles.button}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      style={{ backgroundColor: style }}
      onClick={onClick}
      id={id}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
