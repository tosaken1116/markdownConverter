import React from "react";
export type PopperProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type HeaderSelectionProps = PopperProps & {
    setHeader: React.Dispatch<React.SetStateAction<string>>;
};
