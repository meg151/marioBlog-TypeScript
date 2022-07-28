import { Link } from 'react-router-dom';
import { BlogInterface } from 'components/BlogDetails/BlogDetails'
import { BlogPreview } from 'styles/BlogList.styled';
import { SelectWriter } from 'styles/SelectWriter.styled';
import { useState } from 'react';

interface BlogListInterface{
    blogs:BlogInterface;
    title: string;
    blog: BlogInterface;
    id: string;
    author: string;
}


const BlogList = ({blogs, title}:BlogListInterface) => {
    // console.log(blogs);
    // console.log(title);
    const [author, setAuthor] = useState('mario');

  
    return (
        <>
    <SelectWriter>
    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
    <option value="mario">mario</option>
    <option value="yoshi">yoshi</option>
    </select>
    </SelectWriter>
    
        <BlogPreview>
            <h2>{title}</h2>
            {blogs && blogs.map((blog:BlogListInterface) => (
                <BlogPreview key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
                </BlogPreview>
            ))}
        </BlogPreview>

        
</>
    )
}

export default BlogList;