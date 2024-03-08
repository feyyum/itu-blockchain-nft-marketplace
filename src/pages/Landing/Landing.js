import styles from "./Landing.module.css";
import Marquee from "react-fast-marquee";

import Pink from "../../assets/images/pink.jpeg";
import { ReactComponent as Left } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as Right } from "../../assets/icons/right_arrow.svg";
import { ReactComponent as Eth } from "../../assets/icons/ethereum.svg";

function Landing() {
  return (
    <div className={styles.container}>
      <Marquee className={styles.marquee} speed={150}>
        <p className={styles.marquee_element}>
          NOTFUNNYTOKEN NFT MARKETPLACE POWERED BY ITU BLOCKCHAIN
        </p>
        <p className={styles.marquee_element}>
          NOTFUNNYTOKEN NFT MARKETPLACE POWERED BY ITU BLOCKCHAIN
        </p>
        <p className={styles.marquee_element}>
          NOTFUNNYTOKEN NFT MARKETPLACE POWERED BY ITU BLOCKCHAIN
        </p>
        <p className={styles.marquee_element}>
          NOTFUNNYTOKEN NFT MARKETPLACE POWERED BY ITU BLOCKCHAIN
        </p>
        <p className={styles.marquee_element}>
          NOTFUNNYTOKEN NFT MARKETPLACE POWERED BY ITU BLOCKCHAIN
        </p>
      </Marquee>
      <div className={styles.hero}>
        <div className={styles.secondary_container}>
          <img
            src={Pink}
            alt="left"
            className={`${styles.secondary_image} ${styles.left}`}
          />
        </div>
        <div className={styles.hero_content_container}>
          <div className={styles.hero_content_properties}>
            <h1 className={styles.hero_content_title}>
              Chipi Chipi Chapa Chapa Dubi Dubi Daba Daba
            </h1>
            <div className={styles.hero_content_bid}>
              <Eth width={10} />
              <div className={styles.hero_content_bid_text}>0.1 ETH</div>
            </div>
            <div className={styles.hero_content_arrow_container}>
              <Left className={styles.arrow} />
              <Right className={styles.arrow} />
            </div>
          </div>
          <div className={styles.primary_image_container}>
            <img src={Pink} alt="mid" className={`${styles.primary_image}`} />
          </div>
        </div>
        <div className={styles.secondary_container}>
          <img
            src={Pink}
            alt="right"
            className={`${styles.secondary_image} ${styles.right}`}
          />
        </div>
      </div>
      <div className={styles.quote_container}>
        <div>
          <h2 className={styles.quote}>
            "A blockchain without PoW is inefficient, nonsensical, and
            meaningless. What matters is Bitcoin, not the blockchain. Feel free
            to continue meeting up, chatting, and enjoying good food, but I just
            wanted you to hear the truth. Don't waste your time, or you'll
            regret it later."
          </h2>
          <p className={styles.quote_author}>
            <a
              href="https://twitter.com/efebitcoin/status/1757134313210982408?s=61&t=fXAF5YmpJE-w2NfLR4oHQw"
              target="_blank"
              rel="noreferrer"
            >
              efebitcoin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
