import Nav from "./Nav";
import "../styles/Layout.scss"

export default function Layout({ children, members }){
    return(
        <>
        <header>
            <Nav members={members}/>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}