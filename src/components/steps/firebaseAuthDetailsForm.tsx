import { useFormContext } from "react-hook-form";
import { FirebaseAuthFormDetailsType } from "../../types/formTypes/firebaseAuthFormDetailsType";
import { FromHeader } from "../form/formHeader";
import { PaginationSwitch } from "../paginationSwitch";
import { InputBox } from "../inputBox";

interface FirebaseAuthDetailsFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const FirebaseAuthDetailsForm: React.FC<FirebaseAuthDetailsFormProps> = ({ setStep, step }) => {
    const { register } = useFormContext<FirebaseAuthFormDetailsType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="6. Nastavení údajů Firebase" />
            <div className="text-center">
                Firebase údaje jsou k dispozici v settings -{">"} generals
            </div>
            <div className="space-y-4 flex flex-col mt-5">
                <InputBox placeholder="Web API Key" valueName="webApiKey" register={register} />
                <InputBox placeholder="Project ID" valueName="projectId" register={register} />
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}