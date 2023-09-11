import styles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <div>
        <div className={styles.footer}>
          <p>
            Please review our updated{" "}
            <a href="https://www.google.com">Terms of Service.</a>
            <br /> Desert Paradise all rights reserved!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
