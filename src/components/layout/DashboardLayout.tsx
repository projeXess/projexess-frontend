import React, { Suspense } from 'react'
import Header from '../dashboard/Header'
import Aside from '../dashboard/Aside'
import DashboardAppProvider from '@/providers/Dashboard/DashboardAppProvider'
import { AsideContext } from '@/providers/Dashboard/AsideProvider'
import DashboardLoading from '../dashboard/Loading'
import MainLoader from '../dashboard/MainLoader'

type Props = { children: React.ReactNode }

function DashboardLayout({ children }: Props) {

    const { state } = React.useContext(AsideContext)

    return (
        <Suspense fallback={<MainLoader />}>
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
       </Suspense>

    )
}

export default DashboardLayout