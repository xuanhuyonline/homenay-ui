import Banner from './Banner';
import ListItem from './ListItem';
import ListItemProduct from './ListItemProduct';
import { IMAGESHOME } from '../Data/ItemImg';
import { PRODUCTHOME } from '../Data/DataProduct';


const Home = () => {
    const ListItemsImg = ({item_images}) => {
        const listItems = item_images.map((item) => <ListItem item={item} />)
        return <div className='row'>{listItems}</div>
      }

      const ListProducts = ({listproducts}) => {
        const List = listproducts.map((item) => <ListItemProduct itemProduct={item} />)
        return <div className='row flex-wrap'>
                    <h5 className='fw-bolder pt-3'>Sản phẩm HOT</h5>
                    {List}
                </div>
      }

      //{list} render từng col

    return <>
    <div id='main'>
        <div className='pt-2 pb-5'>
            <div className="container" style={{background :'#ffffff'}}>
                <div className='pt-2 pb-5'>
                    <Banner/>
                    {/* <ListItemsImg item_images={Item_images}/> */}
                    {/* <ListProducts listproducts={Product}/> */}
                    
                    {/* IMAGESHOME, PRODUCTHOME import from '../Data/*/}
                    <ListItemsImg item_images={IMAGESHOME}/>
                    <ListProducts listproducts={PRODUCTHOME}/>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Home;