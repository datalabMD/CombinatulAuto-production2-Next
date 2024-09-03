import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard11 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card11-blog-post-card ${props.rootClassName} `}
      >
        <div className="blog-post-card11-image1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc1}
            className="blog-post-card11-image2"
          />
        </div>
        <div className="blog-post-card11-container1">
          <span className="blog-post-card11-text1">{props.label}</span>
          <span className="blog-post-card11-text2">{props.title}</span>
          <span className="blog-post-card11-text3">{props.description}</span>
          <div className="blog-post-card11-container2">
            <div className="blog-post-card11-profile">
              <div className="blog-post-card11-container3"></div>
              <span className="blog-post-card11-text4">{props.author}</span>
            </div>
            <span className="blog-post-card11-text5">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card11-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card11-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card11-image1 {
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
            background-position: center;
          }
          .blog-post-card11-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .blog-post-card11-container1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card11-text1 {
            color: #595959;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card11-text2 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .blog-post-card11-text3 {
            color: rgb(89, 89, 89);
            font-weight: 400;
          }
          .blog-post-card11-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #d9d9d9;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card11-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card11-container3 {
            width: var(--dl-size-size-small);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: 8fe14d57-b8ec-4066-bcf3-b3d926f08202;
            background-position: center;
          }
          .blog-post-card11-text4 {
            font-weight: 300;
          }
          .blog-post-card11-text5 {
            color: #999999;
            font-weight: 300;
          }

          @media (max-width: 991px) {
            .blog-post-card11-image1 {
              height: 350px;
            }
            .blog-post-card11-container3 {
              background-size: cover;
              background-image: url('/external/logoblue.svg');
            }
          }
          @media (max-width: 479px) {
            .blog-post-card11-container3 {
              background-size: cover;
              background-image: url('/external/logoblue.svg');
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard11.defaultProps = {
  time: '',
  author: 'Publicat:',
  imageSrc1: 'ccb2acb6-7803-4f6a-bc30-8e522909b3bf',
  rootClassName: '',
  title: 'Adunarea Generala Extraordinara a actionarilor',
  label: 'NOUTATI',
  imageAlt: 'image',
  description: 'lOREM IPSUM LOREM IPSUM ....',
}

BlogPostCard11.propTypes = {
  time: PropTypes.string,
  author: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard11
