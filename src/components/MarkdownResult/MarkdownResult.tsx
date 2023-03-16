import { rawTextAtom } from "@/atom/atom";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRecoilState } from "recoil";
import remarkGfm from "remark-gfm";
export const MarkdownResult = () => {
    const matches = useMediaQuery("(min-width:600px)");

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
        <Box
            onSelect={handleSelect}
            onTouchStart={handleSelect}
            sx={{
                border: "1px solid white",
                borderRadius: "5px",
                overflow: "auto",
                maxHeight: matches ? "90vh" : "45vh",
                minHeight: matches ? "90vh" : "45vh",
                width: matches ? "50%" : "100%",
            }}
            p={1}
            pl={2}
        >
            <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
                {props.rawText}
            </ReactMarkdown>
        </Box>
    );
};
