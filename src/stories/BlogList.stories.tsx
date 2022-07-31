import {ComponentStory, ComponentMeta } from '@storybook/react';
import BlogList from 'components/BlogList/BlogList';

export default{
    title: 'BlogList',
    component: BlogList,
} as ComponentMeta<typeof BlogList>;

const Template: ComponentStory<typeof BlogList> = (args) => (
    <BlogList {...args} />
)

export const BlogListStory = Template?.bind({});
BlogListStory.args = {
    stories: {
        title: 'Stroy',
        author: 'mario',
    }
}