import axios from 'axios';


async function fetchBlogs(){
    const {data} = await axios.get('http://localhost:8000/blogs')
    return data;
}

export default fetchBlogs;
