import * as React from 'react'
import Layout from '../layouts/UnderConstruction' // Under Construction Page Layout

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Tandil.dev">
      <style jsx>{`
        #wrapper {
          text-align: center;
         	color: white;
        }
        h1 {
          padding-top: 180px;
          padding-bottom: 40px;
          font-family: 'Lobster', cursive;
          font-size: 54px;
          letter-spacing: 6px;
          text-shadow: 1px 1px 36px black;
        }
        h2 {
          display: inline-block;
          font-family: 'Permanent Marker', cursive;
          font-size: 26px;
          letter-spacing: 2px;
          border: 4px;
          border-style: solid;
          width: 250px;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-bottom: 5px;
        }
        p {
          font-family: 'Roboto Slab', serif;
          font-size: 16px;
          text-shadow: 1px 1px 16px black;
          letter-spacing: 1px;
          padding-bottom: 40px;
        }
        a {
          font-family: 'Kaushan Script', cursive;
          font-size: 18px;
          letter-spacing: 1px;
          text-decoration: none;
          color: white;
          padding-bottom: 20px;
        }
        a:hover {
          color: rgba(255,255,255, 0.95);
          text-shadow: 1px 1px 8px black;
        }
      `}</style>
      <div id="wrapper">
        <h1>Tandil.dev</h1>
        <h2>Coming Soon</h2>
        <p>Our website is under construction.<br/>We'll be here soon with our new awesome site!</p>
        <a href="https://blockchain.tandil.dev/">- Goto Blockchain Tandil -</a>
      </div>
    </Layout>
  )
}

export default IndexPage;
