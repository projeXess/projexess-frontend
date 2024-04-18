import React, { Suspense } from 'react'
import LandingHeader from '../landing/Header'
import LandingFooter from '../landing/Footer'
import MainLoader from '../dashboard/MainLoader'

type Props = { children: React.ReactNode }

function LandingLayout({ children }: Props) {


    return (
        <Suspense fallback={<MainLoader />}>
            <section>
                <LandingHeader />
                {children}
                <LandingFooter />
            </section>
        </Suspense>
    )
}

export default LandingLayout