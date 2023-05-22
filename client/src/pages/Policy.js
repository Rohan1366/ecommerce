import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
  <Layout title={" Privacy Policy"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
      <h1>Privacy Policy</h1>
       <p>
        This is not original website this is clone app dont share your personal details only try and enjoy beautyful work.
        If you write your original details take in your own risk . 

       </p>

      </div>
    </div>
  </Layout>
  )
}

export default Policy