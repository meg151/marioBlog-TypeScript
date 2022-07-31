import {ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from 'components/Navbar/Navbar';

export default{
    title: 'Navbar',
    component : Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
    <Navbar />
)

export const NavbarStory= Template.bind({});