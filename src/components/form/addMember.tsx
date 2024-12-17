import { useForm, useFormContext, UseFormRegister } from "react-hook-form";
import { Member, MembersFormType } from "../../types/formTypes/membersFormType";

export const AddMemberForm = () => {
    const { setValue, getValues } = useFormContext<MembersFormType>();
    const { register, handleSubmit, reset } = useForm<Member>();

    function addMember(data: Member) {
        const member: Member = { name: data.name, position: data.position, email: data.email, tel: data.tel };
        setValue("members", [...getValues("members"), member]);
        reset();
    }

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(addMember)} className="flex flex-col space-y-3">
                <InputBox placeholder="Jméno" register={register} valueName="name" />
                <InputBox placeholder="Pozice" register={register} valueName="position" />
                <InputBox placeholder="E-mail" register={register} valueName="email" />
                <InputBox placeholder="Telefon" register={register} valueName="tel" />
                <button className="text-xl px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md">
                    Přidat člena
                </button>
            </form>
        </div>
    )
}

interface InputBoxProps {
    placeholder: string,
    valueName: keyof Member,
    register: UseFormRegister<Member>
}

const InputBox: React.FC<InputBoxProps> = ({ placeholder, valueName, register }) => {

    return (
        <input
            {...register(valueName)}
            placeholder={placeholder}
            className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
        />
    )
}