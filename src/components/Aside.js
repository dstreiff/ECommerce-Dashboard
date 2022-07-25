import logo from '../images/logo.png';
import MenuCloseButton from './MenuCloseButton';

const Aside = ({sideMenu, closeMenu}) => {
  return (
    <aside 
      style = {sideMenu ? {display : 'block'} : {display: 'none'}}
    >
      <div className="top">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DEFI<span className="danger">DB</span></h2>
        </div>
        <MenuCloseButton
          closeMenu = {closeMenu}
        />
      </div>
      <div className="sidebar">
        <a href="#">
          <span className="material-icons-sharp">grid_view</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="active">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Customers</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#">
          <span className="material-icons-sharp">inventory</span>
          <h3>Products</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">add</span>
          <h3>Add Product</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  )
}

export default Aside



