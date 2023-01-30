import banner1 from '../../images/banner/banner1.png';
const Banner = () => {
    return <>
        <div class="row">
                <div class="col-8">
                    <div className='w-100 overflow-auto'>
                        <img className='img-fluid rounded' src={banner1} />
                    </div>
                </div>
                <div class="col-4">
                    <div className='w-100 overflow-auto'>
                        <img className='img-fluid rounded' src={banner1} />
                        <img className='img-fluid rounded' src={banner1}  style={{marginTop: '14px'}}/>
                    </div>
                </div>
        </div>
    </>
}

export default Banner;