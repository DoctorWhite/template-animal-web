import { useFormContext } from "react-hook-form";
import { FirebaseAuthFormDetailsType } from "../../types/formTypes/firebaseAuthFormDetailsType";
import { FromHeader } from "../form/formHeader";
import { PaginationSwitch } from "../paginationSwitch";

interface FirebaseStorageFormDetailsProps {
    setStep: (page: number) => void,
    step: number,
}

export const FirebaseStorageFormDetails: React.FC<FirebaseStorageFormDetailsProps> = ({ setStep, step }) => {
    // const { register } = useFormContext<FirebaseAuthFormDetailsType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="9. D" />
            <div className="text-center">
                Vyplnit auth udaje, umístěny v settings -{">"} generals
            </div>
            <div className="space-y-4 flex flex-col mt-5">
                {/* <InputBox placeholder="Web API Key" valueName="webApiKey" register={register} />
                <InputBox placeholder="Project ID" valueName="projectId" register={register} /> */}
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}