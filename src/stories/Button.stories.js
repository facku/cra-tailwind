import React from 'react';
import Button from './Button';

const history = {
	title: 'Design System/Atoms/Buttons',
	component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'My Boton'
};

export default history;
