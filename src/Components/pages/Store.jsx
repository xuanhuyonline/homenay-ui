import banner3 from '../../images/banner/banner3.png';
import ListItem from '../Main/ListItem';
import ListItemProduct from '../Main/ListItemProduct';
import { IMAGESTORE } from '../Data/ItemImg';
import { PRODUCSTORE } from '../Data/DataProduct';

const Store = () => {

    const ListItemsImg = ({item_images}) => {
        const listItems = item_images.map((item) => <ListItem item={item} />)
        return <div className='row'>{listItems}</div>
      }
    
      const ListProducts = ({listproducts}) => {
        const List = listproducts.map((item) => <ListItemProduct itemProduct={item} />)
        return <div className='row flex-wrap'>
                    <h5 className='fw-bolder pt-3'>Sản phẩm của ngày</h5>
                    {List}
                </div>
      }

    return <>
        <div id='main'>
            <div className='pt-2 pb-5'>
                <div className="container" style={{background :'#ffffff'}}>
                    <div className='pt-2 pb-5'>
                    <img className='img-fluid rounded' src={banner3} />
                    {/* <ListItemsImg item_images={Item_images} /> */}
                    {/* <ListProducts listproducts={Product}/> */}

                    {/* Data IMAGETORE,PRODUCSTORE import from '../Data/'*/}
                    <ListItemsImg item_images={IMAGESTORE} />
                    <ListProducts listproducts={PRODUCSTORE}/>
                    </div>
                </div>
            </div>
        </div>
    </>;
  };
  
  export default Store;

  {/* item_images đặt tên gì cũng đc */}