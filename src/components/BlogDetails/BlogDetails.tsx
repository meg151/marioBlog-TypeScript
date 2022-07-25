import { useQuery } from 'react-query';
import FetchBlogsId from 'components/Server/FetcherId';




const BlogDetails = () => {
    const {data:blog, error, isError, isLoading }:any = useQuery('blog', FetchBlogsId )


    if(isLoading){
            return <div>Loading...</div>
        }
        if(isError) {
            return <div>Error! {error.message} </div>
        }

        return(
            <div className="blog-details">
                {blog && (                    
                    <article>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button>delete</button>
                    </article>
                )}
            </div>
        )

}

export default BlogDetails