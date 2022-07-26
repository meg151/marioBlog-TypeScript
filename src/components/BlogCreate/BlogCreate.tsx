import  {useState} from "react";
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { StyledCreate } from 'styles/StyledCreate.styled';
import { render } from '@testing-library/react';

 
const BlogCreate = () => {
    const queryClient = useQueryClient()

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    let history = useHistory();


    const mutateBlog = useMutation(
        () => 
        axios.post(
        'http://localhost:8000/blogs/',
        {title, body, author},
        {
            headers: {
                 'Content-Type': 'application/json' 
                },
        }
                ).then(()=>{
                    history.push('/')
                }),
    {
        onSuccess: () => {
            setTitle("");
            setBody("");
            setAuthor("");
            queryClient.invalidateQueries('BlogCreate')
        }
    }
);

return(
   <StyledCreate>
    <h2>Add a New Blog</h2>
    <form 
    onSubmit={(e) => {
        e.preventDefault();
        mutateBlog.mutate();
    }}>
    <label>Blog title:</label>
    <input 
    type="text"
    required
    value={title}
    onChange={(e) => setTitle(e.target.value)} 
    />
    <label>Blog body:</label>
    <textarea
    required
    value={body}
    onChange={(e) => setBody(e.target.value)}
    />
    <label>Blog author:</label>
    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
    <option value="mario">mario</option>
    <option value="yoshi">yoshi</option>
  </select>
  <button>Add Blog</button>
    </form>
   </StyledCreate>
);
   };



   export default BlogCreate;
