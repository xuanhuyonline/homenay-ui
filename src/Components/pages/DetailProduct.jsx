import React from 'react'
import imgproduct from '../../images/product/product_1.jpg'
import imgdecor from '../../images/product/decor.png'
import { useState } from "react";

    // const detailProduct = {
    //     image: imgproduct, 
    //     type: "Phụ kiện trang trí",
    //     name: "Lịch gỗ để phong cách Vintage",
    //     price:"150.000",
    //     author:"Minh nhật Decor",
    //     // color:['Đen','Xanh']
    // }

const DetailProduct = () => {

    const  [count, setCount] = useState(1)
    const addOne = () =>{
        let value =count + 1
        setCount(value)
    }

    const minusOne = () => {
        let value = count - 1
        setCount(value)
      }
  return (
    <>
      <div id='main'>
        <div className='pt-2 pb-5'>
          <div className="container" style={{background :'#ffffff'}}>
            <div className='pt-2 pb-5'> 
            <div className='detail-product'>
                <div className='row'>
                    <div className='col-5'>
                        <img className='img-fluid rounded' src={imgproduct} width="492" height="459"/>
                    </div>
                    <div className='col-7 border-start'>
                        <div className='detail-product-right pt-2'>
                            <h1 className='product-title'>Lịch gỗ để bàn phong cách Vintage</h1>
                            <div className='mt-2'>
                                <span className='fw-bold fs-4'>150.000</span><span className='fs-5 ms-1'>đ</span>
                            </div>
                            <div className='product-color'>
                                <label className='type-color mb-3'>Màu sắc</label>
                                <ul className='d-flex'>
                                    <li>Đen</li>
                                    <li>Xanh</li>
                                </ul>
                            </div>
                            <div className='product-quantity'>
                                <p className='mb-2'>Số lượng</p>
                                <input onClick={minusOne} type="button" value="-" className='plus' />
                                <input type="text" name="" id="" value={count} min={1} className='quantity' />
                                <input onClick={addOne} type="button" value="+" className='minus'/>
                            </div>
                            <div className='mt-4'>
                                <button type="button" class="btn btn-primary me-3">Thêm vào giỏ hàng</button>
                                <button style={{width:'162px'}} type="button" class="btn btn-danger">Mua Ngay</button>
                            </div>
                            <div className='product-decor'>
                                <img className='img-fluid rounded' src={imgdecor} width="45" height="45"/>
                                <a href="#">Minh Nhật Decor</a>
                            </div>
                            <div className='product-info pt-2'>
                                <div className='pt-1 border-top'><span className='me-1'>Mã sản phẩm:</span><span>HN67705DECOR</span></div>
                                <div className='pt-1 border-top border-bottom'><span className='me-1'>Danh mục:</span><span>Phụ kiện trang trí</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct
