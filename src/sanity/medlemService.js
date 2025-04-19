import { client } from "./client";

export async function fetchMedlemmer(){
    const data = await client.fetch(`*[_type == "medlemmer"]{
        _id,
        medlemsnavn,
        bilde,
        email
        }`)

    try {
        console.log("Medlemmer:", data);} 
        catch (error) 
        {console.error("Feil ved henting av medlemmer:", error.message);
        }
}

fetchMedlemmer()