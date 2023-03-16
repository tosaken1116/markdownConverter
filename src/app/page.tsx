"use client";

import { Editor } from "@/components/Editor/Editor";
import { EditorButtons } from "@/components/EditorButtons/EditorButtons";
import { MarkdownResult } from "@/components/MarkdownResult/MarkdownResult";
import { Stack } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function Home() {
    return (
        <RecoilRoot>
            <EditorButtons />
            <Stack direction="row" spacing={2}>
                <Editor />
                <MarkdownResult />
            </Stack>
        </RecoilRoot>
    );
}
