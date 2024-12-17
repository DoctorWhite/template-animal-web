import React, { useState } from "react"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { DatabaseCommand } from "../form/databaseCommand"
import serviceAccountKeyCommands from "../../assets/serviceAccountKey.json"
import { Command } from "../../types/command"
import { BasicButton } from "../buttons/basicButton"

interface SetServiceAccountKeyFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const SetServiceAccountKeyForm: React.FC<SetServiceAccountKeyFormProps> = ({ setStep, step }) => {
    const commands: Command[] = serviceAccountKeyCommands;
    const [cmdIndex, setCmdIndex] = useState(0);

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="9. Nastavení service account key" />
            <div className="text-center">
                
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
                        <BasicButton name={"-->"} action={() => setCmdIndex(cmdIndex + 1)} disabled={cmdIndex >= 3} />
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
