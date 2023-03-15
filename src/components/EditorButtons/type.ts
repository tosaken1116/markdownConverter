import React from "react";
import { headerSizes } from "../Editor/hooks";
export type PopperProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type HeaderSelectionProps = PopperProps & {
    setHeader: React.Dispatch<React.SetStateAction<keyof typeof headerSizes>>;
};
