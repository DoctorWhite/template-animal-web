import DOMPurify from "dompurify";
import { Command } from "../../types/command";

interface DatabaseCommandProps {
    command: Command
}

export const DatabaseCommand: React.FC<DatabaseCommandProps> = ({ command }) => {
    const commandText = command.command.replace(/\n/g, "<br>\t");

    return (
        <div>
            <div className="text-2xl text-center">
                {command.name}
            </div>
            <div className="whitespace-pre font-courier mt-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(commandText) }} />
        </div>
    )
}