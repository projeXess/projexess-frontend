import React from 'react'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { URL } from 'url'

type Props = {
    title: String,
    children: {
        name: String,
        link: URL,
        icon: React.ReactNode
    }
}

function Collapsible({
    title,
    children
}: Props) {
    return (
        <Disclosure>
            <Disclosure.Button>
                {title}
            </Disclosure.Button>
            <Link href={children.link}>
                <Disclosure.Panel>
                    {children.icon}
                    {children.name}

                </Disclosure.Panel>
            </Link>
        </Disclosure>
    )
}

export default Collapsible