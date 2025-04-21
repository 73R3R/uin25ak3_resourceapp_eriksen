import Membercard from "./Membercard";
import Worklog from "./Worklog";
import "../styles/Home.scss"

export default function Home({ logs, members }){
    return (
        <>
        <Membercard members={members}/>
        <Worklog logs={logs}/>
        </>
    )
}