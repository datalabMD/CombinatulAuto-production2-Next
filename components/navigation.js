import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Navigation = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation-header ${props.rootClassName} `}
      >
        <div className="navigation-max-width">
          <Link href="/">
            <a className="navigation-link">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                width="135"
                height="80"
                className="navigation-image1"
              />
            </a>
          </Link>
          <div className="navigation-nav1">
            <NavigationLinks rootClassName="navigation-linksroot-class-name17"></NavigationLinks>
            <a
              href="https://combinatulauto.datalab.md/#contacts"
              className="navigation-register1 button-primary button button-md"
            >
              {props.button}
            </a>
          </div>
          <div data-role="BurgerMenu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="navigation-mobile-menu">
            <div className="navigation-nav2">
              <div className="navigation-container">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  width="130"
                  height="80"
                  className="navigation-image2"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="navigation-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-linksroot-class-name18"></NavigationLinks>
              <a
                href="https://combinatulauto.datalab.md/#contacts"
                className="navigation-register2 button-primary button button-md"
              >
                {props.button1}
              </a>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navigation-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navigation-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navigation-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .navigation-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navigation-link {
            display: contents;
          }
          .navigation-image1 {
            height: 80px;
            object-fit: cover;
            margin-left: 0px;
            text-decoration: none;
          }
          .navigation-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-register1 {
            color: var(--dl-color-scheme-darkblue);
            margin-left: 41px;
            text-decoration: none;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-register1:hover {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-pink);
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon10 {
            fill: var(--dl-color-scheme-darkblue);
            width: 24px;
            height: 24px;
            display: flex;
          }
          .navigation-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-color: #fff;
            background-image: url('/blue-bg-1500h.webp');
          }
          .navigation-nav2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .navigation-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon12 {
            fill: var(--dl-color-scheme-white);
            width: 24px;
            height: 24px;
          }
          .navigation-register2 {
            color: var(--dl-color-scheme-darkblue);
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-register2:hover {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-pink);
          }
          .navigation-icon14 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon16 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon18 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigationroot-class-name {
            top: 0px;
            left: 0px;
          }

          .navigationroot-class-name2 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name3 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name4 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name5 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name6 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name7 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name8 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name9 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name10 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name11 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name12 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name13 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name14 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name15 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name16 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name17 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name18 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name19 {
            top: 0px;
            left: 0px;
          }
          .navigationroot-class-name20 {
            top: 0px;
            left: 0px;
          }
          @media (max-width: 991px) {
            .navigation-nav1 {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
            }
            .navigation-mobile-menu {
              background-size: cover;
              background-image: url('/blue-bg-1500h.webp');
            }
            .navigation-image2 {
              height: 80px;
            }
          }
          @media (max-width: 767px) {
            .navigation-max-width {
              padding: var(--dl-space-space-unit);
            }
            .navigation-image2 {
              height: 80px;
            }
          }
          @media (max-width: 479px) {
            .navigation-nav1 {
              display: none;
            }
            .navigation-mobile-menu {
              padding: 16px;
              background-size: cover;
              background-image: url('/blue-bg-1500h.webp');
            }
            .navigation-image2 {
              height: 80px;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  imageAlt2: 'image',
  button1: 'contacte',
  rootClassName: '',
  button: 'contact',
  imageAlt1: 'image',
  imageSrc2: '60a53904-1e18-4c3b-9bc7-1aabdfa99c5d',
  imageSrc1: '/logobluewhitelogoblue.svg',
}

Navigation.propTypes = {
  imageAlt2: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Navigation
