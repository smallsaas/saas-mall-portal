import React from 'react';
import FixedHeader from './FixedHeader'

export default class ProductInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <div style={{height:'auto'}}>
        <FixedHeader />
      </div>
    )
  }

}
