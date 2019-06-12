import React from 'react';
import styles from './nav.css';
import SearchInput from '../../common/SearchInput';

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
    if (this.props.getScrollHeight) {
      this.props.getScrollHeight(document.documentElement.scrollTop)
    }
  }

  onSearch = (data) => {
    console.log('需要查询的内容',data);

  }

  onClick = (data) => {
    console.log('KKKK=== ',data);
    if (data == '首页') {
      window.location.href = '#/index'
    }
  }

  render() {

    const { typeList,navList,scrollHeight } = this.state;
    const { fixedHeight = 50 } = this.props;

    const searchInputProps = {
      onSearch:this.onSearch
    }

    const createCommonElement = () => {
      return (
        <div className = {styles.container}>
          <div className={styles.topStyle}>
            <img className={styles.logo} src='http://static3.biyao.com/pc/common/img/master/logo.png'/>
            <div style={{width:'40%'}}>
              <SearchInput {...searchInputProps}/>
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
                      <span key={i} onClick={() => this.onClick(k)}>{k}</span>
                    ))
                  }
                </span>
              ))
            }
          </div>
        </div>
      )
    }

    return(
      <div>
        {
          scrollHeight > fixedHeight && this.props.children ?
          <div style={{height:'60px'}}>
            {this.props.children}
          </div>
          :
          createCommonElement()
        }
      </div>
    )
  }
}
