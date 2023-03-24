import { useEffect, useContext } from "react";
import {AppContext} from "./App"


export default function ImageLatest(){
    const {latestPost, setLatestPost} = useContext(AppContext)
    useEffect(()=> {
        fetch("http://localhost:3000/latest")
        .then(resp=>{
            if(resp.ok){
                resp.json().then(data=>{
                    setLatestPost(data.image_url)
                })
                .catch(err=>console.error(err))
            }
            else{
                resp.json().then(err=>console.error(err))
            }
        } ) }, [latestPost])
    return (
        <div>
            <img src={latestPost} alt="latest post" className="latest-image" />
        </div>
    )
}