import NavBar from "./elements/NavBar"


const Layout = ({ children }:any) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-full h-screen bg-gradient-to-b from-primary500/10">
                { children }
            </div>
        </div>
    )
  }

export default Layout