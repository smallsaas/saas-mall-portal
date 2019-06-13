import React from 'react';
import FixedHeader from './FixedHeader';
import StoreDeatil from './StoreDeatil';
import styles from '../style.css';

export default class ProductInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0,
    }
  }

  render() {

    const { selectIndex } = this.state;

    const fixedHeaderProps = {
      onViewStore() {

      },
      onSelect:(data) => this.setState({ selectIndex: data})
    }

    const storeDetailProps = {

    }

    const createMarkup = (text) => {
      return { __html: text };
    }

    const storeDescription = '<p><img src="https://www.muaskin.com/images/upload/image/20190318/1552875470713038438.jpg" title="1552875470713038438.jpg" alt="神经酰胺保湿霜S01.jpg"></p>'

    return(
      <div style={{height:'auto'}}>
        <FixedHeader {...fixedHeaderProps}/>
        <div style={{display: 'flex'}}>
          <div style={{width:'calc(25% + 1px)'}}>
            <StoreDeatil {...storeDetailProps}/>
          </div>
          {
            selectIndex == 0 ?
            <div style={{width:'69%',display:'flex',justifyContent:'center',padding:'0 3%'}}
                 dangerouslySetInnerHTML={createMarkup(storeDescription)}
                 className={styles.innerHtmlStyle}
            >
            </div>
            :
            <div>
            dddd
            </div>
          }

        </div>
      </div>
    )
  }

}
