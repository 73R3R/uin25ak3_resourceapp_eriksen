import { Link } from "react-router-dom";
import "../styles/Nav.scss"

export default function Nav({ members }){
    return ( 
    <nav>
        <ul>
            <li><Link to="/" className="Logo">ONE MAN ARMY</Link></li>
            <li><Link to="/">HJEM</Link></li>
            {members.map(member => (
            <li key={member._id}><Link to={`/${member.memberslug}`}>{member.medlemsnavn}</Link></li>
            ))}
        </ul>
    </nav>
    )
}