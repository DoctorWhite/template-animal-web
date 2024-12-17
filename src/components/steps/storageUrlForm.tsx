import { useFormContext } from "react-hook-form";
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { InputBox } from "../inputBox";
import { StorageUrlFormType } from "../../types/formTypes/storageUrlFromType";

interface DatabaseFormCredentialsProps {
    setStep: (page: number) => void,
    step: number,
}

export const StorageUrlForm: React.FC<DatabaseFormCredentialsProps> = ({ setStep, step }) => {
    const { register } = useFormContext<StorageUrlFormType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="8. URL ke storage" />
            <div className="text-center">
                URL storage se nachází v sekci Storage
            </div>
            <div className="space-y-4 flex flex-col mt-5">
                <InputBox placeholder="Storage URL" valueName="storageUrl" register={register} />
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}