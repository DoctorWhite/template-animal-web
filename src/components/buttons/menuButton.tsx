import { useFormContext } from "react-hook-form"
import { ColorsFormType } from "../../types/formTypes/colorsForm"
import { useState } from "react";

interface MenuButtonProps {
    label: string,
}

export const MenuButton: React.FC<MenuButtonProps> = ({ label }) => {
    const { watch } = useFormContext<ColorsFormType>();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button className="text-2xl py-3 px-6 text-center w-full md:w-auto"
            style={{ backgroundColor: isHovered ? watch("menuHoverColor") : watch("menuColor"), color: watch("menuTextColor") }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            {label}
        </button >
    )
}