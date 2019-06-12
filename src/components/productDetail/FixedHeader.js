import React from 'react';
import storeIcon from '../../images/supplier-icon.png';
import { getScrollHeight,getScrollTop,getClientHeight} from '../../utils/getHeight';


export default class FixedHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: -1,
      scrollHeight: 0,
      offSetHeight: 0,
      firstHeight:0
    }
  }

  componentWillMount(){
    window.addEventListener('scroll', this.scrollFunction)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  componentDidMount() {
    console.log('RRRR2 ',document.documentElement.scrollTop);
    var height = document.getElementById('productInfoHeader').offsetTop;
    console.log('YYYYYYU',height,document.documentElement.scrollTop);
    this.setState({
      firstHeight: height
    })
  }

  scrollFunction = () => {
    var height = document.getElementById('productInfoHeader').offsetTop;
    var scollHeight = document.documentElement.scrollTop;
    this.setState({
      scrollHeight:scollHeight,
      offSetHeight: height
    })
  }

  onClick = (index) => {
    this.setState({
      selectIndex: index
    })
  }

  render() {
    const _this = this;

    const { selectIndex,scrollHeight,offSetHeight,firstHeight } = this.state;


    const style = () => {
      if (offSetHeight < scrollHeight && scrollHeight > firstHeight ) {
        return {
          backgroundColor:'#EEECEF',
          border:'1px solid #ccc',
          display:'flex',
          position:'fixed',
          top:0,
          width: '80%',
        }
      } else {
        return {
          backgroundColor:'#EEECEF',
          border:'1px solid #ccc',
          display:'flex',
        }
      }
    }

    const leftStyle = {
      width:'22%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRight:'1px solid #ccc',
      padding:'1.3em',
      cursor:'pointer',
    }

    const rightStyle = (index) => {
      return {
        width:'25%',
        borderRight:'1px solid #ccc',
        padding:'1.3em 0',
        cursor:'pointer',
        textAlign:'center',
        borderBottom:selectIndex == index ? '2px solid #523669' : 'none',
        backgroundColor: selectIndex == index ? '#fff' : '#EEECEF',
      }
    }

     return (
      <div style={style()} id='productInfoHeader'>
        <div style={leftStyle}>
          <img style={{marginRight:'0.8em'}} src={storeIcon}/>
          <span>亓口</span>
        </div>
        <div style={{display:'flex',width:'78%'}}>
          <div style={rightStyle(0)} onClick={() => this.onClick(0)}>商品信息</div>
          <div style={rightStyle(1)} onClick={() => this.onClick(1)}>评价详情（50）</div>
        </div>
      </div>
    )
  }

}
