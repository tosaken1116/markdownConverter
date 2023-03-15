import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Editor } from "./Editor";

export default {
    title: "Editor",
    component: Editor,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = () => <Editor />;
export const Default = Template.bind({});
Default.args = {};
