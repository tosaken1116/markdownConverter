"use client";

import { Editor } from "@/components/Editor/Editor";
import { EditorButtons } from "@/components/EditorButtons/EditorButtons";
import { Stack } from "@mui/material";

export default function Home() {
    return (
        <Stack>
            <EditorButtons />
            <Editor />
        </Stack>
    );
}
