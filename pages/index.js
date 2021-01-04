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
        <center><a href="https://github.com/tanishq-soni">GitHub</a><br></br>
        <br></br>📧 : <a href="mailto:hi@tanishqsoni.me">hi@tanishqsoni.me</a></center>
        <center><br></br>☕ : <a href="https://www.buymeacoffee.com/tanishqsoni">buy me a coffee</a></center><br></br>
         <center>
        <div id="webring-wrapper">
          <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
          <a href="https://webring.hackclub.com/" title="Hack Club Webring" alt="Hack Club Webring"><b>h</b></a>
          <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
          <script src="https://webring.hackclub.com/public/embed.min.js"></script>
        </div>
         </center>
        {/* <footer>
          <p>copyright 2021</p>
        </footer> */}
      </section>
    </Layout>
  )
}
