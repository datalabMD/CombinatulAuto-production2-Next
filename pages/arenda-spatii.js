import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const ArendaSpatii = (props) => {
  return (
    <>
      <div className="arenda-spatii-container1">
        <Head>
          <title>Arenda-spatii - SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="Arenda-spatii - SA Combinatul Auto Nr.4 din Chișinău"
          />
          <meta
            property="og:description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9420d205-bbd0-411e-a57c-0f68008e7daf/ea494eb0-6cf8-464c-b070-cddce041bc5c?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <Navigation
          imageSrc="navigationhttps://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          rootClassName="navigationroot-class-name10"
        ></Navigation>
        <main className="arenda-spatii-main">
          <div className="arenda-spatii-hero section-container">
            <div className="arenda-spatii-max-width1 max-content-container">
              <div className="arenda-spatii-content-container1">
                <h1 className="arenda-spatii-text10">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="arenda-spatii-text12">nr.4</span>
                  <br></br>
                  <span className="arenda-spatii-text14">s</span>
                  <span className="arenda-spatii-text15">
                    ervicii de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="arenda-spatii-text17">calitate</span>
                  <br></br>
                  <span className="arenda-spatii-text18">IN</span>
                  <span className="arenda-spatii-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="arenda-spatii-text20">Moldova</span>
                  <span className="arenda-spatii-text21"></span>
                </h1>
                <span className="arenda-spatii-text22">
                  <span>N</span>
                  <span className="arenda-spatii-text24">
                    oi garantam executarea rapida și la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="arenda-spatii-text26">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="arenda-spatii-btns-container1">
                  <a
                    href="#servicii"
                    className="arenda-spatii-primary button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="#contacts"
                    className="arenda-spatii-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="arenda-spatii-video-container">
                <div className="arenda-spatii-container2"></div>
              </div>
            </div>
            <div className="arenda-spatii-blue-background"></div>
          </div>
          <div className="arenda-spatii-text-content">
            <h1 className="arenda-spatii-text27">Arenda Spatiilor</h1>
            <span className="arenda-spatii-text28">
              <span>
                Combinatul Auto Nr.4 din Chisinau
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <span className="arenda-spatii-text32">
                ofera in locatiune, la preturi avantajoase:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="arenda-spatii-text33">
                -spatii pentru oficii
              </span>
              <br></br>
              <span className="arenda-spatii-text34">
                -spatii pentru depozit
              </span>
              <br></br>
              <span className="arenda-spatii-text35">
                -spatii pentru ateliere de service Auto
              </span>
              <br></br>
              <span className="arenda-spatii-text36">
                -spatii pentru parcari auto
              </span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="arenda-spatii-speakers section-container">
            <div
              id="servicii"
              className="arenda-spatii-max-width2 max-content-container"
            >
              <div className="arenda-spatii-speakers-container">
                <Link href="/transport">
                  <a>
                    <SpeakerCard
                      role="speaker-cardlivrare national"
                      lastName="speaker-cardmarfuri"
                      firstName="speaker-card-transport"
                      imageSrc="speaker-card/15-300h.webp"
                      rootClassName="speaker-cardroot-class-name15"
                      className="arenda-spatii-component11"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/reparatii-auto">
                  <a>
                    <SpeakerCard
                      role="servicii electrice si mecanice"
                      lastName="auto"
                      firstName="reparatii"
                      imageSrc="/16-300h-300h.webp"
                      className="arenda-spatii-component12"
                    ></SpeakerCard>
                  </a>
                </Link>
                <SpeakerCard
                  role="rapid si calitativ"
                  lastName="auto"
                  firstName="spalatorie"
                  imageSrc="/14-300h.webp"
                ></SpeakerCard>
                <Link href="/parcare-auto">
                  <a>
                    <SpeakerCard
                      role="siguranta maxima"
                      lastName="auto"
                      firstName="parcare"
                      imageSrc="/13-300h.webp"
                      className="arenda-spatii-component14"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/arenda-spatii">
                  <a>
                    <SpeakerCard
                      role="siguranta maxima"
                      lastName="spatiilor"
                      firstName="arenda"
                      imageSrc="/12-300h.webp"
                      className="arenda-spatii-component15"
                    ></SpeakerCard>
                  </a>
                </Link>
                <Link href="/alimentarea-publica">
                  <a>
                    <SpeakerCard
                      role="servicii de alimentatie (cantina)"
                      lastName="publica"
                      firstName="alimentatie"
                      imageSrc="/cantina-300w.webp"
                      className="arenda-spatii-component16"
                    ></SpeakerCard>
                  </a>
                </Link>
                <SpeakerCard
                  role="speaker-cardin curind"
                  lastName="speaker-cardnoi"
                  firstName="speaker-cardservicii "
                  imageSrc="speaker-cardhttps://images.unsplash.com/photo-1620673504048-d2899f20de1c?ixid=mnw5mt-my-m-xwwf-df8c2-vhcm-nof-df8f-g1vb-g-rvdm-f8zw58m-hx8f-hwx-nj-uw-mz-ex-nz-e3&amp;ixlib=rb-1.2.1&amp;h=300"
                  rootClassName="speaker-cardroot-class-name16"
                ></SpeakerCard>
                <SpeakerCard
                  role="speaker-cardin curind ..."
                  lastName="speaker-cardnoi"
                  firstName="speaker-cardservicii"
                  imageSrc="speaker-card/rm-300h.webp"
                  rootClassName="speaker-cardroot-class-name17"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="arenda-spatii-numbers-banner section-container">
            <div className="arenda-spatii-container3 max-content-container">
              <div className="arenda-spatii-heading-container1">
                <span className="arenda-spatii-text38">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="arenda-spatii-text39 Heading2">
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
              <div className="arenda-spatii-numbers-container">
                <NumbersCard text="expeditiii"></NumbersCard>
                <NumbersCard
                  text="ani"
                  number="12"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="evenimente"
                  number="64"
                  imageSrc="/interface%20calendar%20favorite-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="companii"
                  number="234"
                  imageSrc="/shopping%20bag%20suit%20case-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="orase"
                  number="14"
                  imageSrc="/travel%20map%20location%20pin-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="diagnosticari"
                  number="1,071"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="arenda-spatii-location">
            <img
              id="news"
              alt="image"
              src="https://images.unsplash.com/photo-1618312980096-873bd19759a0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGF1dG8lMjByZXBhaXJ8ZW58MHx8fHwxNjUwMzA4OTI0&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="arenda-spatii-image"
            />
            <div className="arenda-spatii-content-container2 section-container">
              <div className="arenda-spatii-container4">
                <span className="arenda-spatii-text41">REPARAtIE AUTO</span>
                <span className="arenda-spatii-text42">Calitativ</span>
                <div className="arenda-spatii-container5">
                  <span className="arenda-spatii-text43">
                    <span>motoare</span>
                  </span>
                  <span className="arenda-spatii-text45">
                    <span>caroserii</span>
                  </span>
                  <span className="arenda-spatii-text47">
                    <span>diagnosticare</span>
                  </span>
                </div>
                <div className="arenda-spatii-container6">
                  <span className="arenda-spatii-text49">
                    oferim servicii de reparație auto
                  </span>
                  <span className="arenda-spatii-text50">
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
                  <div className="arenda-spatii-btns-container2">
                    <a
                      href="#contacts"
                      className="arenda-spatii-register button-secondary button button-md"
                    >
                      programeaza-te
                    </a>
                    <a
                      href="#contacts"
                      className="arenda-spatii-learn-more button button-outline button-md-border"
                    >
                      adresa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arenda-spatii-agenda section-container">
            <div
              id="contacts"
              className="arenda-spatii-max-width3 max-content-container"
            >
              <div className="arenda-spatii-heading-container2">
                <h1 id="contact" className="arenda-spatii-text54 Heading2">
                  <span>ADRESA NOASTRA</span>
                </h1>
                <span className="arenda-spatii-text56">
                  te asteptam sa testezi serviciile noastre
                </span>
              </div>
            </div>
          </div>
          <div className="arenda-spatii-workshops">
            <div className="arenda-spatii-content-container3">
              <div className="arenda-spatii-container7">
                <h1 className="arenda-spatii-text57 Heading2">
                  <span>contacte</span>
                  <br></br>
                  <span className="arenda-spatii-text60">
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
                <span className="arenda-spatii-text63">
                  ----------------------------------------------
                </span>
                <span className="arenda-spatii-text64">
                  <span></span>
                  <br></br>
                  <span>MobILE:</span>
                  <span className="arenda-spatii-text67">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="arenda-spatii-text68">
                    (+373)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:37369322886">
                    <span className="arenda-spatii-text69">69322886</span>
                  </a>
                  <span className="arenda-spatii-text70"></span>
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
                    <span className="arenda-spatii-text72">22521144</span>
                  </a>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span></span>
                  <a href="mailto:COMBINATAUTO@GMAIL.COM?subject=email">
                    <span className="arenda-spatii-text76">
                      Combinatauto@gmail.com
                    </span>
                  </a>
                  <span className="arenda-spatii-text77"></span>
                  <span className="arenda-spatii-text78"></span>
                  <span className="arenda-spatii-text79"></span>
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
                    <span className="arenda-spatii-text82">dsaca4@mail.ru</span>
                    <br className="arenda-spatii-br20"></br>
                  </a>
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1361.1581244223369!2d28.896054673961334!3d46.97512272089735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9796e1caa0069%3A0x18af5b1f21321713!2sSA%20Combinatul%20Auto%20nr.4%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sro!2s!4v1650529500065!5m2!1sro!2s"
              title="maps"
              className="arenda-spatii-iframe"
            ></iframe>
          </div>
          <div className="arenda-spatii-previous-events section-container">
            <div className="arenda-spatii-max-width4 max-content-container">
              <div className="arenda-spatii-heading-container3">
                <h1 className="arenda-spatii-text83 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="arenda-spatii-text85">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name10"></Footer>
      </div>
      <style jsx>
        {`
          .arenda-spatii-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .arenda-spatii-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .arenda-spatii-hero {
            position: relative;
            padding-top: 128px;
          }
          .arenda-spatii-max-width1 {
            z-index: 1;
            align-items: stretch;
          }
          .arenda-spatii-content-container1 {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .arenda-spatii-text10 {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .arenda-spatii-text12 {
            text-transform: lowercase;
          }
          .arenda-spatii-text14 {
            color: var(--dl-color-scheme-pink);
          }
          .arenda-spatii-text15 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .arenda-spatii-text17 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .arenda-spatii-text18 {
            font-style: normal;
            font-weight: 600;
            text-transform: lowercase;
          }
          .arenda-spatii-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .arenda-spatii-text20 {
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
          }
          .arenda-spatii-text21 {
            font-style: normal;
            font-weight: 600;
          }
          .arenda-spatii-text22 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .arenda-spatii-text24 {
            text-transform: lowercase;
          }
          .arenda-spatii-text26 {
            text-transform: lowercase;
          }
          .arenda-spatii-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .arenda-spatii-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .arenda-spatii-secondary {
            text-decoration: none;
          }
          .arenda-spatii-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .arenda-spatii-container2 {
            width: 100%;
            height: 511px;
            display: flex;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/home-600h.webp');
            background-position: center;
          }
          .arenda-spatii-container2:hover {
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px rgba(111, 102, 102, 0.31);
          }
          .arenda-spatii-blue-background {
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
          .arenda-spatii-text-content {
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
          .arenda-spatii-text27 {
            font-size: 3rem;
            text-align: center;
          }
          .arenda-spatii-text28 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .arenda-spatii-text32 {
            text-transform: lowercase;
          }
          .arenda-spatii-text33 {
            text-transform: lowercase;
          }
          .arenda-spatii-text34 {
            text-transform: lowercase;
          }
          .arenda-spatii-text35 {
            text-transform: lowercase;
          }
          .arenda-spatii-text36 {
            text-transform: lowercase;
          }
          .arenda-spatii-speakers {
            display: flex;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .arenda-spatii-max-width2 {
            flex-direction: column;
          }
          .arenda-spatii-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .arenda-spatii-component11 {
            text-decoration: none;
          }
          .arenda-spatii-component12 {
            text-decoration: none;
          }
          .arenda-spatii-component14 {
            text-decoration: none;
          }
          .arenda-spatii-component15 {
            text-decoration: none;
          }
          .arenda-spatii-component16 {
            text-decoration: none;
          }
          .arenda-spatii-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .arenda-spatii-container3 {
            flex-direction: column;
          }
          .arenda-spatii-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .arenda-spatii-text38 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .arenda-spatii-text39 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .arenda-spatii-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .arenda-spatii-location {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .arenda-spatii-image {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .arenda-spatii-content-container2 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .arenda-spatii-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .arenda-spatii-text41 {
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
          .arenda-spatii-text42 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.1;
          }
          .arenda-spatii-container5 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .arenda-spatii-text43 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .arenda-spatii-text45 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .arenda-spatii-text47 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .arenda-spatii-container6 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .arenda-spatii-text49 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .arenda-spatii-text50 {
            color: var(--dl-color-scheme-white);
            text-align: justify;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .arenda-spatii-btns-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .arenda-spatii-register {
            text-decoration: none;
          }
          .arenda-spatii-learn-more {
            color: var(--dl-color-scheme-white);
            transition: 0.3s;
            border-color: var(--dl-color-scheme-white);
            text-decoration: none;
          }
          .arenda-spatii-learn-more:hover {
            border-color: var(--dl-color-scheme-pink);
          }
          .arenda-spatii-agenda {
            display: flex;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .arenda-spatii-max-width3 {
            flex-direction: column;
          }
          .arenda-spatii-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .arenda-spatii-text54 {
            text-align: center;
          }
          .arenda-spatii-text56 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .arenda-spatii-workshops {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .arenda-spatii-content-container3 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .arenda-spatii-container7 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .arenda-spatii-text57 {
            margin-bottom: 42px;
          }
          .arenda-spatii-text60 {
            color: var(--dl-color-scheme-pink);
          }
          .arenda-spatii-text63 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .arenda-spatii-text64 {
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
          .arenda-spatii-text67 {
            font-weight: 700;
          }
          .arenda-spatii-text68 {
            font-weight: 700;
          }
          .arenda-spatii-text69 {
            font-weight: 700;
            text-decoration: underline;
          }
          .arenda-spatii-text70 {
            font-weight: 700;
            text-decoration: underline;
          }
          .arenda-spatii-text72 {
            text-decoration: underline;
          }
          .arenda-spatii-text76 {
            text-decoration: underline;
          }
          .arenda-spatii-text77 {
            text-decoration: underline;
          }
          .arenda-spatii-text78 {
            text-decoration: underline;
          }
          .arenda-spatii-text79 {
            text-decoration: underline;
          }
          .arenda-spatii-text82 {
            text-decoration: underline;
          }
          .arenda-spatii-br20 {
            text-decoration: underline;
          }
          .arenda-spatii-iframe {
            width: 50%;
            min-height: 880px;
          }
          .arenda-spatii-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .arenda-spatii-max-width4 {
            flex-direction: column;
          }
          .arenda-spatii-heading-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .arenda-spatii-text83 {
            text-align: center;
          }
          .arenda-spatii-text85 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .arenda-spatii-max-width1 {
              flex-direction: column;
            }
            .arenda-spatii-content-container1 {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .arenda-spatii-container2 {
              width: 583px;
            }
            .arenda-spatii-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .arenda-spatii-text28 {
              max-width: 100%;
            }
            .arenda-spatii-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .arenda-spatii-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .arenda-spatii-location {
              flex-direction: column;
            }
            .arenda-spatii-image {
              width: 100%;
            }
            .arenda-spatii-content-container2 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .arenda-spatii-container4 {
              margin-top: -100px;
              align-items: center;
            }
            .arenda-spatii-container6 {
              max-width: 100%;
              margin-left: 0px;
            }
            .arenda-spatii-container7 {
              margin-right: var(--dl-space-space-unit);
            }
            .arenda-spatii-iframe {
              width: 50%;
              min-height: 600px;
            }
          }
          @media (max-width: 767px) {
            .arenda-spatii-container2 {
              width: 505px;
            }
            .arenda-spatii-text-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .arenda-spatii-text28 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .arenda-spatii-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .arenda-spatii-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .arenda-spatii-image {
              max-height: 100%;
            }
            .arenda-spatii-content-container2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .arenda-spatii-text41 {
              margin-left: -24px;
            }
            .arenda-spatii-btns-container2 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .arenda-spatii-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .arenda-spatii-container7 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .arenda-spatii-iframe {
              width: 100%;
            }
            .arenda-spatii-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .arenda-spatii-text10 {
              font-size: 60px;
            }
            .arenda-spatii-container2 {
              width: 424px;
            }
            .arenda-spatii-text-content {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .arenda-spatii-speakers-container {
              grid-template-columns: 1fr;
            }
            .arenda-spatii-text43 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .arenda-spatii-text45 {
              font-size: 50px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .arenda-spatii-text47 {
              font-size: 50px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .arenda-spatii-text50 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default ArendaSpatii
