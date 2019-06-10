import React from 'react';
import styles from './nav.css';

export default class Nav extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      typeList:['风衣女','羊绒衫','面膜','口红','连衣裙','外套','夹克','大衣','耳机','护肤'],
      navList:[
        {
          list:['首页','每日上新']
        },
        {
          list:['了解必要','下载必要APP']
        },
        {
          list:['我的必要']
        }
      ],
      scrollHeight: 0,
    }
  }

  componentWillMount(){
      window.addEventListener('scroll', this.scrollFunction)
    }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  scrollFunction = () => {
    this.setState({
      scrollHeight:document.documentElement.scrollTop
    })
  }

  render() {

    const { typeList,navList,scrollHeight } = this.state;

    console.log('KKK',scrollHeight);

    const createCommonElement = () => {
      return (
        <div className = {styles.container}>
          <div className={styles.topStyle}>
            <img className={styles.logo} src='http://static3.biyao.com/pc/common/img/master/logo.png'/>
            <div style={{width:'40%'}}>
              <div style={{display:'flex',alignItems:'center'}}>
                <input className={styles.searchInput} type='text' placeholder='请输入要搜索的商品'/>
                <span className={styles.searchBtn}></span>
              </div>
              <div style={{marginTop:'0.5em'}}>
                {
                  typeList.length > 0 && typeList.map((item, index) => (
                    <a href="javascript:void(0);" className={styles.typeName} key={index}>{item}</a>
                  ))
                }
              </div>
            </div>
          </div>

          <div style={{fontSize:'16px'}}>
            {
              navList.length > 0 && navList.map((item,index) => (
                <span key={index} className={styles.navItem}
                      style={{borderRight:index == navList.length - 1 ? 'none' : '1px solid #bbb' }}>
                  {
                    item.list.length > 0 && item.list.map((k,i) => (
                      <a href="javascript:void(0);" key={i} className={styles.navName}>{k}</a>
                    ))
                  }
                </span>
              ))
            }
          </div>
        </div>
      )
    }

    const createTypeElement = () => {
      const style = {
        padding:'15px 0',
        position:'fixed',
        width:'100%',
        backgroundColor:"#fff",
        transition: 'all .3s',
        boxShadow: '0 2px 4px rgba(0,0,0,.05)',
      }
      return (
        <div style={style}>222</div>
      )
    }

    return(
      <div>
        {
          scrollHeight > 50 ?
          createTypeElement()
          :
          createCommonElement()
        }
      </div>
    )

  }

}
