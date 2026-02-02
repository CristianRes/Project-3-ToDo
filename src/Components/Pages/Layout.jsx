import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
            <header>
                NavBar
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Cristian Resendiz
            </footer>
        </>
        
    )
}
export default Layout