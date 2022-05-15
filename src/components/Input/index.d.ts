import {InputHTMLAttributes} from "react";


interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

interface IIconProps {
    size: number;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IIconProps>;
}

export {
    IContainerProps,
    IIconProps,
    IInputProps,
}
