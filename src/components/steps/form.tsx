import { UseFormRegister } from "react-hook-form"
import { FormType } from "../../types/FormType"
import { BasicButton } from "../buttons/basicButton"
import { InputBox } from "../inputBox"
import { TextArea } from "../textarea"

interface FormProps {
    formName: string,
    step: number,
    form: FormType,
    register: UseFormRegister<any>,
    setStep: (step: number) => void,
}

export const Form: React.FC<FormProps> = ({ formName, step, form, register, setStep }) => {
    return (
        <div>
            <div className="py-10 text-center">
                <div className="text-4xl font-semibold text-blue-600 drop-shadow-sm tracking-wide">
                    {step}. {formName}
                </div>
            </div>
            <div className="space-y-4 flex flex-col">
                {
                    form.inputs.map((input, key) => (
                        <InputBox placeholder={input.placeholder} valueName={input.name} key={key} register={register} />
                    ))
                }
                {
                    form.textareas.map((textarea, key) => (
                        <TextArea placeholder={textarea.placeholder} valueName={textarea.name} register={register} key={key} />
                    )) 
                }
            </div>
            <div className="flex justify-between mt-5">
                <BasicButton name={"Zpět"} action={() => setStep(step - 1)} />
                <BasicButton name={"Další"} action={() => setStep(step + 1)}  />
            </div>
        </div>
    )
}
