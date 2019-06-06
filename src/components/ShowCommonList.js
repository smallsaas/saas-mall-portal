import React from 'react';
import ProductDesItem from '../common/ProductDesItem';
import { CommonList } from 'list-producibility';

class ShowCommonList extends React.Component {


  render() {

    const listProps = {
      API:'https://www.muaskin.com/api/gw/product/comments?stockType=Product',
      // list,
      item:{
        type:'ContentListItem'
      },
      gateWayData:{
        // "image":'imageUrl',
        // "content":'salePoint',
        // "stats-item":{
        //   record:'price'
        // }
        "title":"product_name",
        "content":"comment_content",
      },
      contentListItemProps:{

      }
    }

    const productProps = {
      API:'https://www.muaskin.com/api/vip/accounts',
      loadmore:false,
      style:{
        display: 'flex',
        flexWrap: 'wrap',
        padding:'0 10%',
        margin:'0 auto',
      },
      itemStyle:{
        display: 'inline-block',
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
      }
    }


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
