import Subheader from '@/components/dashboard/Subheader'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader title={"Board"} />
        </div>
    )
}

export default page