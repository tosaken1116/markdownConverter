import { atom } from "recoil";

export const rawTextAtom = atom({
    key: "rawText",
    default: { rawText: "", startIndex: 0, endIndex: 0 },
});
