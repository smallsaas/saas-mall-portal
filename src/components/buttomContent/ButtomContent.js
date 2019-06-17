import React from 'react';
import styles from './buttomContent.css';

export default class ButtomContent extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topStyle}>
          <div className={styles.topItemStyle} style={{ borderRight:'2px solid #bbb'}}>
            <img src={require('../../images/app_code.png')}/>
            <div>
              <div>扫码关注Small微信公众号</div>
              <div>关注Small微信公众号</div>
              <div>实时了解Small平台政策</div>
              <div>人才招聘信息</div>
            </div>
          </div>

          <div className={styles.topItemStyle}>
            <img src={require('../../images/app_code.png')}/>
            <div>
              <div>扫码下载Small APP</div>
              <div>随时随地掌握上新信息</div>
              <div>浏览、购买更便捷</div>
              <div>体验更多黑科技</div>
              <div>与Small面对面沟通</div>
            </div>
          </div>
        </div>
        <div className={styles.bottomStyle}>
          <div>
            <span>《用户服务协议》</span>  |
            <span>《隐私政策》</span>
          </div>
          <div>
            Copyright © 2019, Small.COM 广州可圈点科技有限公司   粤网文〔2018〕0969-419号
            粤公网安备44049102496139号  粤ICP备13088531号-2
          </div>
          <div>
            营业执照 增值电信业务经营许可证 互联网药品信息服务资格证书 食品经营许可证
            （粤）网械平台备字（2018）第00007号 出版物发行业务提供服务的网络交易平台备案
          </div>
          <div>
            公司地址：广州市黄埔区广东软件园B幢401c 公司电话：0756-3635580
          </div>
          <div>
            Small必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
          </div>
        </div>
      </div>
    )
  }

}
