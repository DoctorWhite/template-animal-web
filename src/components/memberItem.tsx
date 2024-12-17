import { UseFormGetValues, UseFormSetValue } from "react-hook-form"
import { Member, MembersFormType } from "../types/formTypes/membersFormType"
import { FaTrash } from 'react-icons/fa';

interface MemberItemProps {
    member: Member,
    setValue: UseFormSetValue<MembersFormType>,
    getValues: UseFormGetValues<MembersFormType>,
    index: number,
}

export const MemberItem: React.FC<MemberItemProps> = ({ member, setValue, getValues, index }) => {
    function deleteMember() {
        const currentMembers = getValues("members");
        const updatedMembers = currentMembers.filter((_, i) => i !== index);
        setValue("members", updatedMembers);
    };

    return (
        <div className="relative flex flex-col bg-white border border-black p-4 rounded">
            <div>
                {member.name}
            </div>
            <div>
                {member.position}
            </div>
            <div>
                {member.email}
            </div>
            <div>
                {member.tel}
            </div>
            <button className="absolute right-4 top-4" onClick={() => deleteMember()}>
                <FaTrash />
            </button>
        </div>
    )
}