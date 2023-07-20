import { useContext } from "react";
import { ThemeContext } from "../context/themeContexet";

export function useTheme(){
    return useContext(ThemeContext)
}