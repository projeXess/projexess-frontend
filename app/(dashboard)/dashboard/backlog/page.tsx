import Subheader from '@/components/dashboard/Subheader'
import TaskCompleted from '@/components/dashboard/TaskCompleted'
import { tasksCompleted } from '@/utils/constants'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className='w-full h-auto p-4 flex gap-4 flex-col'>
            <Subheader title={"Backlog"} />

            <div className="w-full bg-white p-4 rounded-sm flex flex-col gap-10 ">
                <h1 className='font-bold text-[1.2rem]'>Completed Tasks</h1>

                <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-4 p-5  '>
                    {
                        tasksCompleted.map(task => (
                            <TaskCompleted {...task} key={task.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page