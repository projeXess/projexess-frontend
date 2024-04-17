import { Suspense } from "react"

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <div className="w-full h-[100dvh] flex"> 
                <div className="w-1/2 bg-[#06061c] h-full text-white md:flex hidden flex-col justify-evenly p-5 pt-10 pb-10 gap-44">
                    <div className="flex items-center gap-3">
                        <img src="/logo.svg" width={40} />
                        <h1 className="text-[2rem] p-4">Projexess</h1>
                  </div>

                    <div className="flex flex-col gap-5 p-4">
                        <h1 className="text-[2rem] font-bold tracking-wider">
                            Your Assistant, <br />
                            your Success
                        </h1>

                        <p>
                            Empowering Dreams, Building Futures, Your Bridge to Project Success . We're here to bridge the gap between dreams and reality.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="flex md:hidden items-center gap-3 justify-center mt-5">
                        <img src="/logo.svg" width={40} />
                        <h1 className="text-[2rem] p-4">Projexess</h1>
                    </div>
                    {children}
                </div>
            </div>
        </Suspense>
    )
}

export default AuthLayout