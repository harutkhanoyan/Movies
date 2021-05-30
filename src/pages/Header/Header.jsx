import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav_wrapper}>
        <li>Search Movies</li>
        <li>Movies</li>
        <li>Favorites</li>
      </ul>
      <div className={styles.search}>
        <input className={styles.search_input}></input>
        <button className={styles.search_button}>Search</button>
      </div>
    </div>
  );
}

export default Header;