import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import product from '../images/Real-Space-Gray.png'

import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />

          <meta name="author" content="Swizec Teller" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />

          {/* TODO change `og:type` to `books.book` and add
          property `books:isbn` when publisher releases isbn */}
          <meta property="og:type" content={'product'} />
          <meta property="og:url" content={data.site.siteMetadata.url} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:image" content={product} />
          <meta property="og:image:width" content={1154} />
          <meta property="og:image:height" content={1600} />
          <meta
            property="og:description"
            content={data.site.siteMetadata.description}
          />
          {/* TODO add `fb:app_id` property */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@swizec" />
          <meta name="twitter:creator" content="@swizec" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta
            name="twitter:description"
            content={data.site.siteMetadata.description}
          />
          <meta name="twitter:image" content={product} />
        </Helmet>

        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
