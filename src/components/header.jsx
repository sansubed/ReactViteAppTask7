import styles from "./header.module.css";

function Header() {
  return (
    <div>
      <div>
        <div className={styles.header}>
          <h1>Dessert</h1>
          <h2>Paradise</h2>
        </div>
        <img
          className={styles.figure}
          src="https://w7.pngwing.com/pngs/426/730/png-transparent-logo-yellow-font-recipe-logo-art-yellow.png"
        />
      </div>
    </div>
  );
}

export default Header;
