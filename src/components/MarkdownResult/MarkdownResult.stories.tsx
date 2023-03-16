import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { RecoilRoot } from "recoil";

import { MarkdownResult } from "./MarkdownResult";

export default {
    title: "MarkdownResult",
    component: MarkdownResult,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof MarkdownResult>;

const Template: ComponentStory<typeof MarkdownResult> = () => (
    <RecoilRoot>
        <MarkdownResult />
    </RecoilRoot>
);
export const Default = Template.bind({});
Default.args = {};
