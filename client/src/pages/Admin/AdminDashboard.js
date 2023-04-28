import React from 'react'
import Adminmenu from '../../components/Layout/Adminmenu'
import Layout from '../../components/Layout/Layout'

const AdminDashboard = () => {
  return (
    <Layout>
        <div className='container-fluid m-3 p-3'>
          <div className='row'>
          <div className='col-md-3'>
            <Adminmenu/>


          </div>
          <div className='col-md-9'>
            contend
            </div>
          </div>
            

         

        </div>
    </Layout>
  )
}

export default AdminDashboard