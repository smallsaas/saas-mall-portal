import React from 'react';
import styles from '../base.css';
import { Redirect } from 'react-router-dom';

class LineColumnItem extends React.Component {



  render() {

    const { image,title,subTitle,number,tagName } = this.props.itemData;

    const style = {
      padding: '1em 0',
      borderBottom:'1px solid #dcd1d1',
    }

    const iamgeStyle = {
      width:'100%'
    }

    const subTitleStyle = {
      margin:'0.5em 0',
      textAlign:'center',
      fontSize:'14px'
    }

    const titleStyle = {
      fontSize:'15px',
      textAlign:'center'
    }

    const numberStyle = {
      fontSize:'18px',
      marginRight:'1em'
    }

    const tagNameStyle = {
      border: '1px solid #FB4C81',
      color: '#FB4C81',
      fontSize:'12px',
      borderRadius:'2px',
      padding:'0 3px'
    }

    return(
      <div style={style}>
        { image ? <img style={iamgeStyle} src={image}/> : '' }
        { subTitle ? <div className={styles.subTitleColor} style={subTitleStyle}>{ subTitle }</div> : '' }
        { title ? <div style={titleStyle}>{ title }</div> : '' }
        <div style={{margin: '0.5em 0',display:'flex',alignItems:'center'}}>
          { number ? <span  className={styles.numberColor} style={numberStyle}>{number}</span> : '' }
          { tagName ? <span style={tagNameStyle}>{ tagName }</span> : '' }
        </div>
      </div>
    )
  }
}

export default LineColumnItem
