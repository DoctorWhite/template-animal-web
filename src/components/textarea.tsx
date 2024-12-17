import { UseFormRegister } from "react-hook-form";

interface TextAreaProps {
    placeholder: string;
    valueName: string;
    register: UseFormRegister<any>;
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, valueName, register }) => {
    return (
        <textarea
            placeholder={placeholder}
            {...register(valueName)}
            className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
        />
    );
};
