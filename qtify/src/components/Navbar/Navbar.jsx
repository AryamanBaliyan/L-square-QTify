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
    let feedback = document.getElementById("feedback");
    let body = document.body;
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
        {/* Wrapping the components in divs with aria-labels */}
        <div className={styles.logoContainer} aria-label="navbar-logo">
          <Logo />
        </div>
        <div className={styles.searchContainer} aria-label="navbar-search">
          <Search data={page === "home" ? data : songsData} page={page} />
        </div>
        <div className={styles.buttonContainer} aria-label="navbar-button">
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
