import { Link } from 'react-router-dom';

export const NavBar = () => {


    return (

        <nav className='flex'>

            <ul className='nav-menu'>

                <div className='nav-li'>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/groceries'>Groceries</Link></li>
                    <li><Link to='/furniture'>Furniture</Link></li>
                    <li><Link to='/motorcycle'>Motorcycle</Link></li>
                    <li><Link to='/browser'>Browser</Link></li>
                </div>

                <div className='nav-li'>
                    <li><Link to='/logout'>Logout</Link></li>
                </div>

            </ul >

        </nav>

    );

};