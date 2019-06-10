import React from 'react';
import ProductDesItem from '../common/ProductDesItem';
import { CommonList } from 'list-producibility';


class ShowCommonList extends React.Component {


  render() {

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

    console.log('MMMMMMM-');

    return (
      <div>
        <CommonList {...productProps}>
          <ProductDesItem />
        </CommonList>
      </div>
    )
  }
}

export default ShowCommonList
