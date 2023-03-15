"use client";

import { Editor } from "@/components/Editor/Editor";
import { EditorButtons } from "@/components/EditorButtons/EditorButtons";
import { Stack } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function Home() {
    return (
        <RecoilRoot>
            <Stack>
                <EditorButtons />
                <Editor />
            </Stack>
        </RecoilRoot>
    );
}
