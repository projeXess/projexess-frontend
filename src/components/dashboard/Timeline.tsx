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
                                        <span className='font-bold'>Conduct Market Research</span> <br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Understand the local road safety challenges, current measures, and accident statistics.<br></br><br></br>
                                        <span className='font-bold'> - Rationale:</span> Conducting a detailed market analysis is crucial to identify specific areas where SpeedSense can have the most impact. Gathering data on road safety issues, existing speed control measures, and accident statistics will help in tailoring the solution to local needs.<br></br><br></br>
                                        <span className='font-bold'>- Activities:</span><br></br>
                                        - Collect and analyze data from government agencies and road safety organizations.<br></br>
                                        - Conduct surveys and interviews with local drivers, road safety experts, and community members.<br></br>
                                        - Identify high-risk areas and common causes of accidents to prioritize interventions.<br></br>

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
                                        <span className='font-bold'>Engage with Stakeholders</span><br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Build relationships with key stakeholders including local universities, government agencies, and road safety organizations.<br></br><br></br>
                                        <span className='font-bold'>- Rationale:</span> Collaboration with stakeholders like the University of Rwanda, Rwanda Transport Development Agency, and local NGOs is essential for gaining insights, support, and legitimacy. These stakeholders can provide practical insights and help in disseminating the technology through established networks.<br></br><br></br>
                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Hold meetings and workshops with representatives from the University of Rwanda, INES-Ruhengeri, and Rwanda Polytechnic.<br></br>
                                        - Partner with the Rwanda National Police and Rwanda Transport Development Agency for data sharing and regulatory guidance.<br></br>
                                        - Engage with international organizations such as the World Health Organization and the Global Road Safety Partnership for expertise and potential funding.<br></br>

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
                                        <span className='font-bold'>- Objective:</span> Finalize the business plan, secure funding through grants, government subsidies, or private investments, and start forming technology partnerships.<br></br><br></br>
                                        <span className='font-bold'>- Rationale:</span> Rwanda has a supportive environment for technological innovation with various funding opportunities available. Securing funding at this stage ensures the sustainability of the project and allows for the development of necessary partnerships.<br></br><br></br>
                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Draft a comprehensive business plan detailing the project scope, financial projections, and implementation strategy.<br></br>
                                        - Apply for grants and subsidies from Rwandan government programs and international aid organizations.<br></br>
                                        - Approach private investors and technology partners for additional funding and support.<br></br>
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
                                        <span className='font-bold'>Pilot Program Design and Legal Approvals:</span><br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Design a pilot program, set up a local team, and obtain all necessary legal approvals and certifications for device operation.<br></br><br></br>
                                        <span className='font-bold'>- Rationale:</span> Regulatory compliance is critical, especially in a country like Rwanda with stringent drone regulations. Setting up a local team ensures on-the-ground support and adaptation to local needs. <br></br><br></br>
                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Develop the pilot program plan, including selecting test locations and outlining the implementation process.<br></br>
                                        - Assemble a local team consisting of technicians, project managers, and community liaisons.<br></br>
                                        - Work with the Rwanda Civil Aviation Authority (RCAA) to obtain necessary operational permits and registrations.<br></br>
                                        - Secure mandatory insurance for device operations.<br></br>

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
                                        <span className='font-bold'>Development of SpeedSense Prototypes</span><br></br><br></br>
                                        <span className='font-bold'> - Objective:</span> Develop SpeedSense prototypes specifically designed for installation in vehicles, considering local road conditions and driving habits.<br></br><br></br>
                                        <span className='font-bold'>- Rationale:</span>  Rwanda’s topography and road conditions vary significantly, affecting how SpeedSense devices need to be designed and operated for maximum efficiency.<br></br><br></br>

                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Collaborate with local universities for research and technical validation of prototypes.<br></br>
                                        - Develop multiple prototype iterations to address different road conditions and environments, such as urban areas, rural roads, and highways.<br></br>
                                        - Conduct initial testing of prototypes in controlled environments to refine design and functionality, ensuring robustness and reliability.<br></br>

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
                                        <span className='font-bold'>Field Trials and Training:</span> <br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Conduct field trials with selected vehicles and provide training for operators and end-users.<br></br><br></br>
                                        <span className='font-bold'> - Rationale: </span> Field trials allow for real-world testing and adjustment of the technology based on actual conditions and feedback. Training builds local capacity to operate and maintain the SpeedSense system.<br></br><br></br>

                                        <span className='font-bold'>Activities:</span>
                                        - Implement field trials with a variety of vehicle types, focusing on high-risk areas identified in the market research.<br></br>
                                        - Collect data on device performance, user interactions, and road safety impacts.<br></br>
                                        - Conduct hands-on training sessions and workshops for local technicians and stakeholders.<br></br>
                                        - Develop user manuals and training materials in local languages.<br></br>

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
                                        <span className='font-bold'>Data Analysis and Feedback Integration</span> <br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Analyze data from field trials and integrate user feedback into system refinements and software updates.<br></br><br></br>
                                        <span className='font-bold'>- Rationale: </span>Continuous improvement based on real-world data and user feedback is crucial for optimizing the SpeedSense system.<br></br><br></br>

                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Analyze trial data to identify system strengths and areas for improvement.<br></br>
                                        - Incorporate feedback from users and stakeholders into design and functionality enhancements.<br></br>
                                        - Update software interfaces to improve usability and compatibility with local languages.<br></br>

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
                                        <span className='font-bold'>Scale-up of Production and Distribution:</span><br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Scale up the production and distribution of SpeedSense systems and expand training programs.<br></br><br></br>
                                        <span className='font-bold'>- Rationale:</span>  Scaling up involves not just increasing the number of devices but also ensuring that support infrastructure (such as service centers and training facilities) is accessible across Rwanda.<br></br><br></br>

                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Increase production capacity to meet growing demand.<br></br>
                                        - Establish distribution channels to ensure timely delivery of devices to various regions.<br></br>
                                        - Expand training programs to cover more operators and end-users.<br></br>
                                        - Set up additional service centers for maintenance and support.<br></br>

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
                                        <span className='font-bold'>Full Deployment and Support Establishment:</span><br></br><br></br>
                                        <span className='font-bold'>- Objective:</span> Fully deploy the SpeedSense systems and establish ongoing support and maintenance services.<br></br><br></br>
                                        <span className='font-bold'> Rationale:</span>- Full deployment ensures that the technology is widely available and beneficial to Rwandan road users. Establishing support and maintenance services helps sustain technology use and address issues promptly.<br></br><br></br>

                                        <span className='font-bold'>Activities:</span><br></br>
                                        - Roll out SpeedSense systems across all targeted regions.<br></br>
                                        - Monitor and evaluate the impact on road safety metrics, such as accident rates and speeding behavior.<br></br>
                                        - Maintain open communication channels with users for continuous feedback and support.<br></br>
                                        - Establish a dedicated support team to handle maintenance, troubleshooting, and user assistance.<br></br>

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