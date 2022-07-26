import axios from 'axios';

const fetchBlogsId = async(id:string) => {
    const {data} = await axios.get( `http://localhost:8000/blogs/${id}`)

    return data;
}
export default fetchBlogsId;