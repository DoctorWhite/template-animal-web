import { BasicButton } from "./buttons/basicButton"

interface PaginationSwitchProps {
    setStep: (page: number) => void,
    step: number,
    prevText?: string,
    nextText?: string
}

export const PaginationSwitch: React.FC<PaginationSwitchProps> = ({ setStep, step, prevText, nextText }) => {
    return (
        <div className="flex justify-between mt-5">
            <BasicButton name={prevText ?? "Zpět"} action={() => setStep(step - 1)} />
            <BasicButton name={nextText ?? "Další"} action={() => setStep(step + 1)} />
        </div>
    )
}