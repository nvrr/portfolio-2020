import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CuteNavLink from "../components/cuteNavLink"
import styles from "./index.module.scss"; 
import RecentProjects from "../components/recentProjects"
import Section from "../components/Section"


const IndexPage = (props) => {

  const siteTitle = "Grace | Design & Code"

  return (
    <Layout 
      location={props.location} 
      title={siteTitle} 
      >
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <SEO
        title="Grace"
        keywords={[`projects`, `gatsby`, `javascript`, `react`]}
      />

      <div className={[styles.banner, styles.index_section].join(' ')}>
        <h1 className={styles.banner_landing__greeting}>
          Design + Code
        </h1>
        <h3 className={styles.banner_landing__text}> I help people move their brand and products into the future.</h3>
          <CuteNavLink
            path = "/contact"
            altText = "Contact Me"
            external={false}
          >
            <h3>Got an idea?</h3>
          </CuteNavLink>
      </div>


      <Section 
        title="Full Frontal Design" 
        action="More About Me" 
        link="/about" 
        text="My digital design and front end development skills are at your service: from product development to innovating your brand’s user digital experience .">
       
      </Section> 

      <RecentProjects/>

      <Section 
        title="Contact Me" 
        action="Let's Chat" 
        link="/contact" 
        text="If you’ve got a great idea or would like to chat about a unique opportunity, contact me.">
      </Section> 
  </Layout>
  )
}

export default IndexPage
