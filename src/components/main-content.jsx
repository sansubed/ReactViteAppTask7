import styles from "./main-content.module.css";

function MainComponent() {
  return (
    <>
      <div className={styles.main}>
        <img
          className={styles.image}
          src="https://www.simplyrecipes.com/thmb/l_JtB_QQXvhjQ1kwDMe_9zfSDgk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Monster-Cookies-LEAD-11-d497f7c9b6e4442dad5003c39c78c050.jpg"
        />
        <div className={styles.textBlock}>
          <h2>Cookies are Chewy,</h2>
          <h2>Chocolatey, and Peanut Buttery</h2> <br />
          <p>
            Thik, chewy, and jampacked with the classic combination of peanut
            butter, oats, chocolate chips, and M&Ms, these cookies are naturally
            gluten-free and easy to customize.
          </p>
          <a href="https://www.simplyrecipes.com/monster-cookie-recipe-7964107">
            {" "}
            Get the Recipe{">"}
          </a>
        </div>
        <div className={styles.column1}>
          {" "}
          Follow Us On: <br /> <br />
          <i class="fab fa-facebook-f"></i>{" "}
          <a href="https://www.facebook.com"> Facebook</a> <br />
          <br />
          <i class="fab fa-twitter"></i>
          <a href="https://www.twitter.com"> Twitter</a> <br />
          <br />
          <i class="fab fa-instagram"></i>
          <a href="https://www.twitter.com"> Instagram</a> <br />
          <br />
          <i class="fab fa-google"></i>
          <a href="https://www.twitter.com"> Google</a> <br />
          <br />
          <i class="fab fa-pinterest"></i>
          <a href="https://www.twitter.com"> Pinterest</a> <br />
          <br />
          <center>We would love to hear back from you! </center>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
