import { rawTextAtom } from "@/atom/atom";
import { Box } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRecoilState } from "recoil";
import remarkGfm from "remark-gfm";
export const MarkdownResult = () => {
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
                width: "50%",
                borderRadius: "5px",
                overflow: "auto",
                maxHeight: "90vh",
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
