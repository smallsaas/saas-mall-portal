import React from 'react';

export default class StoreIntroduce extends React.Component {

  render() {

    const style = {
      margin: '0.8em 0 2em 0',
      backgroundColor:'#fff',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding: '1em'
    }

    const logoStyle = {
      width:'100px',
      height:'100px',
      backgroundImage:'url(http://bfs.biyao.com/group1/M00/03/AE/rBACYVkUkI2APfwPAAC7nzwI-NA595.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginRight:'1.5em'
    }

    return(
      <div style={style}>
        <div style={{display: 'flex',alignItems:'center'}}>
          <div style={logoStyle}></div>
          <div>
            <div style={{ fontSize:'24px',marginBottom:'0.5em'}}>亓口</div>
            <div style={{color: '#ccc'}}>证书信息></div>
          </div>
        </div>
        <div style={{ fontSize:'13px'}}>
          <div style={{marginBottom:'0.5em'}}>商品质量： 4.9分</div>
          <div>服务态度： 4.8分</div>
        </div>
      </div>
    )

  }

}
