const ListItem = ({item:{img,name}}) => {
    return (
         <div className='col'>
            <div className='text-center'>
                <img className='w-100' src={img} />
                <span>{name}</span>
            </div>
        </div>
    )
}



export default ListItem;