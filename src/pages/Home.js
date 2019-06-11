import ProductDesItem from '../common/ProductDesItem';
import { CommonList } from 'list-producibility';
import Nav from '../components/nav/Nav';
import TopFloatHome from '../components/nav/TopFloatHome';
import NavImage from '../components/home/NavImage';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollHeight:0
    }
  }

  getScrollHeight = (data) => {
    console.log('KKK6',data);
    this.setState({
      scrollHeight: data
    })
  }

  render() {

    const { scrollHeight } = this.state;

    const productProps = {
      API:'https://www.muaskin.com/api/vip/accounts',
      // API:'https://www.muaskin.com/api/pub/website/info?type=FASHION',
      loadmore:false,
      style:{
        display: 'flex',
        flexWrap: 'wrap',
        padding:'0 10%',
        margin:'0 auto',
      },
      itemStyle:{
        width:'50%',
        display:'flex',
        justifyContent: 'space-between',
      },
      gateWayData:{
        'image':'avatar',
        'subTitle':'account',
        'title':'vipName',
        'number': 'credit',
        'label': 'grade',
        'status': 'id',
        'commentNumber': 'followedStoreCode'
      },
      // gateWayData:{
      //   // 'image':'avatar',
      //   'subTitle':'updateTime',
      //   'title':'title',
      //   'number': 'visitCount',
      //   'label': 'type',
      //   'status': 'status',
      //   'commentNumber': 'id'
      // }
    }

    const navProps = {
      getScrollHeight:this.getScrollHeight
    }

    return (
      <div>
        <Nav {...navProps}>
          <TopFloatHome/>
        </Nav>
        {/*<div style={scrollHeight > 50 ? {marginTop:'140px'} : {}}></div>*/}
        <NavImage/>
        <CommonList {...productProps}>
          <ProductDesItem />
        </CommonList>
      </div>
    )
  }
}


export default Home
