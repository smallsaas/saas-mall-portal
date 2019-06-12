import React from 'react';
import Nav from '../components/nav/Nav';
import BreadCrumbs from '../common/BreadCrumbs';
import ProductImages from '../components/productDetail/ProductImages';


export default class ProductDetail extends React.Component {

  render() {

      const list = [
        {
          url:'http://bfs.biyao.com/group1/M00/3F/89/rBACW1swuMOAafhcAAD099Dpi6o440.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3D/D4/rBACVFswuMSAU95zAADxdznZph0506.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3F/81/rBACYVswuMqAP2d1AADunRXAiq8510.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3D/D4/rBACVFswuMuADZYlAAEznSHzqUQ889.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3F/89/rBACW1swuM2AHxAlAAGEI3RtqNA510.jpg'
        }
      ]

    const productImagesProps = {
      list,
    }

    return(
      <div>
        <Nav />
        <div style={{padding:'0 10%'}}>
          <BreadCrumbs/>
          <ProductImages {...productImagesProps}/>

        </div>
      </div>
    )

  }

}
