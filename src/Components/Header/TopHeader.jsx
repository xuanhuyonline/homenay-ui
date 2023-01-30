import logo from '../../images/Logo.svg';
import {Link } from "react-router-dom";

// cd .. = ../  lui lại 2 bước
// cd ./ = ./ cung cấp

const TopHeader = () => {
    return <>
        <div className='header-with-search'>
            <div className='header__logo'>
                <Link className="text-decoration-none text-body" to='/'>
                    <img src={logo} width="200" height="40"/>
                </Link>
            </div>
            <div className='header__search d-flex' style={{width: '400px'}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
                <div className='header__cart  align-items-center'>
                    <span className='me-3'>
                        <Link className="text-decoration-none text-body" to='/login'>Login</Link>
                    </span>
                    <span className='me-3'>
                        <Link className="text-decoration-none text-body" to='/cart'>Cart</Link>
                    </span>
                </div>
        </div>
    </>
}

export default TopHeader;