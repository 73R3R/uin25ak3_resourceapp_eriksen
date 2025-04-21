import { client } from "./client";

export async function fetchArbeidslogg(){
    const data = await client.fetch(`*[_type == "arbeidslogg"]{
        _id,
        dato,
        name,
        beskrivelse,
        arbeidstimer
        }`)

    try {
        console.log("Arbeidslogger:", data);} 
        catch (error) 
        {console.error("Feil ved henting av arbeidslogg:", error.message);
    }
    return data
}