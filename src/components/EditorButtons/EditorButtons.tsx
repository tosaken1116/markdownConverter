import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CodeIcon from "@mui/icons-material/Code";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
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
import { HeaderSelectionProps } from "./type";
const headerSizes = ["#1", "#2", "#3", "#4", "#5", "#6"];

export const EditorButtons = () => {
    return (
        <Stack direction="row" spacing={3}>
            <ButtonGroup variant="contained">
                <Button>
                    <FormatBoldIcon />
                </Button>
                <Button>
                    <FormatItalicIcon />
                </Button>
                <Button>
                    <CodeIcon />
                </Button>
                <Button>
                    <StrikethroughSIcon />
                </Button>
            </ButtonGroup>
            <HeaderButtonGroup />
        </Stack>
    );
};

const HeaderButtonGroup = () => {
    const [headerSize, setHeaderSize] = useState(headerSizes[0]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    return (
        <ButtonGroup variant="contained">
            <Button>{headerSize}</Button>
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
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHeader(event.currentTarget.innerText);
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
                        {headerSizes.map((headerSize, index) => (
                            <MenuItem key={index}>
                                <Button onClick={handleClick}>
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
