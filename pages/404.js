import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="Page - SA Combinatul Auto Nr.4 din Chișinău"
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
          rootClassName="navigationroot-class-name2"
        ></Navigation>
        <main className="page-main">
          <div className="page-hero1 section-container">
            <div className="page-blue-background"></div>
          </div>
          <div className="page-hero2">
            <h1 className="page-text1">404</h1>
            <span className="page-text2">
              Pagina accesata nu exista
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="page-btn-group">
              <Link href="/">
                <a className="page-link button">Home page</a>
              </Link>
            </div>
          </div>
          <div className="page-previous-events section-container">
            <div className="page-max-width max-content-container">
              <div className="page-heading-container">
                <h1 className="page-text3 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="page-text5">
                  {' '}
                  garantăm executarea rapidă şi calitativă a comenzilor
                  Dumneavoastră
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .page-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-hero1 {
            position: relative;
            padding-top: 128px;
          }
          .page-blue-background {
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
          .page-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
              270deg,
              rgb(4, 122, 249) 0%,
              rgba(220, 229, 229, 0.07) 100%
            );
            background-repeat: top left;
            background-position: top left, center;
          }
          .page-text1 {
            color: var(--dl-color-scheme-white);
            font-size: 9rem;
          }
          .page-text2 {
            color: var(--dl-color-scheme-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .page-link {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .page-link:hover {
            transform: scale(1.02);
          }
          .page-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .page-max-width {
            flex-direction: column;
          }
          .page-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .page-text3 {
            text-align: center;
          }
          .page-text5 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .page-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .page-hero2 {
              flex-direction: column;
            }
            .page-text1 {
              text-align: center;
            }
            .page-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .page-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .page-hero2 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .page-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
