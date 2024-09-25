import TextInput from "@/components/text-input";
import { useState } from "react"

export function AddPost({onSubmit}){
    const [title, setTitle]=useState("");
    const [body, setBody]=useState("");
    const [UserId, setId]=useState("");  
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({title,body,UserId});
    }
    return(
        <form onSubmit={handleSubmit}
          className="flex flex-col items-start gap-2 rounded p-3 border border-gray-500"
        >
            <label>
                <div>
                Title:
                </div>
                  <TextInput
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
            </label>
            

            <label>
                <div>
                Body :
                </div>
                  <TextInput                  
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
            </label>

            <label>
                <div>
                User id :
                </div>
                  <TextInput
                  type="number"
                  value={UserId}
                  onChange={e => setId(e.target.value)}
                />
            </label>

            <button className=" px-2 py-0.5 rounded-md bg-blue-400 text-blue-100 hover:bg-blue-900 hover:px-4 hover:py-4 mt-2">Add Post</button>
        </form>
    )
}