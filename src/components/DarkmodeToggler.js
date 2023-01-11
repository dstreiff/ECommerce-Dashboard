 

const DarkmodeToggler = ({whenTogglingDarkmode, darkmode}) => {
  return (
    <div 
      className="theme-toggler" 
      onClick={whenTogglingDarkmode}
    >
      <span className={`material-icons-sharp ${darkmode ? '' : 'active'}`}>light_mode</span>
      <span className={`material-icons-sharp ${darkmode ? 'active' : ''}`}>dark_mode</span>
    </div>
  )
}

export default DarkmodeToggler



