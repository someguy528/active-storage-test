import {AppContext} from "./App"
import { useContext } from "react";
import {DirectUpload} from 'activestorage';

function ImageUpload(){
    const {latestPost, setLatestPost} = useContext(AppContext)

    // // old variant
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        // data.append("post[title]", e.target.title.value)
        data.append("post[image]", e.target.image.files[0])
        // data.append("image", e.target.image.files[0])
        console.log(data)
        console.log(e.target.image.files[0])
        submitToAPI(data)
    }
    function submitToAPI(data){
        fetch("http://localhost:3000/posts",{
            method: "POST",
            body: data
        })
        .then(resp=>{
            if(resp.ok){
                resp.json().then(dataImg=> {
                        setLatestPost(dataImg.image_url)})
            }else{
                resp.json().then(err=>console.error(err))
            }
        })
    }

    // // new variant
    // function handleSubmit(e){
    //     e.preventDefault();
    //     const data = new FormData();
    //     data.append("post[image]", e.target.image.files[0])
    //     submitToAPI(data)
    // }

    // function submitToAPI(data){
    //     fetch("http://localhost:3000/posts",{
    //         method: "POST",
    //         headers: {
    //             'Content-type' : 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(resp=>{
    //         if(resp.ok){
    //             resp.json().then(dataImg=> {
    //                     setLatestPost(dataImg.image_url)})
    //         }else{
    //             resp.json().then(err=>console.error(err))
    //         }
    //     })
    // }

    // function uploadFile(file,user){
    //     const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    //     upload.create((error, blob) => {
    //         if(error){
    //             console.log(error)
    //         } else {
    //             console.log('there is no error...')
    //         }
    //     })
    // }

    return (
        <div>
            <h1> </h1>
            <form onSubmit={handleSubmit} > 
                <input type="file" name="image" id="image" />
                {/* <input type="file" name="image" multiple /> */}
                <button type="submit" >Create Post</button>
            </form>
        </div>
    )
 }

 export default ImageUpload