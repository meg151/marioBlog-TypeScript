import {ComponentStory, ComponentMeta } from '@storybook/react';
import Home from 'components/Home/Home';

export default{
    title: 'Home',
    component : Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
    <Home />
)

export const NavbarStory= Template.bind({});