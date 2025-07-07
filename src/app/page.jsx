import styles from "./page.module.css";
import AutoCarousel from '../components/carousel/Carousel'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    
    <>
    <AutoCarousel/>
    <div className={styles.homeDivP}>
      <section className={styles.homeSection1} >
        <div className={styles.homeSection1Div1}>
          <h2>TOP RANKED</h2>
          <Link href="/" className={styles.Link}>See more &rarr;</Link>
        </div>
        <div className={styles.divRow1}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
              <div className={styles.cardOverlay}>
                <h3 className={styles.section1CardH3}>One Piece</h3>
                <p className={styles.section1CardP}>Prix: X</p>
                <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
                <p className={styles.section1CardP}>Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
       

       <div className={styles.divRow2}>
          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <Image  className={styles.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
              <div className={styles.cardOverlay}>
                <h3 className={styles.section1CardH3}>One Piece</h3>
                <p className={styles.section1CardP}>Prix: X</p>
                <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
                <p className={styles.section1CardP}>Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.homeSection2}>
        <div className={styles.homeSection1Div1}>
          <h2>LATEST ANIME</h2>
          <Link href="/" className={styles.Link}>See more &rarr;</Link>
        </div>
        <div className={styles.divRow1}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
              <div className={styles.cardOverlay}>
                <h3 className={styles.section1CardH3}>One Piece</h3>
                <p className={styles.section1CardP}>Prix: X</p>
                <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
                <p className={styles.section1CardP}>Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>

          <div className={styles.divRow2}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <Image  className={styles.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
              <div className={styles.cardOverlay}>
                <h3 className={styles.section1CardH3}>One Piece</h3>
                <p className={styles.section1CardP}>Prix: X</p>
                <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
                <p className={styles.section1CardP}>Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
