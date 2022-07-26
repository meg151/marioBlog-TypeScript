import { useQuery } from 'react-query';
import fetchBlogsId from 'components/utility/fetchBlogsId';
import {useParams} from 'react-router-dom'


const BlogDetails = () => {
    const { id }:any = useParams();
    console.log(id);
    
    const {data:blog, error, isError, isLoading }:any = useQuery('blog', fetchBlogsId)


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
