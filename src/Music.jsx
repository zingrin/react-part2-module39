import { use } from "react"
export default function Music({bestPromise}){
    const music = use(bestPromise);
    console.log(music);
    return(
        <div className="card">
            <h3>Music Lovers:{music.length}</h3>
            
        </div>
    )
}