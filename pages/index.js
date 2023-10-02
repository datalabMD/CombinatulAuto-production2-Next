import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="SA Combinatul Auto Nr.4 din Chișinău"
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
          rootClassName="navigation-root-class-name"
        ></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="home-text">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text02">nr.4</span>
                  <br></br>
                  <span className="home-text04">s</span>
                  <span className="home-text05">ervicii de</span>
                  <br></br>
                  <span className="home-text07">calitate</span>
                  <br></br>
                  <span className="home-text08">
                    IN
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text09">Moldova</span>
                </h1>
                <span className="home-text10">
                  <span>N</span>
                  <span className="home-text12">
                    oi garantam executarea rapida si la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text14">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="home-btns-container">
                  <a
                    href="#servicii"
                    className="home-primary button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="#contacts"
                    className="home-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="home-video-container">
                <div className="home-container1"></div>
              </div>
            </div>
            <div className="home-blue-background"></div>
          </div>
          <div className="home-sponsors section-container">
            <div className="home-max-width1 max-content-container">
              <span className="home-text15">
                INCREDEREA CLIENtILOR SI PARTENERILOR
              </span>
              <div className="home-container2">
                <img
                  alt="image"
                  src="/cocacola.svg"
                  width="180"
                  height="80"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="/orbico.svg"
                  width="180"
                  height="80"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/efesvitanta.svg"
                  width="180"
                  height="80"
                  className="home-image2"
                />
                <img
                  alt="image"
                  src="/rikipal1.svg"
                  width="180"
                  height="80"
                  className="home-image3"
                />
                <img
                  alt="image"
                  src="/cocacola.svg"
                  width="180"
                  height="80"
                  className="home-image4"
                />
              </div>
            </div>
          </div>
          <div className="home-speakers section-container">
            <div
              id="servicii"
              className="home-max-width2 max-content-container"
            >
              <div className="home-heading-container">
                <span className="home-text16">servicii de calitate</span>
                <h1 className="home-text17 Heading2">
                  <span>serviciile noastre</span>
                </h1>
              </div>
              <div className="home-speakers-container">
                <Link href="/transport">
                  <a>
                    <SpeakerCard
                      role="livrare National"
                      lastName="marfuri"
                      firstName="Transport"
                      image_src="/15-300h.webp"
                      rootClassName="speaker-card-root-class-name8"
                      className="home-component01"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/reparatii-auto">
                  <a>
                    <SpeakerCard
                      role="servicii electrice si mecanice"
                      lastName="auto"
                      firstName="reparatii"
                      image_src="/16-300h-300h.webp"
                      className="home-component02"
                    ></SpeakerCard>
                  </a>
                </Link>
                <SpeakerCard
                  role="rapid si calitativ"
                  lastName="auto"
                  firstName="spalatorie"
                  image_src="/14-300h.webp"
                ></SpeakerCard>
                <Link href="/parcare-auto">
                  <a>
                    <SpeakerCard
                      role="siguranta maxima"
                      lastName="auto"
                      firstName="parcare"
                      image_src="/13-300h.webp"
                      className="home-component04"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/arenda-spatii">
                  <a>
                    <SpeakerCard
                      role="siguranta maxima"
                      lastName="spatiilor"
                      firstName="arenda"
                      image_src="/12-300h.webp"
                      className="home-component05"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/alimentarea-publica">
                  <a>
                    <SpeakerCard
                      role="servicii de alimentatie (cantina)"
                      lastName="publica"
                      firstName="alimentatie"
                      image_src="/cantina-300w.webp"
                      className="home-component06"
                    ></SpeakerCard>
                  </a>
                </Link>
                <SpeakerCard
                  role="in curind"
                  lastName="noi"
                  firstName="servicii "
                  image_src="/rm-300h.webp"
                  rootClassName="speaker-card-root-class-name1"
                ></SpeakerCard>
                <SpeakerCard
                  role="in curind ..."
                  lastName="noi"
                  firstName="servicii"
                  image_src="/rm-300h.webp"
                  rootClassName="speaker-card-root-class-name"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="home-numbers-banner section-container">
            <div className="home-container3 max-content-container">
              <div className="home-heading-container1">
                <span className="home-text19">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="home-text20 Heading2">
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
              <div className="home-numbers-container">
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
          <div className="home-location">
            <img
              id="news"
              alt="image"
              src="/cars-1500w.webp"
              width="890"
              height="950"
              className="home-image5"
            />
            <div className="home-content-container1 section-container">
              <div className="home-container4">
                <span className="home-text22">REPARAtIE AUTO</span>
                <span className="home-text23">Calitativ</span>
                <div className="home-container5">
                  <span className="home-text24">
                    <span>motoare</span>
                  </span>
                  <span className="home-text26">
                    <span>caroserii</span>
                  </span>
                  <span className="home-text28">
                    <span>diagnosticare</span>
                  </span>
                </div>
                <div className="home-container6">
                  <span className="home-text30">
                    oferim servicii de reparație auto
                  </span>
                  <span className="home-text31">
                    <span>
                      {' '}
                      la toate tipurile de mașini, secția reparații este dotată
                      cu mecanisme care ne permit a efectua reparații auto
                      calitative și anume: motoare, caroserii, sisteme de
                      transmisie, sisteme de control, sisteme hidraulice,
                      acumulatoare, radiatoare, sisteme de încălzire, sisteme de
                      răcire, sisteme de frînare.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Identificăm cele mai complexe defecțiuni prin
                      diagnosticarea computerizată.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <div className="home-btns-container1">
                    <a
                      href="#contacts"
                      className="home-register button-secondary button button-md"
                    >
                      programeaza-te
                    </a>
                    <a
                      href="#contacts"
                      className="home-learn-more button button-outline button-md-border"
                    >
                      adresa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-agenda section-container">
            <div
              id="contacts"
              className="home-max-width3 max-content-container"
            >
              <div className="home-heading-container2">
                <h1 id="contact" className="home-text35 Heading2">
                  <span>ADRESA NOASTRA</span>
                </h1>
                <span className="home-text37">
                  te asteptam sa testezi serviciile noastre
                </span>
              </div>
            </div>
          </div>
          <div className="home-workshops">
            <div className="home-content-container2">
              <div className="home-container7">
                <h1 className="home-text38 Heading2">
                  <span>contacte</span>
                  <br></br>
                  <span className="home-text41">
                    MD-2002
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>MUN.CHIsINaU, STR.PaDURII 13</span>
                </h1>
                <span className="home-text44">
                  ----------------------------------------------
                </span>
                <span className="home-text45">
                  <span></span>
                  <br></br>
                  <span>MobILE:</span>
                  <span className="home-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text49">
                    (+373)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:37369322886">
                    <span className="home-text50">69322886</span>
                  </a>
                  <span className="home-text51"></span>
                  <br></br>
                  <span>
                    Tel/Fax: (+373)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:37322521144">
                    <span className="home-text53">22521144</span>
                  </a>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span></span>
                  <a href="mailto:COMBINATAUTO@GMAIL.COM?subject=email">
                    <span className="home-text57">Combinatauto@gmail.com</span>
                  </a>
                  <span className="home-text58"></span>
                  <span className="home-text59"></span>
                  <span className="home-text60"></span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <a href="mailto:DSACA4@MAIL.RU?subject=">
                    <span className="home-text63">dsaca4@mail.ru</span>
                    <br className="home-br5"></br>
                  </a>
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1361.1581244223369!2d28.896054673961334!3d46.97512272089735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9796e1caa0069%3A0x18af5b1f21321713!2sSA%20Combinatul%20Auto%20nr.4%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sro!2s!4v1650529500065!5m2!1sro!2s"
              title="maps"
              className="home-iframe"
            ></iframe>
          </div>
          <div className="home-previous-events section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-heading-container3">
                <h1 className="home-text64 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="home-text66">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            z-index: 1;
            align-items: stretch;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text02 {
            text-transform: lowercase;
          }
          .home-text04 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text05 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .home-text07 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .home-text08 {
            font-style: normal;
            font-weight: 600;
            text-transform: lowercase;
          }
          .home-text09 {
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .home-text12 {
            text-transform: lowercase;
          }
          .home-text14 {
            text-transform: lowercase;
          }
          .home-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .home-secondary {
            text-decoration: none;
          }
          .home-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            width: 100%;
            height: 511px;
            display: flex;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/home-600h.webp');
            background-position: center;
          }
          .home-container1:hover {
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px rgba(111, 102, 102, 0.31);
          }
          .home-blue-background {
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
          .home-sponsors {
            flex: 0 0 auto;
            display: flex;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: rgba(144, 149, 167, 0.1);
            border-width: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            border-bottom-width: 1px;
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-text15 {
            color: #525358;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 0.25em;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            height: 80px;
            object-fit: cover;
          }
          .home-image1 {
            height: 80px;
            object-fit: cover;
          }
          .home-image2 {
            height: 80px;
            object-fit: cover;
          }
          .home-image3 {
            height: 80px;
            object-fit: cover;
          }
          .home-image4 {
            height: 80px;
            object-fit: cover;
          }
          .home-speakers {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-max-width2 {
            flex-direction: column;
          }
          .home-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text16 {
            color: #525358;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text17 {
            text-align: center;
          }
          .home-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-component01 {
            text-decoration: none;
          }
          .home-component02 {
            text-decoration: none;
          }
          .home-component04 {
            text-decoration: none;
          }
          .home-component05 {
            text-decoration: none;
          }
          .home-component06 {
            text-decoration: none;
          }
          .home-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .home-container3 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text19 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text20 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .home-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .home-location {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image5 {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text22 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -100px;
            padding-top: 4px;
            padding-left: 18px;
            margin-bottom: 6px;
            padding-right: 11px;
            padding-bottom: 6px;
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-text23 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.1;
          }
          .home-container5 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text26 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .home-text28 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-container6 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .home-text30 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text31 {
            color: var(--dl-color-scheme-white);
            text-align: justify;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .home-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-register {
            text-decoration: none;
          }
          .home-learn-more {
            color: var(--dl-color-scheme-white);
            transition: 0.3s;
            border-color: var(--dl-color-scheme-white);
            text-decoration: none;
          }
          .home-learn-more:hover {
            border-color: var(--dl-color-scheme-pink);
          }
          .home-agenda {
            display: flex;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-max-width3 {
            flex-direction: column;
          }
          .home-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text35 {
            text-align: center;
          }
          .home-text37 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-workshops {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-content-container2 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .home-container7 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .home-text38 {
            margin-bottom: 42px;
          }
          .home-text41 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text44 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text45 {
            font-size: 20px;
            font-style: normal;
            text-align: justify;
            font-family: IBM Plex Sans Condensed;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-threeunits);
            letter-spacing: 0.02em;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text48 {
            font-weight: 700;
          }
          .home-text49 {
            font-weight: 700;
          }
          .home-text50 {
            font-weight: 700;
            text-decoration: underline;
          }
          .home-text51 {
            font-weight: 700;
            text-decoration: underline;
          }
          .home-text53 {
            text-decoration: underline;
          }
          .home-text57 {
            text-decoration: underline;
          }
          .home-text58 {
            text-decoration: underline;
          }
          .home-text59 {
            text-decoration: underline;
          }
          .home-text60 {
            text-decoration: underline;
          }
          .home-text63 {
            text-decoration: underline;
          }
          .home-br5 {
            text-decoration: underline;
          }
          .home-iframe {
            width: 50%;
            min-height: 880px;
          }
          .home-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-max-width4 {
            flex-direction: column;
          }
          .home-heading-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text64 {
            text-align: center;
          }
          .home-text66 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-container1 {
              width: 583px;
            }
            .home-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-location {
              flex-direction: column;
            }
            .home-image5 {
              width: 100%;
            }
            .home-content-container1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-container4 {
              margin-top: -100px;
              align-items: center;
            }
            .home-container6 {
              max-width: 100%;
              margin-left: 0px;
            }
            .home-container7 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-iframe {
              width: 50%;
              min-height: 600px;
            }
          }
          @media (max-width: 767px) {
            .home-container1 {
              width: 505px;
            }
            .home-image {
              display: none;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-image5 {
              max-height: 100%;
            }
            .home-content-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text22 {
              margin-left: -24px;
            }
            .home-btns-container1 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .home-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container7 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-iframe {
              width: 100%;
            }
            .home-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .home-text {
              font-size: 60px;
            }
            .home-container1 {
              width: 424px;
            }
            .home-max-width1 {
              display: none;
            }
            .home-container2 {
              justify-content: center;
            }
            .home-speakers-container {
              grid-template-columns: 1fr;
            }
            .home-text24 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text26 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text28 {
              font-size: 50px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text31 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
