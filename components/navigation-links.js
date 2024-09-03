import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/despre-noi">
          <a className="navigation-links-link1 Navigation-Link">
            {props.link1}
          </a>
        </Link>
        <Link href="/reparatii-auto">
          <a className="navigation-links-link2 Navigation-Link">
            {props.link2}
          </a>
        </Link>
        <a
          href="https://combinatulauto.datalab.md/#news"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links-link3 Navigation-Link"
        >
          {props.link3}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link1 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links-link1:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-link2 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
          }
          .navigation-links-link2:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-link3 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
          }
          .navigation-links-link3:hover {
            color: var(--dl-color-scheme-pink);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'servicii',
  link3: 'noutati',
  link1: 'despre noi',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
