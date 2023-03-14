import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Editor = () => {
    const [rawText, setRawText] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const handleSelect = (event: React.SyntheticEvent) => {
        if (event.target instanceof HTMLInputElement) {
            const selectedWord = event.target.value.substring(
                Number(event.target.selectionStart),
                Number(event.target.selectionEnd)
            );
            setSelectedText(selectedWord);
        }
    };
    return (
        <Box>
            <TextField
                multiline
                onSelect={handleSelect}
                value={rawText}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRawText(event.target.value);
                }}
            />
            <Typography>{selectedText}</Typography>
        </Box>
    );
};
