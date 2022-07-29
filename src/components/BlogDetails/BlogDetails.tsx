import { useQuery } from 'react-query';
import fetchBlogById from 'components/utils/fetchBlogById';
import  {useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledBlogDetails } from 'styles/StyledBlogDetails.styled';

export interface ParamsInterface{
    id: string | number | any;
}

export interface BlogInterface{
    id?: string;
    title: string;
    body: string;
    author: string;
    map: any;
}

export interface UseQueryInterface{
    data?: BlogInterface;
    // blog?: any;
    error: any;
    isError: any;
    isLoading: any;
}

const BlogDetails = () => {
    
    const { id }:ParamsInterface = useParams();
    let history = useHistory();
    const {data:blog, error, isError, isLoading }:UseQueryInterface= useQuery('blog', async() => {
        const blog = await fetchBlogById(id);
        return blog;
    })

    const deleteHandler = () => axios.delete('http://localhost:8000/blogs/'+ id).then(()=> {
        history.push('/');
    })
            
    const updateHandler = async() => {
        const title = prompt(blog?.title)
        const author = prompt(blog?.author)
        const body = prompt(blog?.body)

        await axios.put('http://localhost:8000/blogs/'+ id, {"title":title, "author":author, "body":body})
    }

    if(isLoading){
            return <div>Loading...</div>
        }
        if(isError) {
            return <div>Error! {error.message} </div>
        }


        return (
            <StyledBlogDetails >                    
                    <article>
                        <h2>{blog?.title}</h2>
                        <p>written by {blog?.author}</p>
                        <div>{blog?.body}</div>
                        <button onClick={deleteHandler}>delete</button>
                        <button onClick={updateHandler}>edit</button>
                    </article>
            </StyledBlogDetails>
        )
    }

    

export default BlogDetails
