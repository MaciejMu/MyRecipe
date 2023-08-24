import style from "./NewsletterBanner.module.scss";

const NewsletterBanner = () => {
  const handleSubmit = () => {};

  return (
    <section className={style.section}>
      <img src={"src/assets/newsletter-background.webp"} />
      <div>
        <h4>Hungry for more?</h4>
        <p>
          Join our tasty newsletter, and get regular recipe inspiration straight
          to your inbox
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="mail"
            id="mail"
            name="mail"
            // value={}
            // onChange={}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
