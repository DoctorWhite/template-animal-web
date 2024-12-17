import { ColorResult, SketchPicker } from "react-color";
import { useFormContext } from "react-hook-form";
import { ColorsFormType } from "../types/formTypes/colorsForm";

interface ColorSetterProps {
    colorType: keyof ColorsFormType,
    text: string,
}

export const ColorSetter: React.FC<ColorSetterProps> = ({ colorType, text }) => {
    const { setValue, getValues } = useFormContext<ColorsFormType>();

    const setColor = (color: ColorResult) => {
        setValue(colorType, color.hex);
    };

    return (
        <div>
            <div className="mb-5 text-center">
                {text}
            </div>
            <SketchPicker color={getValues(colorType)} onChangeComplete={setColor} />
        </div>
    )
}