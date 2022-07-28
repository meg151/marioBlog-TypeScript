import { useQuery } from 'react-query';
import fetchBlogById from 'components/utils/fetchBlogById';
import  {useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { BlogDetail } from 'styles/BlogDetail.styled';

export interface ParamsInterface{
    id: string;
}

export interface BlogInterface{
    id?: string;
    title: string;
    body: string;
    author: string;
    map: any;
    filter: any;
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
            <BlogDetail >                    
                    <article>
                        <h2>{blog?.title}</h2>
                        <p>written by {blog?.author}</p>
                        <div>{blog?.body}</div>
                        <button onClick={deleteHandler}>delete</button>
                        <button onClick={updateHandler}>edit</button>
                    </article>
            </BlogDetail>
        )
    }
    
         
    

export default BlogDetails
