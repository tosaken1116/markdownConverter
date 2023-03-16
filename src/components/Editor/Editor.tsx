import { rawTextAtom } from "@/atom/atom";
import { Box, Stack, TextField } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRecoilState } from "recoil";
import remarkgfm from "remark-gfm";
export const Editor = () => {
    const [props, setRawText] = useRecoilState(rawTextAtom);
    const handleSelect = (event: React.SyntheticEvent) => {
        if (event.target instanceof HTMLTextAreaElement) {
            setRawText({
                ...props,
                startIndex: event.target.selectionStart,
                endIndex: event.target.selectionEnd,
            });
        }
    };
    return (
        <Stack direction="row" spacing={2}>
            <TextField
                multiline
                onSelect={handleSelect}
                value={props.rawText}
                onTouchStart={handleSelect}
                sx={{ backgroundColor: "white" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRawText({ ...props, rawText: event.target.value });
                }}
            />
            <Box onSelect={handleSelect} onTouchStart={handleSelect}>
                <ReactMarkdown remarkPlugins={[remarkgfm]}>
                    {props.rawText}
                </ReactMarkdown>
            </Box>
        </Stack>
    );
};
