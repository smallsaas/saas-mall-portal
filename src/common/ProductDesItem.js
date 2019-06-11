import React from 'react';
import styles from './base.css';
import { Redirect } from 'react-router-dom';

class ProductDesItem extends React.Component {

  onView = () => {
    const { title } = this.props.itemData;
    window.MC.crumbsList = '首页' + '-' + title
    window.location.href = '#/productDetail'
  }

  render() {

    const { image,subTitle,title,number,label,status,commentNumber } = this.props.itemData;

    console.log('kkllll',window);

    const imageStyle = {
      width:'100%',
      height:'20vw',
      backgroundImage:`url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }

    const footerStyle = {
      padding:'10px 20px'
    }

    const numberStyle = {
      color: '#F7A701',
      fontSize: '14px',
    }

    const labelStyle = {
      display:'inline-block',
      background:'#AB7FD1',
      color: '#fff',
      fontSize: '14px',
      padding: '0 0.3em',
      margin: '0 0.5em',
      borderRadius:'2px'
    }

    const statusStyle = {
      border:'1px solid #FB4C81',
      color:'#FB4C81',
      fontSize:'14px'
    }

    const subTitleStyle = {
      margin: '0.6em 0',
      fontSize:'14px',
      color:'#BF9E6B'
    }

    const titleStyle = {
      fontSize:'15px'
    }

    const commentNumberStyle = {
      color:'#BBB',
      fontSize:'13px'
    }

    return(
      <a className={ styles.container } onClick={() => this.onView()}>
        <div style = { imageStyle }></div>
        <div style={ footerStyle }>
          <div>
            { number ? <span style={ numberStyle }>￥{number}</span> : '' }
            { label ? <span style={ labelStyle }>{ label }</span> : '' }
            { status ? <span style= { statusStyle }>{status}</span> : '' }
          </div>
          { subTitle ? <div style={subTitleStyle}>{ subTitle }</div> : '' }
          <div style={{ display: 'flex',justifyContent:'space-between'}}>
            { titleStyle ? <div style={ titleStyle }>{ title }</div> : '' }
            { commentNumber ? <div style={ commentNumberStyle }>{ commentNumber }</div> : '' }
          </div>
        </div>
      </a>
    )
  }
}

export default ProductDesItem
