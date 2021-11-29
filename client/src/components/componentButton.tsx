import React from "react";

type props = {
    text: string;
    onClick(e: any): void;
    white?: boolean;
    header?: boolean;
    modal?: boolean;
    padding?: boolean;
    alert?: boolean;
    green?: boolean;
    auction?: boolean;
};

const Button: React.FC<props> = (props) => {
    const {
        text,
        white = false,
        modal = false,
        onClick,
        padding = false,
        alert = false,
        header = false,
        green = false,
        auction = false
    } = props;
    const colours = white
        ? "text-gray-900 bg-white"
        : alert
        ? "text-white bg-red-600"
        : green
        ? "text-white bg-green-600"
        : auction
        ? "text-white bg-purple-600"
        : "text-white bg-purple-900";

    return (
        <button
            className={`font-medium  text-sm lg:text-base rounded-button shadow-button ${colours} ${
                modal ? "w-full lg:text-base" : "px-3 lg:px-6" 
            } 
            ${padding ? "mb-10" : ""}
            ${header ? "py-1" : "py-3"}
            `}
            {...{ onClick }}
        >
            {text}
        </button>
    );
};

export default Button;
