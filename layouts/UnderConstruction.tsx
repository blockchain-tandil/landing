// Layout for Under Construction Landing Page: A Separate Layout for the
// Under Construction page so that it doesnt affect the other pages, and
// can be easily removed once the other pages are created!

import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lobster|Permanent+Marker|Roboto+Slab|Kaushan+Script" rel="stylesheet" />
    </Head>
    {children}
    <style global jsx>{`
      html {
        min-height: 666px;
        min-width: 320px;
        height: 100%;
      }
      body {
        background-image: url(/static/construction.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      . {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
)

export default Layout
