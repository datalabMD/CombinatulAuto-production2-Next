import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const Anunt5 = (props) => {
  return (
    <>
      <div className="anunt5-container">
        <Head>
          <title>Anunt-5 - SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="Anunt-5 - SA Combinatul Auto Nr.4 din Chișinău"
          />
          <meta
            property="og:description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9420d205-bbd0-411e-a57c-0f68008e7daf/ea494eb0-6cf8-464c-b070-cddce041bc5c?org_if_sml=1&amp;q=80"
          />
        </Head>
        <Navigation
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          rootClassName="navigation-root-class-name18"
        ></Navigation>
        <main className="anunt5-main">
          <div id="transport" className="anunt5-hero section-container">
            <div className="anunt5-max-width max-content-container">
              <div className="anunt5-content-container">
                <h1 className="anunt5-text">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="anunt5-text02">nr.4</span>
                  <br></br>
                  <span className="anunt5-text04">s</span>
                  <span className="anunt5-text05">
                    ervicii de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="anunt5-text07">calitate</span>
                  <br></br>
                  <span className="anunt5-text08">
                    IN
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="anunt5-text09">Moldova</span>
                </h1>
                <span className="anunt5-text10">
                  <span>N</span>
                  <span className="anunt5-text12">
                    oi garantam executarea rapida și la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="anunt5-text14">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="anunt5-btns-container">
                  <a
                    href="https://combinatulauto.md/#servicii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="anunt5-primary button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="https://combinatulauto.md/#contacts"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="anunt5-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="anunt5-video-container">
                <div className="anunt5-container1"></div>
              </div>
            </div>
            <div className="anunt5-blue-background"></div>
          </div>
          <div className="anunt5-text-content">
            <h2 className="anunt5-heading">
              <span>
                ADUNAREA GENERALA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>EXTRAORDINARA </span>
              <span>A ACTIONARILOR 04.10.2023</span>
              <br></br>
            </h2>
          </div>
          <div className="anunt5-blog">
            <iframe
              src="https://drive.google.com/file/d/1LvvgKkP3Uwhf6Vl2mnntPQNUevDruEbs/preview"
              className="anunt5-iframe"
            ></iframe>
          </div>
          <div className="anunt5-container2">
            <div className="anunt5-btns-container1">
              <Link href="/news">
                <a className="anunt5-link button-primary button-lg button">
                  vezi toate noutatile
                </a>
              </Link>
            </div>
          </div>
          <div className="anunt5-numbers-banner section-container">
            <div className="anunt5-container3 max-content-container">
              <div className="anunt5-heading-container">
                <span className="anunt5-text20">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="anunt5-text21 Heading2">
                  <span>
                    {' '}
                    servicii la preturi accesibile
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
              </div>
              <div className="anunt5-numbers-container">
                <NumbersCard text="expeditiii"></NumbersCard>
                <NumbersCard
                  text="ani"
                  number="12"
                  image_src="/interface%20time%20reset-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="evenimente"
                  number="64"
                  image_src="/interface%20calendar%20favorite-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="companii"
                  number="234"
                  image_src="/shopping%20bag%20suit%20case-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="orase"
                  number="14"
                  image_src="/travel%20map%20location%20pin-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="diagnosticari"
                  number="1,071"
                  image_src="/interface%20time%20reset-200h.png"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="anunt5-previous-events section-container">
            <div className="anunt5-max-width1 max-content-container">
              <div className="anunt5-heading-container1">
                <h1 className="anunt5-text23 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="anunt5-text25">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name18"></Footer>
      </div>
      <style jsx>
        {`
          .anunt5-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .anunt5-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anunt5-hero {
            position: relative;
            padding-top: 128px;
          }
          .anunt5-max-width {
            z-index: 1;
            align-items: stretch;
          }
          .anunt5-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .anunt5-text {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .anunt5-text02 {
            text-transform: lowercase;
          }
          .anunt5-text04 {
            color: var(--dl-color-scheme-pink);
          }
          .anunt5-text05 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .anunt5-text07 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .anunt5-text08 {
            font-style: normal;
            font-weight: 600;
            text-transform: lowercase;
          }
          .anunt5-text09 {
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
          }
          .anunt5-text10 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .anunt5-text12 {
            text-transform: lowercase;
          }
          .anunt5-text14 {
            text-transform: lowercase;
          }
          .anunt5-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .anunt5-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .anunt5-secondary {
            text-decoration: none;
          }
          .anunt5-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .anunt5-container1 {
            width: 100%;
            height: 511px;
            display: flex;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/home-1200h.webp');
            background-position: center;
          }
          .anunt5-container1:hover {
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px rgba(111, 102, 102, 0.31);
          }
          .anunt5-blue-background {
            top: 0px;
            right: 0px;
            width: 47%;
            height: 100px;
            position: absolute;
            min-height: 80%;
            background-size: cover;
            background-image: url('/blue-bg-1500w.webp');
            background-repeat: no-repeat;
          }
          .anunt5-text-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .anunt5-heading {
            font-size: 3rem;
            text-align: center;
          }
          .anunt5-blog {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: 50px;
            padding-bottom: 52px;
            justify-content: space-between;
          }
          .anunt5-iframe {
            width: 1200px;
            height: var(--dl-size-size-maxwidth);
          }
          .anunt5-container2 {
            width: 100%;
            height: 243px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .anunt5-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .anunt5-link {
            width: 364px;
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .anunt5-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .anunt5-container3 {
            flex-direction: column;
          }
          .anunt5-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .anunt5-text20 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .anunt5-text21 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .anunt5-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .anunt5-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .anunt5-max-width1 {
            flex-direction: column;
          }
          .anunt5-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .anunt5-text23 {
            text-align: center;
          }
          .anunt5-text25 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .anunt5-max-width {
              flex-direction: column;
            }
            .anunt5-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .anunt5-container1 {
              width: 583px;
            }
            .anunt5-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .anunt5-blog {
              flex-direction: column;
            }
            .anunt5-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .anunt5-container1 {
              width: 505px;
            }
            .anunt5-text-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .anunt5-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .anunt5-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .anunt5-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .anunt5-text {
              font-size: 60px;
            }
            .anunt5-container1 {
              width: 424px;
            }
            .anunt5-text-content {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .anunt5-blog {
              height: 515px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .anunt5-iframe {
              width: var(--dl-size-size-xxlarge);
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Anunt5
