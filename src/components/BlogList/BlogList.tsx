import { Link } from 'react-router-dom';
import { BlogInterface } from 'components/BlogDetails/BlogDetails'
import { BlogPreview } from 'styles/Global/BlogList.styled';

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
    
    
    return (
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
    )
}

export default BlogList;