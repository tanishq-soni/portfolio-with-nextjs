import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am undergraduate CS student👨‍🎓 and also a programmer👨🏻‍💻</p>
        <center><a href="https://github.com/tanishq-soni">GitHub</a></center>
      </section>
    </Layout>
  )
}
