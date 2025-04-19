import { children } from "react";
import { Link } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">ONE MAN ARMY</Link></li>
                    <li><Link to="/">HJEM</Link></li>
                    <li><Link to="medlem" >SYVER</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}