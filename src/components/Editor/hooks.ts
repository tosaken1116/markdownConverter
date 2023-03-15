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
};

export const useConvertString = () => {
    const [props, setRawText] = useRecoilState(rawTextAtom);

    const handleConvert = (convertType: keyof typeof convertTypes) => {
        if (props.startIndex === props.endIndex) {
            return;
        }
        console.log(convertType);
        const [startChar, endChar] = convertTypes[convertType];
        setRawText({
            startIndex: 0,
            endIndex: 0,
            rawText: `${props.rawText.slice(
                0,
                props.startIndex
            )}${startChar}${props.rawText.slice(
                props.startIndex,
                props.endIndex
            )}${endChar}${props.rawText.slice(props.endIndex)}`,
        });
    };
    return { handleConvert };
};
