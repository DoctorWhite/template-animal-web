import { useState } from "react";
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { BasicButton } from "../buttons/basicButton";
import { FirebaseAuthStep } from "../firebaseAuthStep";
import storageSteps from "../../assets/storage.json"
import { AuthStep } from "../../types/authStep";

interface FirebaseStorageFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const FirebaseStorageForm: React.FC<FirebaseStorageFormProps> = ({ setStep, step }) => {
    const steps: AuthStep[] = storageSteps;
    const [cmdIndex, setCmdIndex] = useState(0);

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="7. Úložiště" />
            <div className="text-center">
                Návod na nastavení úložiště (storage) pomocí Firebase Storage.
            </div>
            <div className="flex flex-col mt-5 space-y-5 border border-black p-5 rounded bg-[#ebeff5]">
                <FirebaseAuthStep name={steps[cmdIndex].name} text={steps[cmdIndex].text} />
                <div className="flex justify-between mt-5">
                    {

                        <BasicButton name={"<--"} action={() => setCmdIndex(cmdIndex - 1)} disabled={cmdIndex <= 0} />
                    }
                    {
                        <BasicButton name={"-->"} action={() => setCmdIndex(cmdIndex + 1)} disabled={cmdIndex >= 2} />
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}