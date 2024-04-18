import Subheader from './Subheader'


function TimelineComponent() {
    return (
        <div className={`w-full h-auto p-3 flex gap-4 flex-col`}>
            <Subheader title={"Timeline"} description='View all you project progress using the timeline presentation provided' />


            <div className="min-h-screen bg-white">

                <div className="min-h-screen flex justify-center">
                    <div className="w-2/3 mx-auto">
                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 1
                                        </div>
                                        <div className="flex flex-row">
                                            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Conduct Market Research <br></br><br></br>
                                        - Objective: To understand the local farming needs, crop types, and challenges faced by Rwandan farmers.<br></br><br></br>
                                        - Rationale: Rwanda's agriculture is varied, with regions specializing in different types of crops (e.g., coffee, tea, and subsistence crops like maize and beans). Understanding these specifics is crucial to tailor the drone technology for maximum effectiveness and acceptance by local communities.

                                    </div>
                                </div>

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>1-3</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">

                            </div>
                        </div>


                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>4-6</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 1
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Engage with Stakeholders<br></br><br></br>
                                        - Objective: To build relationships with key local stakeholders including agricultural departments, universities like the University of Rwanda, and farming cooperatives.<br></br><br></br>
                                        - Rationale: Engagement with these stakeholders is essential for gaining insights, support, and legitimacy. These stakeholders can provide practical insights into local farming practices and help in disseminating the technology through established networks.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 1
                                        </div>
                                        <div className="flex flex-row">
                                            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Develop Business Plan and Secure Funding<br></br><br></br>
                                        - Objective: To finalize the business plan, secure funding through grants, government subsidies, or private investments, and start forming technology partnerships.<br></br><br></br>
                                        - Rationale: Rwanda has a supportive environment for agricultural innovation, with various funding opportunities available through government and international aid programs focused on agricultural development. Securing funding at this stage helps in ensuring the sustainability of the project.

                                    </div>
                                </div>

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>7-9</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">

                            </div>
                        </div>
                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>10-12</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 1
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Pilot Program Design and Legal Approvals:<br></br><br></br>
                                        - Objective: To design a pilot program and set up a local team, and obtain all necessary legal approvals and certifications for drone flights.<br></br><br></br>
                                        - Rationale: Regulatory compliance is critical, especially in a country like Rwanda where drone regulations are stringent. Setting up a local team ensures that the project has on-the-ground support and is adapted to local needs.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 2
                                        </div>
                                        <div className="flex flex-row">
                                            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Development of Drone Prototypes:<br></br><br></br>
                                        - Objective: To develop drone prototypes specifically designed for the types of terrain and agricultural practices in Rwanda.<br></br><br></br>
                                        - Rationale: Rwanda’s topography varies significantly from flat regions to mountainous areas, which affects how drones need to be designed and operated for maximum efficiency.

                                    </div>
                                </div>

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>1-6</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">

                            </div>
                        </div>

                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>7-12</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 2
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Field Trials and Training: <br></br><br></br>
                                        - Objective: To conduct field trials with selected farms and provide training for operators.<br></br><br></br>
                                        - Rationale: Field trials allow for real-world testing and adjustment of the technology based on actual conditions and feedback from Rwandan farmers. Training is essential to build local capacity to operate and maintain drones.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 3
                                        </div>
                                        <div className="flex flex-row">
                                            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Refinement of Technology: <br></br><br></br>
                                        - Objective: To refine technology and processes based on trial outcomes.<br></br>
                                        - Rationale: This phase allows for the integration of lessons learned during the trials into the final product and service offerings, ensuring that the drones meet the specific needs of the Rwandan agricultural landscape.

                                    </div>
                                </div>

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>1-4</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">

                            </div>
                        </div>

                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>5-8</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 3
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        Scale-up of Production and Distribution: <br></br><br></br>
                                        - Objective: To scale up the production and distribution of drone systems and expand training programs.<br></br><br></br>
                                        - Rationale: Scaling up involves not just increasing the number of drones but also ensuring that the infrastructure for supporting the drones (such as service centers and training facilities) is spread across Rwanda to be accessible to farmers in all regions.

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row w-full">

                            <div className="w-2/5 px-2 py-10">
                                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                    <div className="text-gray-600 mb-2 flex justify-between">
                                        <div className="font-bold">
                                            YEAR 3
                                        </div>
                                        <div className="flex flex-row">
                                            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                    Full Deployment and Support Establishment:<br></br><br></br>
                                        - Objective: To fully deploy the drone systems and establish ongoing support and maintenance services.<br></br>
                                        - Rationale: The full deployment ensures that the technology is widely available and beneficial to Rwandan farmers. Establishing support and maintenance services helps in sustaining the technology use and addressing any issues promptly, crucial for long-term success.

                                    </div>
                                </div>

                            </div>
                            <div className="w-1/5  flex justify-center">
                                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                        <div>9-12</div>
                                        <div>Months</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-10 ">

                            </div>
                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default TimelineComponent