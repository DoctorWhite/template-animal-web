import { useFormContext } from "react-hook-form"
import { InputBox } from "../inputBox"
import { TextArea } from "../textarea";
import { PaginationSwitch } from "../paginationSwitch";
import { FromHeader } from "../form/formHeader";
import { BasicInfoFormType } from "../../types/formTypes/basicInfoFormType";

interface BasicInfoFormProps {
    setStep: (step: number) => void,
    step: number,
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ setStep, step }) => {
    const { register } = useFormContext<BasicInfoFormType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="1. Základní údaje projektu" />
            <div className="space-y-4 flex flex-col">
                <InputBox placeholder="Název projektu" valueName="projectName" register={register} />
                <InputBox placeholder="Doména (ve tvaru kockybrno.cz)" valueName="domainName" register={register} />
                <TextArea placeholder="Podrobný popis vašeho projektu" valueName="projectDescription" register={register} />
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
