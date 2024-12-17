export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col w-full">
                {props.children}
            </div>
        </div>
    )
}