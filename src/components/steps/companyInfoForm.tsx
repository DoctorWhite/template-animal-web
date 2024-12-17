import { useFormContext } from "react-hook-form"
import { InputBox } from "../inputBox"
import { PaginationSwitch } from "../paginationSwitch";
import { FromHeader } from "../form/formHeader";
import { CompanyInfoFormType } from "../../types/formTypes/companyInfoFormType";

interface CompanyInfoFormProps {
    setStep: (step: number) => void,
    step: number,
}

export const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({ setStep, step }) => {
    const { register } = useFormContext<CompanyInfoFormType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="10. Informace o společnosti" />
            <div className="space-y-4 flex flex-col">
                <InputBox placeholder="Název společnosti" valueName="companyName" register={register} />
                <InputBox placeholder="Ulice" valueName="street" register={register} />
                <InputBox placeholder="Popisné číslo" valueName="number" register={register} />
                <InputBox placeholder="Poštovní směrovací číslo" valueName="pc" register={register} />
                <InputBox placeholder="Město" valueName="city" register={register} />
                <InputBox placeholder="IČO" valueName="in" register={register} />
                <InputBox placeholder="E-Mail" valueName="email" register={register} />
                <InputBox placeholder="Číslo bankovního účtu" valueName="bankAccountNumber" register={register} />
                <InputBox placeholder="Další info" valueName="otherInfo" register={register} />
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
