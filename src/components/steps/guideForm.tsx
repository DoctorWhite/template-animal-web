import React, { useState } from "react"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { DatabaseCommand } from "../form/databaseCommand"
import guideCommands from "../../assets/finalGuide.json"
import { Command } from "../../types/command"
import { BasicButton } from "../buttons/basicButton"

interface GuideFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const GuideForm: React.FC<GuideFormProps> = ({ setStep, step }) => {
    const commands: Command[] = guideCommands;
    const [cmdIndex, setCmdIndex] = useState(0);

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="13. Průvodce dokončení" />
            <div className="text-center">
                {/* Průvodce dokončení */}
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
                        <BasicButton name={"-->"} action={() => setCmdIndex(cmdIndex + 1)} disabled={cmdIndex >= 4} />
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
