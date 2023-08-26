import { FormEvent, useState } from "react";
import style from "./NewsletterBanner.module.scss";
import { BeatLoader } from "react-spinners";

const NewsletterBanner = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSend, setIsSend] = useState(false);
  const [mail, setMail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // send mail
    setMail("");
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsSend(true);
    }, 1000);
    setTimeout(() => {
      setIsSend(false);
    }, 8000);
  };

  return (
    <section className={style.section}>
      <img src={"src/assets/newsletter-background.webp"} />
      {!isSend ? (
        <div>
          <h4>
            <span>Hungry</span> for more?
          </h4>
          <p>
            Join our tasty newsletter, and get regular recipe inspiration
            straight to your inbox
          </p>
          <form onSubmit={handleSubmit}>
            <input
              disabled={isLoading}
              type="email"
              id="mail"
              name="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <button disabled={isLoading} type="submit">
              {isLoading ? <BeatLoader color="#ffffff" size={10} /> : "Submit"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h4>
            Thank <span>you!</span>
          </h4>
          <p>You have just embarked on a culinary journey like no other.</p>
          <span className={style.loadingBar}></span>
        </div>
      )}
    </section>
  );
};

export default NewsletterBanner;
