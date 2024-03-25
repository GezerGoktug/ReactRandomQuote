import { FaQuoteLeft, FaTumblr, FaTwitter } from "react-icons/fa";
import Button from "./Button";
import styles from "./Card.module.css";
import { quoteData } from "../quotes";
import { useState } from "react";

const Card = () => {
  //! Renk Seçenekleri
  const colors = [
    "#FF0000", // Kırmızı
    "#FFA500", // Turuncu
    "#FFFF00", // Sarı
    "#008000", // Yeşil
    "#0000FF", // Mavi
    "#800080", // Mor
    "#FFC0CB", // Pembe
    "#A52A2A", // Kahverengi
    "#000000", // Siyah
    "#FFFFFF", // Beyaz
    "#FF6347", // Turuncu Kırmızı
    "#4682B4", // Çelik Mavisi
    "#20B2AA", // Açık Deniz Yeşili
    "#800000", // Kahverengi
    "#2E8B57", // Deniz Yeşili
    "#4B0082", // Endigo
    "#808000", // Zeytin Yeşili
    "#808080", // Gri
    "#DC143C", // Alev Kırmızısı
    "#7B68EE", // Orkide
    "#B8860B", // Koyu Altın
    "#00FF7F", // Acı Yeşili
    "#6A5ACD", // Lavanta
    "#FF4500", // Turuncu Kırmızı
  ];
  //! Ekrandaki quote yi ayarlar
  const [quote, setQuote] = useState(quoteData[0]);
  //! Ekrandaki renk temasını ayarlar
  const [color, setColor] = useState(colors[0]);

  //! Next quote butonuna basıldığında quoteler arasından rastgele bi tane seçer,
  //! Ve renk seçeneklerindende bi tane seçer ve ekran temasını ayarlar.
  const chanceQuote = () => {
    const randomNumber = Math.floor(Math.random() * quoteData.length);
    setQuote(quoteData[randomNumber]);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color }} className={styles.backdrop}>
      <div id="wrapper" className={styles.card}>
        <div id="quote-box">
          <div style={{ color: color }} className={styles.cardText}>
            <FaQuoteLeft />
            <span id="text">{quote.quote}</span>
            <div className="author" id="author">
              - {quote.author}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonWrapperLeft}>
              <Button
                style={color}
                href={`twitter.com/intent/tweet`}
                id="tweet-quote"
                type="link"
                target="_top"
              >
                <FaTwitter />
              </Button>
              <Button style={color} id="tumblr-quote" type="link">
                <FaTumblr />
              </Button>
            </div>
            <div>
              <Button
                style={color}
                onClick={chanceQuote}
                id="new-quote"
                type="button"
              >
                New Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
