interface FromHeaderProps {
    name: string,
}

export const FromHeader: React.FC<FromHeaderProps> = ({ name }) => {
    return (
        <div className="py-10 text-center">
            <div className="text-4xl font-semibold text-blue-600 drop-shadow-sm tracking-wide">
                {name}
            </div>
        </div>
    )
}