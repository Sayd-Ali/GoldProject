import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae consectetur '
        + 'dolor earum enim esse, '
        + 'in laboriosam magnam odio pariatur quaerat quas reiciendis, saepe sint tempora veniam vitae! Doloribus.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae consectetur '
        + 'dolor earum enim esse, '
        + 'in laboriosam magnam odio pariatur quaerat quas reiciendis, saepe sint tempora veniam vitae! Doloribus.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
