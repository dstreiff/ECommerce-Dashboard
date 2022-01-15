import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import profile4 from '../images/profile-4.jpg';
import DarkmodeToggler from './DarkmodeToggler';
import MenuButton from './MenuButton';


const Right = ({whenTogglingDarkmode, darkmode, OpenSideMenu}) => {
  return (
    <div className="right">
      <div className="top">
        <MenuButton
          OpenSideMenu={OpenSideMenu}
        />
        <DarkmodeToggler
          whenTogglingDarkmode = {whenTogglingDarkmode} 
          darkmode = {darkmode}
        />
        <div className="profile">
          <div className="info">
            <p>Hey, <b>Daniel</b></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={profile1} alt = "alt"/>
          </div>
        </div>
      </div>
      {/* END OF TOP */}
      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={profile2} alt = "alt"/>
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profile3} alt = "alt" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profile4} alt = "alt"/>
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>
      {/*--------------- END OF RECENT UPDATES ------------------*/}
      <div className="sales-analytics">
        <h2>Sales Analytics</h2>
        <div className="item online">
          <div className="icon">
            <span className="material-icons-sharp">shopping_cart</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>ONLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <span className="material-icons-sharp">local_mall</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>OFFLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="danger">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <span className="material-icons-sharp">person</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>NEW CUSTOMERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div className="item add-product">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Right