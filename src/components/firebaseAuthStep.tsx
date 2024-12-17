interface FirebaseAuthStepProps {
    name: string,
    text: string,
}

export const FirebaseAuthStep: React.FC<FirebaseAuthStepProps> = ({ name, text }) => {
    return (
        <div>
            <div className="text-2xl text-center">
                {name}
            </div>
            <div className="whitespace-pre font-courier mt-5">
                {text}
            </div>
        </div>
    )
}