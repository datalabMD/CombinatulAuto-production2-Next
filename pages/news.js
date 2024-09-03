import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import BlogPostCard1 from '../components/blog-post-card1'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const News = (props) => {
  return (
    <>
      <div className="news-container10">
        <Head>
          <title>News - SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="News - SA Combinatul Auto Nr.4 din Chișinău"
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
          rootClassName="navigationroot-class-name4"
        ></Navigation>
        <main className="news-main">
          <div id="transport" className="news-hero section-container">
            <div className="news-max-width1 max-content-container">
              <div className="news-content-container">
                <h1 className="news-text10">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="news-text12">nr.4</span>
                  <br></br>
                  <span className="news-text14">s</span>
                  <span className="news-text15">
                    ervicii de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="news-text17">calitate</span>
                  <br></br>
                  <span className="news-text18">
                    IN
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="news-text19">Moldova</span>
                </h1>
                <span className="news-text20">
                  <span>N</span>
                  <span className="news-text22">
                    oi garantam executarea rapida și la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="news-text24">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="news-btns-container">
                  <a
                    href="https://combinatulauto.md/#servicii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="news-primary button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="https://combinatulauto.md/#contacts"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="news-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="news-video-container">
                <div className="news-container11"></div>
              </div>
            </div>
            <div className="news-blue-background"></div>
          </div>
          <div id="news" className="news-text-content">
            <h1 className="news-text25">Noutati</h1>
          </div>
          <div className="news-blog1">
            <Link href="/anunt-7">
              <a className="news-link1">
                <div className="news-container12">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text26">
                          Adunarea Generala extraordinara a actionarilor
                          04.09.2024
                        </span>
                      </Fragment>
                    }
                    title="Adunarea Generala  extraordinara a actionarilor 04.10.2024"
                    author="publicat : 02.09.2024"
                    imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" va informeaza ca la data de 04.09.2024 la orele 10-00 va avea loc Adunarea Generala ordinara anuala repetata a actionarilor pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName13"
                    className="news-component11"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
            <Link href="/anunt-6">
              <a className="news-link2">
                <div className="news-container13">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text27">
                          Adunarea Generala extraordinara a actionarilor
                          07.08.2024
                        </span>
                      </Fragment>
                    }
                    title="Adunarea Generala  extraordinara a actionarilor 04.10.2023"
                    author="publicat : 09.07.2024"
                    imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" va informeaza ca la data de 07.08.2024 la orele 10-00 va avea loc Adunarea Generala ordinara anuala repetata a actionarilor pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName20"
                    className="news-component12"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
          </div>
          <div className="news-blog2">
            <Link href="/anunt-4">
              <a className="news-link3">
                <div className="news-container14">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text28">
                          Adunarea generala extraordinara a actionarilor
                          13.09.2023
                        </span>
                      </Fragment>
                    }
                    title="Adunarea generala extraordinara a actionarilor 13.09.2023"
                    author="publicat : 13.09.2023"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" aduce la cunoştinţa acţionarilor săi ,că la data de 04 octombrie, 2023, la orele 10-00 va avea loc Adunarea Generală Extraordinară a acţionarilor săi pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName17"
                    className="news-component13"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
            <Link href="/anunt-5">
              <a className="news-link4">
                <div className="news-container15">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text29">
                          Adunarea Generala extraordinara a actionarilor
                          04.10.2023
                        </span>
                      </Fragment>
                    }
                    title="Adunarea Generala  extraordinara a actionarilor 04.10.2023"
                    author="publicat : 02.10.2023"
                    imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" aduce la cunoştinţa acţionarilor săi, că la data de 04 octombrie 2023, la orele 10-00 va avea loc Adunarea Generală Extraordinară a acţionarilor pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName19"
                    className="news-component14"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
          </div>
          <div className="news-blog3">
            <Link href="/anunt-3">
              <a className="news-link5">
                <div className="news-container16">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text30">
                          Adunarea generala extraordinara a actionarilor
                          05.04.2023
                        </span>
                      </Fragment>
                    }
                    title="Adunarea generala extraordinara a actionarilor 05.04.2023"
                    author="publicat : 13.03.2023"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" aduce la cunoştinţa acţionarilor săi ,că la data de 05-04-2023, la orele 10-00 va avea loc Adunarea Generală ordinară anuală a Acţionarilor pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName3"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
            <Link href="/anunt-2">
              <a className="news-link6">
                <div className="news-container17">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text31">
                          Adunarea generala extraordinara a actionarilor
                          18.01.2023
                        </span>
                      </Fragment>
                    }
                    title="Adunarea generala extraordinara a actionarilor 02.01.2023"
                    author="publicat : 04.01.2023"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" aduce la cunoştinţa acţionarilor săi ,că la data de 18-01-2023, la orele lO-00 va avea loc Adunarea Generală Extraordinară repetată a acţionarilor pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi ...'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName11"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
            <Link href="/anunt-1">
              <a className="news-link7">
                <div className="news-container18">
                  <BlogPostCard1
                    text={
                      <Fragment>
                        <span className="news-text32">
                          Adunarea generala extraordinara a actionarilor
                          02.03.2023
                        </span>
                      </Fragment>
                    }
                    title="Adunarea generala extraordinara a actionarilor 2023"
                    author="publicat : 12.11.2022"
                    imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    description='S.A."Combinatul Auto nr.4 din Chişinău" aduce la cunoştinţa acţionarilor săi ,că la data de 02 decembrie ,2022, la orele 10-00 va avea loc Adunarea Generală Extraordinară a acţionarilor săi pe adresa: mun.Chişinău,str.Pădurii 13, cu următoarea ordine de zi:'
                    profileSrc="60a53904-1e18-4c3b-9bc7-1aabdfa99c5d"
                    rootClassName="rootClassName12"
                  ></BlogPostCard1>
                </div>
              </a>
            </Link>
          </div>
          <div className="news-numbers-banner section-container">
            <div className="news-container19 max-content-container">
              <div className="news-heading-container1">
                <span className="news-text33">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="news-text34 Heading2">
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
              <div className="news-numbers-container">
                <NumbersCard
                  text="expeditiii"
                  imageSrc="/message-200h.png"
                ></NumbersCard>
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
          <div className="news-previous-events section-container">
            <div className="news-max-width2 max-content-container">
              <div className="news-heading-container2">
                <h1 className="news-text36 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="news-text38">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .news-container10 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .news-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hero {
            position: relative;
            padding-top: 128px;
          }
          .news-max-width1 {
            z-index: 1;
            align-items: stretch;
          }
          .news-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-text10 {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .news-text12 {
            text-transform: lowercase;
          }
          .news-text14 {
            color: var(--dl-color-scheme-pink);
          }
          .news-text15 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .news-text17 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .news-text18 {
            font-style: normal;
            font-weight: 600;
            text-transform: lowercase;
          }
          .news-text19 {
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
          }
          .news-text20 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .news-text22 {
            text-transform: lowercase;
          }
          .news-text24 {
            text-transform: lowercase;
          }
          .news-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .news-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-secondary {
            text-decoration: none;
          }
          .news-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .news-container11 {
            width: 100%;
            height: 511px;
            display: flex;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/home-1200h.webp');
            background-position: center;
          }
          .news-container11:hover {
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px rgba(111, 102, 102, 0.31);
          }
          .news-blue-background {
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
          .news-text-content {
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
          .news-text25 {
            font-size: 3rem;
            text-align: center;
          }
          .news-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .news-link1 {
            display: contents;
          }
          .news-container12 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-component11 {
            text-decoration: none;
          }
          .news-text26 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-link2 {
            display: contents;
          }
          .news-container13 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-component12 {
            text-decoration: none;
          }
          .news-text27 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-blog2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .news-link3 {
            display: contents;
          }
          .news-container14 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-component13 {
            text-decoration: none;
          }
          .news-text28 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-link4 {
            display: contents;
          }
          .news-container15 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-component14 {
            text-decoration: none;
          }
          .news-text29 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-blog3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .news-link5 {
            display: contents;
          }
          .news-container16 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-text30 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-link6 {
            display: contents;
          }
          .news-container17 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-text31 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-link7 {
            display: contents;
          }
          .news-container18 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
            text-decoration: none;
          }
          .news-text32 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .news-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .news-container19 {
            flex-direction: column;
          }
          .news-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .news-text33 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .news-text34 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .news-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .news-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .news-max-width2 {
            flex-direction: column;
          }
          .news-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .news-text36 {
            text-align: center;
          }
          .news-text38 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .news-max-width1 {
              flex-direction: column;
            }
            .news-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .news-container11 {
              width: 583px;
            }
            .news-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .news-blog1 {
              flex-direction: column;
            }
            .news-container12 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-container13 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-blog2 {
              flex-direction: column;
            }
            .news-container14 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-container15 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-blog3 {
              flex-direction: column;
            }
            .news-container16 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-container17 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-container18 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .news-container11 {
              width: 505px;
            }
            .news-text-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-blog2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-blog3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .news-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .news-text10 {
              font-size: 60px;
            }
            .news-container11 {
              width: 424px;
            }
            .news-text-content {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .news-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .news-blog2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .news-blog3 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default News
