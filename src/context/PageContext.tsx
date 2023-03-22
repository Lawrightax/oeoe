import {createContext, Dispatch, SetStateAction} from "react";

interface IPageContext {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export const PageContext = createContext<IPageContext>({
    page: 0,
    setPage: () => {},
});