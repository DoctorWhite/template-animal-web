import { useState } from "react";
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { BasicButton } from "../buttons/basicButton";
import { FirebaseAuthStep } from "../firebaseAuthStep";
import authSteps from "../../assets/auth.json"
import { AuthStep } from "../../types/authStep";
import { PsqlCreateAdminCommandValuesType } from "../../types/formTypes/psqlCreateAdminCommandValuesType";
import { useForm } from "react-hook-form";

interface FirebaseAuthFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const FirebaseAuthForm: React.FC<FirebaseAuthFormProps> = ({ setStep, step }) => {
    const steps: AuthStep[] = authSteps;
    const [cmdIndex, setCmdIndex] = useState(0);
    const { register, watch } = useForm<PsqlCreateAdminCommandValuesType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="5. Autentizace" />
            <div className="text-center">
                Návod na nastavení autentizace pomocí Firebase Authentication.
            </div>
            <div className="flex flex-col mt-5 space-y-5 border border-black p-5 rounded bg-[#ebeff5]">
                {
                    cmdIndex !== 4 && <FirebaseAuthStep name={steps[cmdIndex].name} text={steps[cmdIndex].text} />
                }
                {
                    cmdIndex === 4 &&
                    <div>
                        <FirebaseAuthStep name="5. Vytvoření admina v databázi pomocí PSQL příkazu" text={`INSERT INTO users (email, name, surname, role) VALUES ('${watch("email")}', '${watch("name")}', '${watch("surname")}', 1)`} />
                        <div className="flex flex-col space-y-3 mt-3">
                            <input className="border border-black p-3" {...register("email")} placeholder="Administrátorův e-mail" ></input>
                            <input className="border border-black p-3" {...register("name")} placeholder="Jméno" ></input>
                            <input className="border border-black p-3" {...register("surname")} placeholder="Příjmení" ></input>
                        </div>
                    </div>
                }
                <div className="flex justify-between mt-5">
                    {

                        <BasicButton name={"<--"} action={() => setCmdIndex(cmdIndex - 1)} disabled={cmdIndex <= 0} />
                    }
                    {
                        <BasicButton name={"-->"} action={() => setCmdIndex(cmdIndex + 1)} disabled={cmdIndex >= 4} />
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}