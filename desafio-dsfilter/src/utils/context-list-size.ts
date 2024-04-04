import { createContext } from "react";

export type ContextListSizeType = {
    contextListSize: number;
    setContextListSize: (contextListSize: number) => void;
}

export const ContextListSize = createContext<ContextListSizeType>({
    contextListSize: 0,
    setContextListSize(){}
})