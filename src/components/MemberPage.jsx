import { useParams } from 'react-router-dom';
import "../styles/MemberPage.scss"

export default function MemberPage({ members }) {
    const { slug } = useParams()

    if (!members || members.length === 0) {
        return null;
    } 

    const member = members.find(member => member.memberslug === slug)

    return (
        <section>
            <img src={member.bilde?.asset?.url} alt={member.medlemsnavn} />
            <article>
                <h2>{member.medlemsnavn}</h2>
                <p className="mail">Email: {member.email}</p>
                <h3>Interesser:</h3>
                <ul>
                    {member.interesser?.map((interest, index) => (
                        <li key={index}>
                            <p>{interest}</p>
                        </li>
                    ))}
                </ul>
                <h3>Biografi</h3>
                <p>{member.biografi}</p>
            </article>
        </section>
    )
}