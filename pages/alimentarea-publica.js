import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const AlimentareaPublica = (props) => {
  return (
    <>
      <div className="alimentarea-publica-container">
        <Head>
          <title>
            Alimentarea-publica - SA Combinatul Auto Nr.4 din Chișinău
          </title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="Alimentarea-publica - SA Combinatul Auto Nr.4 din Chișinău"
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
          rootClassName="navigation-root-class-name11"
        ></Navigation>
        <main className="alimentarea-publica-main">
          <div className="alimentarea-publica-hero section-container">
            <div className="alimentarea-publica-max-width max-content-container">
              <div className="alimentarea-publica-content-container">
                <h1 className="alimentarea-publica-text">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="alimentarea-publica-text02">nr.4</span>
                  <br></br>
                  <span className="alimentarea-publica-text04">s</span>
                  <span className="alimentarea-publica-text05">
                    ervicii de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="alimentarea-publica-text07">calitate</span>
                  <br></br>
                  <span className="alimentarea-publica-text08">IN</span>
                  <span className="alimentarea-publica-text09">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="alimentarea-publica-text10">Moldova</span>
                  <span></span>
                </h1>
                <span className="alimentarea-publica-text12">
                  <span>N</span>
                  <span className="alimentarea-publica-text14">
                    oi garantam executarea rapida i la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="alimentarea-publica-text16">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="alimentarea-publica-btns-container">
                  <a
                    href="#servicii"
                    className="alimentarea-publica-primary button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="#contacts"
                    className="alimentarea-publica-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="alimentarea-publica-video-container">
                <div className="alimentarea-publica-container1"></div>
              </div>
            </div>
            <div className="alimentarea-publica-blue-background"></div>
          </div>
          <div className="alimentarea-publica-text-content">
            <h1 className="alimentarea-publica-text17">Alimentarea publica</h1>
            <span className="alimentarea-publica-text18">
              <span className="alimentarea-publica-text19">
                Intreprinderea
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                dispune de o cantina unde pot fi servite prinzuri calde gustoase
                la preturi pentru orice buzunar.
              </span>
            </span>
          </div>
          <div className="alimentarea-publica-speakers section-container">
            <div
              id="servicii"
              className="alimentarea-publica-max-width1 max-content-container"
            >
              <div className="alimentarea-publica-speakers-container">
                <Link href="/transport">
                  <a>
                    <SpeakerCard
                      role="livrare National"
                      lastName="marfuri"
                      firstName="Transport"
                      image_src="/15-300h.webp"
                      rootClassName="speaker-card-root-class-name18"
                      className="alimentarea-publica-component01"
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
                      className="alimentarea-publica-component02"
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
                      className="alimentarea-publica-component04"
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
                      className="alimentarea-publica-component05"
                    ></SpeakerCard>
                  </a>
                </Link>
                <SpeakerCard
                  role="servicii de alimentatie (cantina)"
                  lastName="publica"
                  firstName="alimentatie"
                  image_src="/cantina-300w.webp"
                ></SpeakerCard>
                <SpeakerCard
                  role="in curind"
                  lastName="noi"
                  firstName="servicii "
                  image_src="/rm-300h.webp"
                  rootClassName="speaker-card-root-class-name19"
                ></SpeakerCard>
                <SpeakerCard
                  role="in curind ..."
                  lastName="noi"
                  firstName="servicii"
                  image_src="/rm-300h.webp"
                  rootClassName="speaker-card-root-class-name20"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="alimentarea-publica-numbers-banner section-container">
            <div className="alimentarea-publica-container2 max-content-container">
              <div className="alimentarea-publica-heading-container">
                <span className="alimentarea-publica-text21">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="alimentarea-publica-text22 Heading2">
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
              <div className="alimentarea-publica-numbers-container">
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
          <div className="alimentarea-publica-location">
            <img
              id="news"
              alt="image"
              src="https://images.unsplash.com/photo-1618312980096-873bd19759a0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGF1dG8lMjByZXBhaXJ8ZW58MHx8fHwxNjUwMzA4OTI0&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="alimentarea-publica-image"
            />
            <div className="alimentarea-publica-content-container1 section-container">
              <div className="alimentarea-publica-container3">
                <span className="alimentarea-publica-text24">
                  REPARAtIE AUTO
                </span>
                <span className="alimentarea-publica-text25">Calitativ</span>
                <div className="alimentarea-publica-container4">
                  <span className="alimentarea-publica-text26">
                    <span>motoare</span>
                  </span>
                  <span className="alimentarea-publica-text28">
                    <span>caroserii</span>
                  </span>
                  <span className="alimentarea-publica-text30">
                    <span>diagnosticare</span>
                  </span>
                </div>
                <div className="alimentarea-publica-container5">
                  <span className="alimentarea-publica-text32">
                    oferim servicii de reparație auto
                  </span>
                  <span className="alimentarea-publica-text33">
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
                  <div className="alimentarea-publica-btns-container1">
                    <a
                      href="#contacts"
                      className="alimentarea-publica-register button-secondary button button-md"
                    >
                      programeaza-te
                    </a>
                    <a
                      href="#contacts"
                      className="alimentarea-publica-learn-more button button-outline button-md-border"
                    >
                      adresa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alimentarea-publica-agenda section-container">
            <div
              id="contacts"
              className="alimentarea-publica-max-width2 max-content-container"
            >
              <div className="alimentarea-publica-heading-container1">
                <h1
                  id="contact"
                  className="alimentarea-publica-text37 Heading2"
                >
                  <span>ADRESA NOASTRA</span>
                </h1>
                <span className="alimentarea-publica-text39">
                  te asteptam sa testezi serviciile noastre
                </span>
              </div>
            </div>
          </div>
          <div className="alimentarea-publica-workshops">
            <div className="alimentarea-publica-content-container2">
              <div className="alimentarea-publica-container6">
                <h1 className="alimentarea-publica-text40 Heading2">
                  <span>contacte</span>
                  <br></br>
                  <span className="alimentarea-publica-text43">
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
                <span className="alimentarea-publica-text46">
                  ----------------------------------------------
                </span>
                <span className="alimentarea-publica-text47">
                  <span></span>
                  <br></br>
                  <span>MobILE:</span>
                  <span className="alimentarea-publica-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="alimentarea-publica-text51">
                    (+373)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:37369322886">
                    <span className="alimentarea-publica-text52">69322886</span>
                  </a>
                  <span className="alimentarea-publica-text53"></span>
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
                    <span className="alimentarea-publica-text55">22521144</span>
                  </a>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span></span>
                  <a href="mailto:COMBINATAUTO@GMAIL.COM?subject=email">
                    <span className="alimentarea-publica-text59">
                      Combinatauto@gmail.com
                    </span>
                  </a>
                  <span className="alimentarea-publica-text60"></span>
                  <span className="alimentarea-publica-text61"></span>
                  <span className="alimentarea-publica-text62"></span>
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
                    <span className="alimentarea-publica-text65">
                      dsaca4@mail.ru
                    </span>
                    <br className="alimentarea-publica-br5"></br>
                  </a>
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1361.1581244223369!2d28.896054673961334!3d46.97512272089735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9796e1caa0069%3A0x18af5b1f21321713!2sSA%20Combinatul%20Auto%20nr.4%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sro!2s!4v1650529500065!5m2!1sro!2s"
              title="maps"
              className="alimentarea-publica-iframe"
            ></iframe>
          </div>
          <div className="alimentarea-publica-previous-events section-container">
            <div className="alimentarea-publica-max-width3 max-content-container">
              <div className="alimentarea-publica-heading-container2">
                <h1 className="alimentarea-publica-text66 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="alimentarea-publica-text68">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </div>
      <style jsx>
        {`
          .alimentarea-publica-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .alimentarea-publica-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .alimentarea-publica-hero {
            position: relative;
            padding-top: 128px;
          }
          .alimentarea-publica-max-width {
            z-index: 1;
            align-items: stretch;
          }
          .alimentarea-publica-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .alimentarea-publica-text {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .alimentarea-publica-text02 {
            text-transform: lowercase;
          }
          .alimentarea-publica-text04 {
            color: var(--dl-color-scheme-pink);
          }
          .alimentarea-publica-text05 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .alimentarea-publica-text07 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .alimentarea-publica-text08 {
            font-weight: 500;
            text-transform: lowercase;
          }
          .alimentarea-publica-text09 {
            font-weight: 500;
          }
          .alimentarea-publica-text10 {
            font-weight: 500;
            text-transform: capitalize;
          }
          .alimentarea-publica-text12 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .alimentarea-publica-text14 {
            text-transform: lowercase;
          }
          .alimentarea-publica-text16 {
            text-transform: lowercase;
          }
          .alimentarea-publica-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .alimentarea-publica-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .alimentarea-publica-secondary {
            text-decoration: none;
          }
          .alimentarea-publica-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .alimentarea-publica-container1 {
            width: 100%;
            height: 511px;
            display: flex;
            background-size: cover;
            background-image: url('/home-600h.webp');
            background-position: center;
          }
          .alimentarea-publica-blue-background {
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
          .alimentarea-publica-text-content {
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
          .alimentarea-publica-text17 {
            font-size: 3rem;
            text-align: center;
          }
          .alimentarea-publica-text18 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: lowercase;
          }
          .alimentarea-publica-text19 {
            text-transform: capitalize;
          }
          .alimentarea-publica-speakers {
            display: flex;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .alimentarea-publica-max-width1 {
            flex-direction: column;
          }
          .alimentarea-publica-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .alimentarea-publica-component01 {
            text-decoration: none;
          }
          .alimentarea-publica-component02 {
            text-decoration: none;
          }
          .alimentarea-publica-component04 {
            text-decoration: none;
          }
          .alimentarea-publica-component05 {
            text-decoration: none;
          }
          .alimentarea-publica-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .alimentarea-publica-container2 {
            flex-direction: column;
          }
          .alimentarea-publica-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .alimentarea-publica-text21 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .alimentarea-publica-text22 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .alimentarea-publica-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .alimentarea-publica-location {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .alimentarea-publica-image {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .alimentarea-publica-content-container1 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .alimentarea-publica-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .alimentarea-publica-text24 {
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
          .alimentarea-publica-text25 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.1;
          }
          .alimentarea-publica-container4 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .alimentarea-publica-text26 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .alimentarea-publica-text28 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .alimentarea-publica-text30 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .alimentarea-publica-container5 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .alimentarea-publica-text32 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .alimentarea-publica-text33 {
            color: var(--dl-color-scheme-white);
            text-align: justify;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .alimentarea-publica-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .alimentarea-publica-register {
            text-decoration: none;
          }
          .alimentarea-publica-learn-more {
            color: var(--dl-color-scheme-white);
            transition: 0.3s;
            border-color: var(--dl-color-scheme-white);
            text-decoration: none;
          }
          .alimentarea-publica-learn-more:hover {
            border-color: var(--dl-color-scheme-pink);
          }
          .alimentarea-publica-agenda {
            display: flex;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .alimentarea-publica-max-width2 {
            flex-direction: column;
          }
          .alimentarea-publica-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .alimentarea-publica-text37 {
            text-align: center;
          }
          .alimentarea-publica-text39 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .alimentarea-publica-workshops {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .alimentarea-publica-content-container2 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .alimentarea-publica-container6 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .alimentarea-publica-text40 {
            margin-bottom: 42px;
          }
          .alimentarea-publica-text43 {
            color: var(--dl-color-scheme-pink);
          }
          .alimentarea-publica-text46 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .alimentarea-publica-text47 {
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
          .alimentarea-publica-text50 {
            font-weight: 700;
          }
          .alimentarea-publica-text51 {
            font-weight: 700;
          }
          .alimentarea-publica-text52 {
            font-weight: 700;
            text-decoration: underline;
          }
          .alimentarea-publica-text53 {
            font-weight: 700;
            text-decoration: underline;
          }
          .alimentarea-publica-text55 {
            text-decoration: underline;
          }
          .alimentarea-publica-text59 {
            text-decoration: underline;
          }
          .alimentarea-publica-text60 {
            text-decoration: underline;
          }
          .alimentarea-publica-text61 {
            text-decoration: underline;
          }
          .alimentarea-publica-text62 {
            text-decoration: underline;
          }
          .alimentarea-publica-text65 {
            text-decoration: underline;
          }
          .alimentarea-publica-br5 {
            text-decoration: underline;
          }
          .alimentarea-publica-iframe {
            width: 50%;
            min-height: 880px;
          }
          .alimentarea-publica-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .alimentarea-publica-max-width3 {
            flex-direction: column;
          }
          .alimentarea-publica-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .alimentarea-publica-text66 {
            text-align: center;
          }
          .alimentarea-publica-text68 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .alimentarea-publica-max-width {
              flex-direction: column;
            }
            .alimentarea-publica-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .alimentarea-publica-container1 {
              width: 583px;
            }
            .alimentarea-publica-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .alimentarea-publica-text18 {
              max-width: 100%;
            }
            .alimentarea-publica-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .alimentarea-publica-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .alimentarea-publica-location {
              flex-direction: column;
            }
            .alimentarea-publica-image {
              width: 100%;
            }
            .alimentarea-publica-content-container1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .alimentarea-publica-container3 {
              margin-top: -100px;
              align-items: center;
            }
            .alimentarea-publica-container5 {
              max-width: 100%;
              margin-left: 0px;
            }
            .alimentarea-publica-container6 {
              margin-right: var(--dl-space-space-unit);
            }
            .alimentarea-publica-iframe {
              width: 50%;
              min-height: 600px;
            }
          }
          @media (max-width: 767px) {
            .alimentarea-publica-container1 {
              width: 505px;
            }
            .alimentarea-publica-text-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .alimentarea-publica-text18 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .alimentarea-publica-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .alimentarea-publica-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .alimentarea-publica-image {
              max-height: 100%;
            }
            .alimentarea-publica-content-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .alimentarea-publica-text24 {
              margin-left: -24px;
            }
            .alimentarea-publica-btns-container1 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .alimentarea-publica-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .alimentarea-publica-container6 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .alimentarea-publica-iframe {
              width: 100%;
            }
            .alimentarea-publica-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .alimentarea-publica-text {
              font-size: 60px;
            }
            .alimentarea-publica-container1 {
              width: 424px;
            }
            .alimentarea-publica-text-content {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .alimentarea-publica-speakers-container {
              grid-template-columns: 1fr;
            }
            .alimentarea-publica-text26 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .alimentarea-publica-text28 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .alimentarea-publica-text30 {
              font-size: 50px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .alimentarea-publica-text33 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default AlimentareaPublica
