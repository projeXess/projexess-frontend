import React, { Suspense } from 'react'
import LandingHeader from '../landing/Header'
import LandingFooter from '../landing/Footer'

type Props = { children: React.ReactNode }

function LandingLayout({ children }: Props) {


    return (
        <Suspense>
            <section>
                <LandingHeader />
                {children}
                <LandingFooter />
            </section>
        </Suspense>
    )
}

export default LandingLayout