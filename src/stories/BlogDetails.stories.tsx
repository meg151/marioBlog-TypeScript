import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogDetails from 'components/BlogDetails/BlogDetails';



export default {
    title: 'BlogDetails',
    component: BlogDetails,
} as ComponentMeta<typeof BlogDetails>;

const Template: ComponentStory<typeof BlogDetails> = (args:any) => 
                <BlogDetails {... args}  />;

export const BlogDetailsStory = Template?.bind({});
BlogDetailsStory.args = {
    details:{
        title: 'Story',
        author: 'mario',
        body: 'storybook',
    }
} 





// mock data : 
// bc data is coming from on Blogdetails Usequery  
// create new object with blog.title, author, body
// pass fake object data to blogDetails 
// check for real data, if real data, use real data, if not real data, use mocked data

