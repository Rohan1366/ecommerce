import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
   <Layout title={"About us - Ecommer app"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/about.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-2">
              An inspired Full stack web developer, always curious about new
            problems and learning new things in order to deliver out of the box
            solutions with complete ownership. Seeking to contribute my skills and
            expertise in the company growth. Ability to work in team environment,
            emphasizing team goals.


        </p>
      </div>
    </div>
  </Layout>
  )
}

export default About