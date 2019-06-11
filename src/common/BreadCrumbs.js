import React from 'react';
import styles from './base.css';

export default class BreadCrumbs extends React.Component {

  onClick = () => {
    
  }

  render() {

    const list = window.MC && window.MC.crumbsList ? window.MC.crumbsList.split('-') : [];

    const breadNameStyle = {
      fontSize:'13px'
    }

    return (
      <div>
        {
          list.length > 0 && list.map((item,index) => (
            <span key={index} className={styles.breadColor} style={breadNameStyle}>
              {
                index != list.length - 1 ?
                <span onClick={() => this.onClick()} style={{ cursor:'pointer' }}>{item}</span>
                :
                <span>{item}</span>
              }
              {
                index != list.length - 1 ?
                <span style={{margin:'0 0.3em'}}> > </span>
                : ''
              }
            </span>
          ))
        }
      </div>
    )

  }

}
