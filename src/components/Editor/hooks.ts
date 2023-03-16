import { rawTextAtom } from "@/atom/atom";
import { useRecoilState } from "recoil";
export const headerSizes = {
    h1: ["# ", ""],
    h2: ["## ", ""],
    h3: ["### ", ""],
    h4: ["#### ", ""],
    h5: ["##### ", ""],
    h6: ["###### ", ""],
};

export const convertTypes = {
    ...headerSizes,
    bold: ["**", "**"],
    italic: ["*", "*"],
    underline: ["__", "__"],
    strikethrough: ["~~", "~~"],
    code: ["`", "`"],
    pre: ["```", "```"],
    list: ["- ", ""],
    citing: [">", ""],
    block: ["```\n", "\n```"],
};

export const useConvertString = () => {
    const [props, setRawText] = useRecoilState(rawTextAtom);
    const simpleConvert = (convertType: keyof typeof convertTypes) => {
        const [startChar, endChar] = convertTypes[convertType];
        return `${props.rawText.slice(
            0,
            props.startIndex
        )}${startChar}${props.rawText.slice(
            props.startIndex,
            props.endIndex
        )}${endChar}${props.rawText.slice(props.endIndex)}`;
    };
    const citingConvert = () => {
        const selectedChar = props.rawText.slice(
            props.startIndex,
            props.endIndex
        );
        const splitChar = selectedChar.split("");
        const shapedChar =
            ">" +
            splitChar
                .map((char, index) => {
                    if (
                        splitChar[index - 2] == "\n" &&
                        splitChar[index - 1] == "\n"
                    ) {
                        return `\n>${char}`;
                    } else {
                        return char;
                    }
                })
                .join("");
        return `${props.rawText.slice(
            0,
            props.startIndex
        )}${shapedChar}${props.rawText.slice(props.endIndex)}`;
    };

    const setConvert = (setChar: string) => {
        setRawText({
            startIndex: 0,
            endIndex: 0,
            rawText: setChar,
        });
    };
    const handleConvert = (convertType: keyof typeof convertTypes) => {
        if (props.startIndex === props.endIndex) {
            return;
        }
        if (convertType == "citing") {
            setConvert(citingConvert());
        } else {
            setConvert(simpleConvert(convertType));
        }
    };

    return { handleConvert };
};
