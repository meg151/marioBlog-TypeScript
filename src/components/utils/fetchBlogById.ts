import axios from 'axios';
interface fetchBlogByIdInterface{
    id:string;
}


const fetchBlogById = async(id:fetchBlogByIdInterface) => {
    const {data} = await axios.get( `http://localhost:8000/blogs/${id}`)
    return data;
}
export default fetchBlogById;