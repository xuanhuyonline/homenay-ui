import { Outlet, Link } from "react-router-dom";
//import { Link } from "react-router-dom"


const Menu = () => {
    //const list = ["Trang chủ", "Cửa hàng","Cộng đồng","Thiết kế thi công"]

    return <>
        <ul className="header_menu">
                {/* {
                    list.map((data) => (<li >{data}</li>))
                } */}
            <li>
                <Link className="text-decoration-none text-body" to='/'>Trang chủ</Link>
            </li>
            <li>
                <Link className="text-decoration-none text-body" to='/store'>Cửa hàng</Link>
                {/*  <Route path="store" element={<Store />} /> trùng tên store mới đúng */}
            </li>
            <li>
                <Link className="text-decoration-none text-body" to='/community'>Cộng đồng</Link>
            </li>
            <li>
                <Link className="text-decoration-none text-body" to='/design'>Thiết kế thi công</Link>
            </li>
        </ul>
        <Outlet />
    </>
}

export default Menu;