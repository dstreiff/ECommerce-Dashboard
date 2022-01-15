const MenuCloseButton = ({closeMenu}) => {
    return (
        <div className="close" id="close-btn" onClick = {closeMenu}>
        <span className="material-icons-sharp">close</span>
      </div>
    )
  }
  
  export default MenuCloseButton