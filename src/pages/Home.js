import ProductDesItem from '../common/ProductDesItem';
import { CommonList } from 'list-producibility';
import Nav from '../components/nav/Nav';

class Home extends React.Component {


  render() {

    window.onscroll = function() {
      console.log('ggg');
    }

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
        justifyContent: 'center',
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

    return (
      <div>
        <Nav/>
        <CommonList {...productProps}>
          <ProductDesItem />
        </CommonList>
      </div>
    )
  }
}


export default Home
