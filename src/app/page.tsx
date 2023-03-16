"use client";

import { Editor } from "@/components/Editor/Editor";
import { EditorButtons } from "@/components/EditorButtons/EditorButtons";
import { MarkdownResult } from "@/components/MarkdownResult/MarkdownResult";
import { Stack, useMediaQuery } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function Home() {
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <RecoilRoot>
            <EditorButtons />
            <Stack direction={matches ? "row" : "column-reverse"} spacing={2}>
                <Editor />
                <MarkdownResult />
            </Stack>
        </RecoilRoot>
    );
}
