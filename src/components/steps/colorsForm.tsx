import React from "react";
import { FormProvider, useFormContext } from "react-hook-form"
import { FromHeader } from "../form/formHeader"
import { PaginationSwitch } from "../paginationSwitch"
import { ColorsFormType } from "../../types/formTypes/colorsForm";
import { ColorSetter } from "../colorsSetter";
import { MenuButton } from "../buttons/menuButton";

interface BasicInfoFormProps {
    setStep: (step: number) => void,
    step: number,
}

export const ColorsForm: React.FC<BasicInfoFormProps> = ({ setStep, step }) => {
    const colorsForm = useFormContext<ColorsFormType>();

    return (
        <div className="flex flex-col w-auto">
            <FromHeader name="3. Nastavení barev" />
            <div className="flex space-x-5 justify-between">
                <FormProvider {...colorsForm} >
                    <ColorSetter colorType="menuColor" text="Barva menu" />
                    <ColorSetter colorType="menuHoverColor" text="Barva tlačítek po najetí" />
                    <ColorSetter colorType="menuTextColor" text="Barva textu v menu" />
                </FormProvider>
            </div>
            <FormProvider {...colorsForm} >
                <div className="flex flex-col md:flex-row w-full justify-center mt-5"
                    style={{ backgroundColor: colorsForm.watch("menuColor") }}>
                    <MenuButton label="Home" />
                    <MenuButton label="Aktuality" />
                    <MenuButton label="Články" />
                    <MenuButton label="Chov" />
                    <MenuButton label="Výstavy" />
                    <MenuButton label="Členové" />
                </div>
            </FormProvider>
            <PaginationSwitch setStep={setStep} step={step} />
        </div>
    )
}
