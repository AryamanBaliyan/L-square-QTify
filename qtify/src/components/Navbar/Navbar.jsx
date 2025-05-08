import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import styles from "./navbar.module.css";

const Navbar = ({ data, page, songsData }) => {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    const feedback = document.getElementById("feedback");
    const body = document.body;
    if (isFeedbackClicked) {
      body.style.overflowY = "hidden";
      feedback?.classList.add("feedbackClicked");
    } else {
      body.style.overflowY = "auto";
      feedback?.classList.remove("feedbackClicked");
    }
  }, [isFeedbackClicked]);

  return (
    <>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Logo />
        </div>
        <div className={styles.navItem}>
          <Search data={page === "home" ? data : songsData} page={page} />
        </div>
        <div className={styles.navItem}>
          <Button
            text="GIVE FEEDBACK"
            eventHandler={{ event: "onClick", handler: handleClick }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
