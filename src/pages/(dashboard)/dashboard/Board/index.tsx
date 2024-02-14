'use client'
import Subheader from '@/components/dashboard/Subheader'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { teams } from '@/utils/constants'
import { Avatar } from 'flowbite-react'
import { PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import BarChart from '@/components/graphs/BarChart'



function Index() {


    const [randomColor, setRandomColor] = useState('card-1-bg');
    const generateRandomColor = () => {
        const colors = ['card-1-bg', 'card-2-bg', 'card-3-bg'];
        const randomNumber = Math.floor(Math.random() * 3);
        return colors[randomNumber];
    }

    useEffect(() => {
        const color = generateRandomColor()
        setRandomColor(color);
    }, [])


    return (


        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader title={"Board"} />

            <div className='w-full p-3 grid md:flex grid-cols-2 custom-media  md:items-center md:justify-between gap-4'>
                {
                    teams.map(team => (
                        <Card className={`${randomColor}  md:h-[250px] h-auto md:w-[25%] sm:grid sm:grid-cols-1 w-auto flex flex-col md:justify-between justify-normal cursor-pointer`} key={team.name}>
                            <CardHeader className='flex items-center md:flex-row flex-col gap-5 '>
                                <div className="">
                                    <Avatar.Group>
                                        <Avatar.Counter total={team.members} href="#" />
                                    </Avatar.Group>

                                </div>
                                <h1>{team.name}</h1>
                            </CardHeader>
                            <CardContent className='text-[0.6rem]'>

                                {team.task}
                            </CardContent>
                            <CardFooter>
                                <Progress value={team.progress} />
                            </CardFooter>
                        </Card>
                    ))
                }

                <Card className="loadmorebg md:h-[250px] h-auto md:w-[25%] w-auto grid place-content-center cursor-pointer">
                    <h1 className='flex items-center gap-4'>Load More <PlusIcon /></h1>
                </Card>
            </div>

            <div className="w-full flex">
                <div className='w-[70%]'>
                    <BarChart />
                </div>
                <div className="w-[30%]">
                    {/* <Calendar/> */}
                </div>
            </div>
        </div>

    )
}

export default Index