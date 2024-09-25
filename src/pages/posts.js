import { useEffect, useState } from "react"
import PostItem from "./post-item";
import { AddPost } from "./add-post";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";


export default function Posts (){
   const[posts , setPosts]=useState([]);
   let [isOpen, setIsOpen] = useState(false)

   useEffect(() =>{
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        console.log(data);
        setPosts(data); 
    }
    fetchData();
   }, []);
    
     const handleSubmit = async (postData) =>{
       console.log(postData);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
            },
        });
        const data = await response.json();
        console.log(data);
     }  

     const handleDelete = async (id)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`,{
            method: 'DELETE',
     });
     const data = await response.json();
     console.log(data);
    }

    return(
        <div className="px-10 py-4">
            <h1 className="text-3xl text-red-900 font-bold text-center mb-6 underline">Today's Posts</h1>

            <button 
              className="px-2 py-1 rounded-md font-medium bg-blue-400 text-blue-100 hover:bg-blue-900"
              onClick={() => setIsOpen(true)}>
                Add New Post
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded">
                <DialogTitle className="font-bold">Add a new post</DialogTitle>
                 
                <AddPost
                  onSubmit={handleSubmit}
               />
                </DialogPanel>
            </div>
            </Dialog>
            <div className="flex flex-col gap-2 my-4">
                {
                    posts.map((post, index) =>{
                        return (
                            <PostItem
                                post={post}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </div>
      
    )
}