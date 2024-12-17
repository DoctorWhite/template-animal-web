import React, { useState } from "react"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { DatabaseCommand } from "../form/databaseCommand"
import adminDoc from "../../assets/admin.json"
import { Command } from "../../types/command"
import { BasicButton } from "../buttons/basicButton"

interface AdminFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const AdminForm: React.FC<AdminFormProps> = ({ setStep, step }) => {
    const commands: Command[] = adminDoc;
    const [cmdIndex, setCmdIndex] = useState(0);
    

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="9. Nastavení administrátora" />
            <div className="text-center">
                Kempný je piča
            </div>
            <div className="flex flex-col mt-5 space-y-5 border border-black p-5 rounded bg-[#ebeff5]">
                {
                    <DatabaseCommand command={commands[cmdIndex]} />
                }

                <div className="flex justify-between mt-5">
                    {

                        <BasicButton name={"<--"} action={() => setCmdIndex(cmdIndex - 1)} disabled={cmdIndex <= 0} />
                    }
                    {
                        <BasicButton name={"-->"} action={() => setCmdIndex(cmdIndex + 1)} disabled={cmdIndex >= 9} />
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
