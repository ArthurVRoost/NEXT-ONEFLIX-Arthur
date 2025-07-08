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

          <div id="top" className={styles.divRow2}>

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

      <section className={styles.homeSection3}>
        <div className={styles.homeSection1Div1}>
          <h2 >NARUTO</h2>
          <Link href="/" className={styles.Link}>See more &rarr;</Link>
        </div>
        <div className={styles.divNarutoRow1}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

         
        </div>
        <div className={styles.divNarutoRow1}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
            <div className={styles.cardOverlay}>
              <h3 className={styles.section1CardH3}>One Piece</h3>
              <p className={styles.section1CardP}>Prix: X</p>
              <p className={styles.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styles.section1CardP}>Rating: 4/5</p>
            </div>
          </div>
        </div>

         
        </div>

        <div className={styles.divNarutoRow1}>

          <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
            <Image  className={styles.cardImg} src="/img/CAROU 3.jpg" width={280} height={160} alt="image de l'anime"/>
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
    <div className={styles.homeDivColumn}>
      <h2  className={styles.homeDivColumnH2}>TOP ANIME</h2>
      {/* 1 */}
      <Link className={styles.Link2} href="/fmab">
          <div className={styles.homeDivColumnDivP}>
        <p className={styles.homeDivColumnNumero}>1.</p>
        <div className={styles.homeDivColumnImg} >
          <Image  className={styles.cardImg} src="/img/FMAB.jpg" width={80} height={100} alt="image de l'anime"/>
        </div>
        
        <div className={styles.homeDivColumnText}>
          <p className={styles.homeDivColumnP1}>Full Metal Alchemist Brotherhood</p>
          <p className={styles.homeDivColumnP2}>4.8/5<i className="fa-solid fa-star"></i></p>
          <p className={styles.homeDivColumnP1}>Episodes: 64</p>
        </div>
        
      </div>
      </Link>
      
      {/* 2 */}
      <Link className={styles.Link2} href="/">
           <div className={styles.homeDivColumnDivP}>
        <p className={styles.homeDivColumnNumero}>2.</p>
        <div className={styles.homeDivColumnImg} >
          <Image  className={styles.cardImg} src="/img/OP.jpg" width={80} height={100} alt="image de l'anime"/>
        </div>
        
        <div className={styles.homeDivColumnText}>
          <p className={styles.homeDivColumnP1}>One Piece</p>
          <p className={styles.homeDivColumnP2}>4.7/5<i className="fa-solid fa-star"></i></p>
          <p className={styles.homeDivColumnP1}>Episodes: 1100+ <span>still airing</span></p>
        </div>
        
      </div>
      </Link>
     
      {/* 3 */}
      <Link className={styles.Link2} href="/">
        <div className={styles.homeDivColumnDivP}>
        <p className={styles.homeDivColumnNumero}>3.</p>
        <div className={styles.homeDivColumnImg} >
          <Image  className={styles.cardImg} src="/img/BLEACH.jpg" width={80} height={100} alt="image de l'anime"/>
        </div>
        
        <div className={styles.homeDivColumnText}>
          <p className={styles.homeDivColumnP1}>Bleach</p>
          <p className={styles.homeDivColumnP2}>4.7/5<i className="fa-solid fa-star"></i></p>
          <p className={styles.homeDivColumnP1}>Episodes: 366</p>
        </div>
        
      </div>
      </Link>
      
    {/* 4 */}
    <Link className={styles.Link2} href="/">
        <div className={styles.homeDivColumnDivP}>
        <p className={styles.homeDivColumnNumero}>4.</p>
        <div className={styles.homeDivColumnImg} >
          <Image  className={styles.cardImg} src="/img/SNK.jpg" width={80} height={100} alt="image de l'anime"/>
        </div>
        
        <div className={styles.homeDivColumnText}>
          <p className={styles.homeDivColumnP1}>Attack On Titans</p>
          <p className={styles.homeDivColumnP2}>4.5/5<i className="fa-solid fa-star"></i></p>
          <p className={styles.homeDivColumnP1}>Episodes: 94</p>
        </div>
        
      </div>
    </Link>
    

    {/* 5 */}
    <Link className={styles.Link2} href="/">
        <div className={styles.homeDivColumnDivP}>
        <p className={styles.homeDivColumnNumero}>5.</p>
        <div className={styles.homeDivColumnImg} >
          <Image  className={styles.cardImg} src="/img/JJK.jpg" width={80} height={100} alt="image de l'anime"/>
        </div>
        
        <div className={styles.homeDivColumnText}>
          <p className={styles.homeDivColumnP1}>Jujutsu Kaisen</p>
          <p className={styles.homeDivColumnP2}>4.4/5<i className="fa-solid fa-star"></i></p>
          <p className={styles.homeDivColumnP1}>Episodes: 47+ <span>still airing</span></p>
        </div>
        
      </div>
    </Link>
      
    </div>
    </>
  );
}
