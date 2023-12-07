import {ButtonHTMLAttributes, ReactElement} from "react";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactElement | string | string[]
}