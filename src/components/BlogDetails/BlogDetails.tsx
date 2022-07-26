import { useQuery } from 'react-query';
import fetchBlogsId from 'components/utils/fetchBlogsId';
import  {useParams } from 'react-router-dom';


const BlogDetails = () => {
    const {id }:any = useParams();
    console.log(id);
    
    const {data:blog, error, isError, isLoading }:any = useQuery('blog', async() => {
        const blog = await fetchBlogsId(id);
        return blog;
    })
    console.log("this is the data" , blog);


    if(isLoading){
            return <div>Loading...</div>
        }
        if(isError) {
            return <div>Error! {error.message} </div>
        }


        return (
            <div className="blog-details" >                    
                    <article>
                        <h2>{blog?.title}</h2>
                        <p>written by something{blog?.author}</p>
                        <div>{blog?.body}</div>
                        <button>delete</button>
                    </article>
            </div>
        )
    }
    
         
    

export default BlogDetails
