import { useFormContext } from "react-hook-form";
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { CredentialsFormType } from "../../types/formTypes/credentialsForm";
import { InputBox } from "../inputBox";

interface DatabaseFormCredentialsProps {
    setStep: (page: number) => void,
    step: number,
}

export const DatabaseFormCredentials: React.FC<DatabaseFormCredentialsProps> = ({ setStep, step }) => {
    const { register } = useFormContext<CredentialsFormType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="3. Přihlašovací údaje k databázi" />
            <div className="text-center">
                Najít v credentials URL databáze
            </div>
            <div className="space-y-4 flex flex-col mt-5">
                <InputBox placeholder="URL databáze" valueName="url" register={register} />
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}