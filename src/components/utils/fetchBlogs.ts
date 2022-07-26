import axios from 'axios';


const fetchBlogs = async () => {
    const {data} = await axios.get('http://localhost:8000/blogs')
    return data;
}

export default fetchBlogs;
