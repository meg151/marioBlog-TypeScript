import BlogList from 'components/BlogList/BlogList';
import fetchBlogs from 'components/utils/fetchBlogs';
import { useQuery } from 'react-query';
import {BlogInterface} from 'components/BlogDetails/BlogDetails'

interface FetchBlogsInterface{
    data?: BlogInterface;
    // blog?: any;
    error: any;
    isError: any;
    isLoading: any;
}




const Home = () => {
    const {data:blogs, error, isError, isLoading}:FetchBlogsInterface= useQuery('blogs', fetchBlogs)
    console.log(blogs);
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError) {
        return <div>Error! {error.message} </div>
    }

    return (
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs" blog={blogs} id={''} author={''}/>} 
        </div>
    )
}

export default Home;