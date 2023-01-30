import { Link } from "react-router-dom";

const ListItemProduct = ({itemProduct:{image,type,name,price,author}}) => {
    return <>
            <div className='col-3 mt-3 mb-2'>
                    <Link to='/detailproduct'>
                        <img className='img-fluid rounded' src={image} />
                    </Link>
                    <div className='info_product'>
                        <div className='product_type'>{type}</div>
                        <div className='product_name'>{name}</div>
                        <div className='price-wrapper'>
                            <span className='product_price'>{price}</span>
                            <span className='unit_price'>đ</span>
                        </div>
                        <div className='product_author'>{author}</div>
                    </div>
                </div>  
    </>
}

export default ListItemProduct;