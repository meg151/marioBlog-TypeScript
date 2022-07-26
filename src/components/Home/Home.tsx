import BlogList from 'components/BlogList/BlogList';
import FetchBlogs from 'components/Server/FetchBlogs';
import { useQuery } from 'react-query';

const Home = () => {
    const {data:blogs, error, isError, isLoading}:any = useQuery('blogs', FetchBlogs)

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError) {
        return <div>Error! {error.message} </div>
    }

    return (
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    )
}

export default Home;