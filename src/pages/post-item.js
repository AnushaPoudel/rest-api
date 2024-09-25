export default function PostItem({post, onDelete}){
    return(
        <div className="border border-gray-400 mt-2 p-2 font-medium rounded-md">
            <h4> 
                {post.title}
            </h4>

            <p>
                {post.body}
            </p>
            <div>
                <button className="px-2 py-1 rounded-md font-medium bg-blue-400 text-blue-100 hover:bg-blue-900 hover:px-4 hover:py-4 mt-2"
                   onClick={()=>{
                    onDelete(post.id);   
                   }}
                >
                    Delete Post
                </button>
            </div>
        </div>
    );
} 