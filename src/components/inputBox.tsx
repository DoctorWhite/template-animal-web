import { UseFormRegister } from "react-hook-form"

interface InputBoxProps {
    placeholder: string,
    valueName: string,
    register: UseFormRegister<any>,
}

export const InputBox: React.FC<InputBoxProps> = ({ placeholder, valueName, register }) => {

    return (
        <input
            {...register(valueName)}
            placeholder={placeholder}
            className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
        />
    )
}