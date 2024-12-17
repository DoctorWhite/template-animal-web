import { FormProvider, useFormContext } from "react-hook-form"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { MembersFormType } from "../../types/formTypes/membersFormType"
import { useState } from "react"
import { AddMemberForm } from "../form/addMember"
import { MemberItem } from "../memberItem"

interface MembersFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const MembersForm: React.FC<MembersFormProps> = ({ setStep, step }) => {
    const membersForm = useFormContext<MembersFormType>();
    const [showAddMember, setShowAddMember] = useState(false);

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="4. Členové spolku ve vedení" />
            <div className="space-y-4 flex flex-col">
                <div>
                    <button className="text-xl px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md"
                        onClick={() => setShowAddMember(!showAddMember)}>
                        +
                    </button>
                </div>
                {
                    showAddMember &&
                    <FormProvider {...membersForm}>
                        <AddMemberForm />
                    </FormProvider>
                }
                <div className="flex flex-col space-y-5">
                    {
                        membersForm.watch("members").map((member, key) => (
                            <MemberItem member={member} setValue={membersForm.setValue} key={key} index={key} getValues={membersForm.getValues} />
                        ))
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}