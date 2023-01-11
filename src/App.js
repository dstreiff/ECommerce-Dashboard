import { useState, useEffect} from 'react' // , useEffect 
import Aside from "./components/Aside";
import Main from "./components/Main";
import Right from "./components/Right";


function App() {

  const [darkmode, setDarkmode] = useState(false)
  const [sideMenu, setSideMenu] = useState(window.innerWidth <= 768 ? false: true) 
  // Or update this state with every window resize
  const [orders, setOrders] = useState([])

  
  useEffect(() => {
    const getOrders = async () => {
      const ordersFromServer = await fetchOrders()
      setOrders(ordersFromServer)
    } 
    getOrders()
  }, [])

  // Fetch Orders
  const fetchOrders = async () => {
    const res = await fetch('/orders')
    const data = await res.json()
    console.log('Loading orders from database');
    return data
  }

  const toggleDarkmode = () => {    
    setDarkmode(!darkmode);  
    document.body.classList.toggle('dark-theme-variables');
  }

  return (
    <div className='container'>
      <Aside
        sideMenu = {sideMenu}
        closeMenu = {() => setSideMenu(!sideMenu)}
      />
      <Main
        orders = {orders}
      />
      <Right     
        whenTogglingDarkmode = {toggleDarkmode}
        darkmode = {darkmode}
        OpenSideMenu = {() => setSideMenu(!sideMenu)}
      />
    </div>
  );
}

export default App;