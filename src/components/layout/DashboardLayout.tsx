import React, { Suspense } from 'react'
import Header from '../dashboard/Header'
import Aside from '../dashboard/Aside'
import DashboardAppProvider from '@/providers/Dashboard/DashboardAppProvider'
import { AsideContext } from '@/providers/Dashboard/AsideProvider'
import DashboardLoading from '../dashboard/Loading'
import MainLoader from '../dashboard/MainLoader'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'

type Props = { children: React.ReactNode }

function DashboardLayout({ children }: Props) {

    const { state } = React.useContext(AsideContext)
    // const { user } = useSelector((state: RootState) => state.userReducer)
    const user = JSON.parse(localStorage.getItem('userinfo')!).user

    return (
        <Suspense fallback={<MainLoader />}>
            {
                (user?.email === "shimwamanahenritresor@gmail.com" ||
                    user?.email === "numwalilydia2022@gmail.com" ||
                    user?.email === "ishimwejustin67@gmail.com" ||
                    user?.email === "itsmugishasamuella@gmail.com" ||
                    user?.email === "glorineza2@gmail.com" ||
                    user?.email === "micodan369@gmail.com") ? (
                    <DashboardAppProvider>
                        <section>
                            <Header />
                            <div className='w-full flex items-start  justify-normal h-[90dvh] overflow-hidden'>
                                <Aside />

                                <div className={`${!state ? 'lg:w-[75%]' : 'lg:w-full'} w-full bg-[rgb(234,245,255)] h-[100%] overflow-auto`}>
                                    <Suspense fallback={<DashboardLoading />}>
                                        {children}
                                    </Suspense>
                                </div>
                            </div>
                        </section>
                    </DashboardAppProvider>
                ) : (
                    <div className='w-full h-[100dvh] grid place-content-center '>
                        <h1>Apologies ! Dashboard is still under development and unaccessible to some members. </h1>
                    </div>
                )
            }
        </Suspense>

    )
}

export default DashboardLayout