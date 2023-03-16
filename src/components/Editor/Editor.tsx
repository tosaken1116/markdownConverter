import { rawTextAtom } from "@/atom/atom";
import { TextareaAutosize } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
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
        <TextareaAutosize
            onSelect={handleSelect}
            value={props.rawText}
            onTouchStart={handleSelect}
            style={{
                width: "50%",
                height: "100%",
                minHeight: "90vh",
                fontSize: "20px",
                border: "1px solid white",
                borderRadius: "5px",
                overflow: "auto",
                maxHeight: "90vh",
            }}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setRawText({ ...props, rawText: event.target.value });
            }}
        />
    );
};
