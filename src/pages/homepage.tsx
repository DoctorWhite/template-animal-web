import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="mx-auto py-10">
                <div className="text-center text-6xl font-extrabold text-blue-600 drop-shadow-sm tracking-wide">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                        ANIMAL TEMPLATE
                    </span>
                </div>
                <div className="text-center text-4xl font-semibold text-blue-600 mt-2 drop-shadow-sm tracking-widest">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                        ASSOCIATION TEMPLATE
                    </span>
                </div>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <Link to="/generator">
                    <button className="text-4xl px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md">
                        Vytvořit web
                    </button>
                </Link>
            </div>
        </div>
    )
}
