import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CodeIcon from "@mui/icons-material/Code";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Stack,
} from "@mui/material";
import React, { useState } from "react";
import { headerSizes, useConvertString } from "../Editor/hooks";
import { HeaderSelectionProps } from "./type";

export const EditorButtons = () => {
    const { handleConvert } = useConvertString();
    return (
        <Stack direction="row" spacing={3}>
            <ButtonGroup variant="contained">
                <Button onClick={() => handleConvert("bold")}>
                    <FormatBoldIcon />
                </Button>
                <Button onClick={() => handleConvert("italic")}>
                    <FormatItalicIcon />
                </Button>
                <Button onClick={() => handleConvert("code")}>
                    <CodeIcon />
                </Button>
                <Button onClick={() => handleConvert("strikethrough")}>
                    <StrikethroughSIcon />
                </Button>
                <Button onClick={() => handleConvert("list")}>
                    <FormatListBulletedIcon />
                </Button>
                <Button onClick={() => handleConvert("citing")}>
                    <DoubleArrowIcon />
                </Button>
            </ButtonGroup>
            <HeaderButtonGroup />
        </Stack>
    );
};

const HeaderButtonGroup = () => {
    const { handleConvert } = useConvertString();

    const [headerSize, setHeaderSize] =
        useState<keyof typeof headerSizes>("h1");
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    return (
        <ButtonGroup variant="contained">
            <Button
                onClick={() => handleConvert(headerSize)}
                sx={{ textTransform: "none" }}
            >
                {headerSize}
            </Button>
            <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    setAnchorEl(event.currentTarget)
                }
            >
                <ArrowDropDownIcon />
            </Button>
            <HeaderSelection
                anchorElement={anchorEl}
                closePopOver={() => setAnchorEl(null)}
                setHeader={setHeaderSize}
            />
        </ButtonGroup>
    );
};
const HeaderSelection = ({
    anchorElement,
    closePopOver,
    setHeader,
}: HeaderSelectionProps) => {
    const { handleConvert } = useConvertString();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHeader(event.currentTarget.innerText as keyof typeof headerSizes);
        handleConvert(
            event.currentTarget.innerText as keyof typeof headerSizes
        );
        closePopOver();
    };
    return (
        <Popper
            sx={{
                zIndex: 1,
            }}
            open={Boolean(anchorElement)}
            anchorEl={anchorElement}
            role={undefined}
        >
            <Paper>
                <ClickAwayListener onClickAway={closePopOver}>
                    <MenuList>
                        {Object.keys(headerSizes).map((headerSize, index) => (
                            <MenuItem key={index}>
                                <Button
                                    onClick={handleClick}
                                    sx={{ textTransform: "none" }}
                                >
                                    {headerSize}
                                </Button>
                            </MenuItem>
                        ))}
                    </MenuList>
                </ClickAwayListener>
            </Paper>
        </Popper>
    );
};
