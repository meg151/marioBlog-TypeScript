import axios from 'axios';

const fetchBlogsId = async({id}:any) => {
    const {data}:any = await axios.get( `http://localhost:8000/blogs`, {
        params: {
            id : {id}
        }
    })
    return data;
}
export default fetchBlogsId;