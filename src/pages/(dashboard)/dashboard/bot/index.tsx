import Subheader from "@/components/dashboard/Subheader"
import LineChart from "@/components/graphs/LineChart"
import PieChart from "@/components/graphs/PieChart"
import Calendar from "@/components/ui/Calendar"


function Bot() {
  return (
    <>
      <Subheader title="AI Bot" description="View all you project progress using the timeline presentation provided" />

      <div className="w-full flex justify-start items-start p-5 gap-2">
        <div className="w-[56%] h-auto p-3 bg-white rounded-xl">
          <h1 className="text-[#414D55] text-[1.01rem] font-bold pl-5 mb-5">Market influencing factors</h1>
          <LineChart />
        </div>
        <div className="w-[44%] lg:block hidden bg-white p-3 h-auto rounded-xl shadow-lg h-full">
          <h1 className="text-[#414D55] text-[1.01rem] font-bold pl-5">Market consumption</h1>
          <PieChart />
        </div>
      </div>


      <div className="bot-page w-full p-2 flex md:flex-row flex-col-reverse items-center justify-around gap-5">
        <div className="md:w-[75%] w-[100%] sm:w-[75%]  h-[400px] bg-white p-6 flex flex-col items-start justify-start rounded-xl shadow-lg overflow-auto  ">
          <h1 className="text-[#414D55] text-[2.1rem] font-bold pl-5">Best Ways to Develop and Implement the Project</h1>

          <div className="p-1 mt-7">
            <div className='w-full p-2 flex gap-5 items-start cursor-pointer mb-2 justify-start'>

              <div className='flex flex-col gap-2'>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Collaborative Approach: </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Work closely with local universities, road safety experts, and community organizations to ensure the technology meets specific needs and adapts to local conditions.<br></br><br></br>

                  <span className="font-bold">Local Universities </span><br></br><br></br>
                  <span className="font-bold">1. University of Rwanda</span> - Engage their technology and engineering departments for research and development support.<br></br><br></br>
                  <span className="font-bold">2. Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)</span> -  Utilize their expertise in applied sciences for technical validation and testing.<br></br><br></br>
                  <span className="font-bold">3. Rwanda Polytechnic (RP)</span> - Collaborate on training programs for local technicians and end-users.<br></br><br></br>
                  <span className="font-bold">4. ULK - </span>Partner with their faculties of science and technology for research and development support.<br></br><br></br>
                  <span className="font-bold">5. Adventist University of Central Africa (AUCA)</span> - Engage their ICT and engineering programs for technical expertise and collaboration.<br></br><br></br>

                  <span className="font-bold">Road Safety Experts</span><br></br><br></br>
                  Experts in Rwanda can be found working within universities, government agencies, and international organizations. Some key contacts would include:<br></br><br></br>
                  - Partner with the Rwanda National Police and Rwanda Transport Development Agency for data and regulatory support.<br></br><br></br>
                  - Collaborate with entities like the World Health Organization and the Global Road Safety Partnership for expertise and funding.<br></br><br></br>
                  - <span className="font-bold">Rwanda Transport Development Agency (RTDA):</span> Work with them for regulatory guidance and infrastructure support.<br></br><br></br>
                  - <span className="font-bold">Rwanda Utilities Regulatory Authority (RURA): </span>Engage for regulatory compliance and operational permits <br></br><br></br>

                  <span className="font-bold">Community Organizations</span><br></br><br></br>
                  <span className="font-bold">- SafeMotos:</span> A local startup focusing on safe motorcycle taxi services, which can provide valuable insights and collaboration opportunities.<br></br><br></br>
                  <span className="font-bold">- Rwanda Youth in Road Safety (RYRS):</span> Engage with this organization for youth-led road safety education and advocacy.<br></br><br></br>
                  <span className="font-bold">- Society for Family Health (SFH) Rwanda:</span> Work with them for community health and safety campaigns that can include road safety elements.<br></br><br></br>

                  <span className="font-bold">Community Leaders</span><br></br><br></br>
                  <span className="font-bold">- Local Administrative Entities Development Agency (LODA):</span> A local startup focusing on safe motorcycle taxi services, which can provide valuable insights and collaboration opportunities.<br></br><br></br>
                  <span className="font-bold">- National Itorero Commission:</span> Engage with this organization for youth-led road safety education and advocacy.<br></br><br></br>

                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Training and Education </h1>
                <span className="font-bold">Training Institutions:</span>
                <span className="font-bold">- Integrated Polytechnic Regional Centre (IPRC):</span> A local startup focusing on safe motorcycle taxi services, which can provide valuable insights and collaboration opportunities.<br></br><br></br>
                <span className="font-bold">- Technical and Vocational Education and Training (TVET) Centers: </span> Engage with this organization for youth-led road safety education and advocacy.<br></br><br></br>
                Develop comprehensive training programs for local technicians and end-users to ensure they can operate and maintain SpeedSense effectively. This includes hands-on training sessions, workshops, and ongoing support.<br></br><br></br>

                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Sustainability Focus </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Ensure the project is economically sustainable by evaluating cost-benefit ratios and exploring ways to make it affordable for small-scale farmers, including leasing models or shared service platforms.<br></br><br></br>

                  <span className="font-bold">Economic Support and Financial Institutions:</span><br></br><br></br>
                  <span className="font-bold">- Development Bank of Rwanda (BRD):</span> Explore funding and subsidy opportunities for technology adoption in the agricultural sector.<br></br><br></br>
                  <span className="font-bold">- Rwanda Development Board (RDB): </span>Seek support for economic sustainability evaluations and potential grants.<br></br><br></br>

                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Regulatory Compliance:  </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Navigate and comply with local laws to ensure safe and lawful operation of SpeedSense.<br></br><br></br>

                  <span className="font-bold">1. Rwanda Utilities Regulatory Authority (RURA)</span><br></br><br></br>

                  <span className="font-bold">Role:</span> Ensure that all SpeedSense devices comply with national telecommunications and technology regulations.<br></br>
                  <span className="font-bold">Tasks:</span> Obtain necessary certifications and permits for the operation of the SpeedSense devices within vehicles.<br></br><br></br>

                  <span className="font-bold">Rwanda National Police (RNP)</span><br></br><br></br>

                  <span className="font-bold">Role:</span> Collaborate for regulatory compliance and road safety integration.<br></br>
                  <span className="font-bold">Tasks:</span> Work together to ensure the SpeedSense system aligns with national road safety policies and assist in the enforcement of speed limits.<br></br><br></br>

                  <span className="font-bold">Ministry of Infrastructure (MININFRA)</span><br></br><br></br>

                  <span className="font-bold">Role:</span> Ensure the technology adheres to national infrastructure standards and regulations.<br></br>
                  <span className="font-bold">Tasks:</span> Obtain necessary approvals for integrating SpeedSense into public and private transportation systems.<br></br><br></br>

                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Continuous Feedback Loop: </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  <span className="font-bold">National Institute of Statistics of Rwanda (NISR)</span><br></br><br></br>

                  <span className="font-bold">Role:</span> Collaborate for comprehensive data collection and analysis on road safety and SpeedSense performance.<br></br>
                  <span className="font-bold">Tasks:</span> Utilize existing statistical frameworks to gather data on traffic incidents and user behavior, providing insights for system improvements.<br></br><br></br>

                  <span className="font-bold">Rwanda Information Society Authority (RISA)</span><br></br><br></br>

                  <span className="font-bold">Role:</span> Engage for digital solutions in gathering user feedback and enhancing system functionalities.<br></br>
                  <span className="font-bold">Tasks:</span> Develop and implement digital platforms for real-time feedback from users and stakeholders to continuously refine the SpeedSense technology.<br></br><br></br>
                  Establish a feedback mechanism to continuously gather data and insights from users to improve the technology and its application.<br></br>
                  This plan is structured to be adaptable and could be revised based on ongoing feedback and technological advancements.<br></br><br></br>
                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> CHALLENGES: </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Implementing SpeedSense in Rwanda can encounter several challenges:<br></br><br></br>

                  <span className="font-bold">1. Technological Adoption and Literacy:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Low levels of technological literacy among drivers, especially in rural areas.<br></br>
                  <span className="font-bold">- Example:</span> Many drivers in regions like Nyabihu and Rusizi may be unfamiliar with advanced road safety technology, requiring significant training programs.<br></br><br></br>

                  <span className="font-bold">2. Cost and Access to Technology:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> High initial costs for SpeedSense devices may be prohibitive.<br></br>
                  <span className="font-bold">- Example:</span> Taxi drivers and moto-taxi operators, common in Kigali and other cities, may find it difficult to afford these devices without financial assistance or subsidies.<br></br><br></br>

                  <span className="font-bold">3. Infrastructure Issues:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Inconsistent access to reliable electricity and internet connectivity, particularly in rural areas.<br></br>
                  <span className="font-bold">- Example:</span> In districts like Karongi and Nyamasheke, where infrastructure development is still catching up, maintaining and updating SpeedSense devices could be challenging.<br></br><br></br>

                  <span className="font-bold">4. Regulatory and Compliance Hurdles:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Navigating stringent regulatory frameworks and obtaining necessary approvals.<br></br>
                  <span className="font-bold">- Example:</span> Ensuring compliance with regulations from the Rwanda Utilities Regulatory Authority (RURA) and the Rwanda National Police for device installation and usage can be time-consuming and complex.<br></br><br></br>

                  <span className="font-bold">5. Cultural Acceptance:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Resistance to new technologies and changes in driving behavior.<br></br>
                  <span className="font-bold">- Example:</span> Drivers in traditional communities may be skeptical of the benefits of SpeedSense technology, requiring extensive community engagement and educational campaigns to build trust.<br></br><br></br>

                  <span className="font-bold">6. Geographical and Environmental Factors:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Diverse and challenging road conditions, including mountainous terrain.<br></br>
                  <span className="font-bold">- Example:</span> Roads in the Northern Province, which are often steep and winding, require SpeedSense devices that can handle a variety of driving conditions and provide accurate feedback.<br></br><br></br>

                  <span className="font-bold">7. Data Privacy and Security Concerns:</span><br></br><br></br>
                  <span className="font-bold"> - Challenge:</span> Ensuring the privacy and security of data collected by SpeedSense devices.<br></br>
                  <span className="font-bold">- Example:</span> Drivers might be concerned about how their driving data will be used and stored, especially with incidents of data breaches reported in the past.<br></br><br></br>

                  <span className="font-bold">8. Funding and Financial Sustainability:</span><br></br><br></br>
                  <span className="font-bold">- Challenge:</span> Securing sustained funding and financial support for long-term implementation.<br></br>
                  <span className="font-bold">- Example:</span> Reliance on funding from the Rwandan government and international grants, such as those from the African Development Bank (AfDB), is crucial to ensure the project's viability and scalability.<br></br><br></br>

                  By addressing these challenges, the SpeedSense project can be better tailored to the unique conditions and needs of the country, ensuring greater effectiveness and adoption.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="w-[30%] lg:block hidden bg-white p-3  rounded-xl shadow-lg">
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default Bot