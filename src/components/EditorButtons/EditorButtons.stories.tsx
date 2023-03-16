import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecoilRoot } from "recoil";

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

const Template: ComponentStory<typeof EditorButtons> = () => (
    <RecoilRoot>
        <EditorButtons />
    </RecoilRoot>
);
export const Default = Template.bind({});
Default.args = {};
