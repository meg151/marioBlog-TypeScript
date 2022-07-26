import axios from 'axios';

const fetchBlogsId = async() => {
    const data:any = await axios.get( `http://localhost:8000/blogs`, {
        params: {
            id : 'id',
        }
    })
    console.log(data);
    
}
export default fetchBlogsId;