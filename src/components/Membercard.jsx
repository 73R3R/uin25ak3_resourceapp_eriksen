import { Link } from "react-router-dom";
import "../styles/Membercard.scss"

export default function Membercard({ members }){

    return(
        <>
        <h1>Gruppemedlemmer</h1>
          {members.map(member => (
            <article className="card" key={member._id}>
            <Link to={`/${member.memberslug}`}>
                <img src={member.bilde.asset.url} alt={member.medlemsnavn}/>
                <h2>{member.medlemsnavn}</h2>
                <p>{member.email}</p>
            </Link>
            </article>
          ))}
        </>
    )
}