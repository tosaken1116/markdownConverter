import { ComponentMeta, ComponentStory } from "@storybook/react";

import { EditorButtons } from "./EditorButtons";

export default {
    title: "EditorButtons",
    component: EditorButtons,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof EditorButtons>;

const Template: ComponentStory<typeof EditorButtons> = (args) => (
    <EditorButtons {...args} />
);
export const Default = Template.bind({});
Default.args = {};
