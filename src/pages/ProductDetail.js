import React from 'react';
import Nav from '../components/nav/Nav';
import BreadCrumbs from '../common/BreadCrumbs'


export default class ProductDetail extends React.Component {

  render() {

    return(
      <div>
        <Nav />
        <div style={{padding:'0 10%'}}>
          <BreadCrumbs/>
        </div>
      </div>
    )

  }

}
