/* eslint-disable @typescript-eslint/no-explicit-any */
export type DefaultType = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>

}


export type RouteTypes = {
    path: string,
    component: React.ReactNode
}   