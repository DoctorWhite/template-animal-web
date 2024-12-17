import { useForm, useFormContext } from "react-hook-form"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { useState } from "react"
import { SponzorsFormType } from "../../types/formTypes/sponzorsFormType"
import { FaTrash } from "react-icons/fa"

interface SponsorsFormProps {
    setStep: (page: number) => void,
    step: number,
}

export const SponsorsForm: React.FC<SponsorsFormProps> = ({ setStep, step }) => {
    const sponsorsForm = useFormContext<SponzorsFormType>();
    const [showAddSponsor, setShowAddSponsor] = useState(false);
    const { register, getValues } = useForm<{ image: FileList }>();

    function deleteSponsor(index: number) {
        const currentSponsors = sponsorsForm.getValues().sponzorsImages;
        const updatedSponsors = currentSponsors.filter((_, i) => i !== index);
        sponsorsForm.setValue("sponzorsImages", updatedSponsors);
    };

    // function addSponsors() {
    //     const currentSponsors = sponsorsForm.getValues("sponzorsImages") || [];
    //     const fileInput = getValues("image");
    
    //     if (fileInput && fileInput.length > 0) {
    //         const fileName = fileInput[0].name;
    //         sponsorsForm.setValue("sponzorsImages", [...currentSponsors, fileName]);
    //     }
    // }

    function addSponsors() {
        const currentSponsors = sponsorsForm.getValues("sponzorsImages") || [];
        const fileInputs = getValues("image");
    
        if (fileInputs && fileInputs.length > 0) {
            const fileNames = Array.from(fileInputs).map((file) => file.name); 
            sponsorsForm.setValue("sponzorsImages", [...currentSponsors, ...fileNames]);
        }
    }

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="11. Sponzoři" />
            <div className="text-center">
                Nahrajte soubory obrázků sponzorů, následně tyto obrázky okopírujte do složky frontend/public/sponsors
            </div>
            <div className="space-y-4 flex flex-col">
                <div>
                    <button className="text-xl px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md"
                        onClick={() => setShowAddSponsor(!showAddSponsor)}>
                        +
                    </button>
                </div>
                {
                    showAddSponsor &&
                    <div>
                        <input type="file" className="w-full" placeholder="" {...register("image")} multiple accept=".png, .jpg, .jpeg, .gif" />
                        {/* <InputBox placeholder="Název obrázku sponzora" register={register} valueName="image" /> */}
                        <button onClick={() => addSponsors()}
                            className="mt-3 text-xl px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md">
                            Přidat sponzory
                        </button>
                    </div>
                }
                <div className="flex flex-col space-y-5">
                    {
                        sponsorsForm.watch("sponzorsImages").map((image, key) => (
                            <div className="relative flex flex-col bg-white border border-black p-4 rounded">
                                <div className="">
                                    {image}
                                </div>
                                <button className="absolute right-4" onClick={() => deleteSponsor(key)}>
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}