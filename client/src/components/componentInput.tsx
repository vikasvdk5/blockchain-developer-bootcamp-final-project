import React from "react";

type props = {
    name: string;
    unit?: string;
    value?: string;
    setValue(value: string): void;
    type?: string;
    placeHolder?: string;
    disabled?: boolean;
};

const Input: React.FC<props> = (props) => {
    const { name, unit = "", value = "", setValue, type = "text", placeHolder , disabled} = props;

    return (
        <div className="">
            <div className="flex justify-between items-center py-2 text-xs tracking-wide uppercase">
                <h4 className="font-semibold text-gray-500">{name}</h4>
                <p className="font-medium text-gray-400">{unit}</p>
            </div>
            <input
                className="w-full h-10 mb-6 border-2 border-gray-300 focus:border-gray-900 rounded-button outline-none text-gray-900 lg:text-lg px-4 py-3"
                placeholder={placeHolder ? placeHolder : name}
                type={"text"}
                inputMode={type === "number" ? "decimal" : "text"}
                min={type === "number" ? 1 : undefined}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled = {disabled ? true : false}
            ></input>
        </div>
    );
};

export default Input;
