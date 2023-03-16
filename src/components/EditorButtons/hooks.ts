import { useState } from "react";

export const useCopy = () => {
    const [open, setOpen] = useState(false);
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setOpen(true);
        } catch (error) {
            console.error(error);
        }
    };
    return { copyToClipboard, open, setOpen };
};
