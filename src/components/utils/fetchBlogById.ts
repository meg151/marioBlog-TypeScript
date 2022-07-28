import axios from 'axios';
import { ParamsInterface } from 'components/BlogDetails/BlogDetails';

const fetchBlogById = async (id: ParamsInterface) => {
    const { data } = await axios.get(`http://localhost:8000/blogs/${id}`);
    return data;
};
export default fetchBlogById;
