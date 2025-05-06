import styles from "./button.module.css";

const Button = ({ text, eventHandler }) => {
  return (
    <button
      className={styles.button}
      onClick={eventHandler?.event === "onClick" ? eventHandler.handler : null}
    >
      {text}
    </button>
  );
};

export default Button;