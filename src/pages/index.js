import React from 'react'

import Layout from '../components/layout'
import Hero from '../widgets/Hero'
import CopyLight from '../widgets/CopyLight'

const IndexPage = () => (
  <Layout>
    <Hero />
    {`^^ <Hero /> ^^`}
    <hr />
    <CopyLight />
    {`^^ <CopyLight /> ^^`}
    <hr />
  </Layout>
)

export default IndexPage
