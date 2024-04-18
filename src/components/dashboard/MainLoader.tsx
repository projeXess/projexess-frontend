import DashboardLoading from "./Loading"

function MainLoader() {
    return (
        <div className="w-full h-[100dvh] grid place-content-center">
            <div className="mb-5 flex gap-4 items-center gap-4">
                <img src="/logo.svg" width={50} />
            </div>

            <DashboardLoading />
        </div>
    )
}

export default MainLoader