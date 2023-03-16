import { rawTextAtom } from "@/atom/atom";
import { TextareaAutosize, useMediaQuery } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
export const Editor = () => {
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
        <TextareaAutosize
            onSelect={handleSelect}
            value={props.rawText}
            onTouchStart={handleSelect}
            style={{
                width: matches ? "50%" : "100%",
                maxHeight: matches ? "90vh" : "45vh",
                minHeight: matches ? "90vh" : "45vh",
                fontSize: "20px",
                border: "1px solid white",
                borderRadius: "5px",
                overflow: "auto",
            }}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setRawText({ ...props, rawText: event.target.value });
            }}
        />
    );
};
