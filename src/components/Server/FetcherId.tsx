import axios from 'axios';
import { useParams } from 'react-router-dom';



async function FetchBlogsId(){
    const {id}:any = useParams();
    const data = await axios.get( 'http://localhost:8000/blogs/' + id);
    console.log(data);

    return data;
}
export default FetchBlogsId;