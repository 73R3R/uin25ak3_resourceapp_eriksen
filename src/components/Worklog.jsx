import"../styles/Worklog.scss"

export default function Worklog({ logs }){
    return(
        <>
        <h1>Arbeidslogg</h1>
          {logs.map(log => (
            <article className="log" key={log._id}>
              <p>{log.dato}</p>
              <p>{log.name}</p>
              <p>{log.beskrivelse}</p>
              <p> {log.arbeidstimer} timer</p>
            </article>
          ))}
        </>
    )
}