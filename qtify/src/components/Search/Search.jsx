import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import styles from "./search.module.css";
import navbarStyles from "../Navbar/navbar.module.css";

const Search = ({ data, page }) => {
  let [value, setValue] = useState("");
  let [search, setSearch] = useState([]);

  const handleInput = (e) => {
    setValue(e.target.value);
    const filtered = data.filter((album) =>
      album.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(filtered);
  };

  const handleSubmit = (e) => {
    console.log("click");
  };

  return (
    <div className={navbarStyles.searchField}>
      <input
        type="search"
        placeholder={
          page === "home"
            ? "Search a Album of Your Choice"
            : "Search a Song of Your Choice"
        }
        value={value}
        onChange={handleInput}
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        onClick={handleSubmit}
        className={styles.searchIcon}
      />
    </div>
  );
};

export default Search;