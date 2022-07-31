import {ComponentStory, ComponentMeta } from '@storybook/react';
import BlogCreate from 'components/BlogCreate/BlogCreate'


export default{
    title: 'BlogCreate',
    component : BlogCreate,
} as ComponentMeta<typeof BlogCreate>;

const Template: ComponentStory<typeof BlogCreate> = () => (
    <BlogCreate />
)

export const BlogCreateStory= Template.bind({});