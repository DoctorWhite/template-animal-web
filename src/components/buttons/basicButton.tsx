interface BasicButtonProps {
    name: string,
    action: () => void,
    disabled?: boolean,
}

export const BasicButton: React.FC<BasicButtonProps> = ({ name, action, disabled }) => {
    return (
        <button className="text-xl px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md"
            onClick={() => action()} disabled={disabled ?? false} >
            {name}
        </button>
    )
}