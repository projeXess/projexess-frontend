import Insight from "@/components/dashboard/Insight"
import Subheader from "@/components/dashboard/Subheader"
import LineChart from "@/components/graphs/LineChart"
import PieChart from "@/components/graphs/PieChart"
import Calendar from "@/components/ui/Calendar"
import { insights } from "@/utils/constants"
import { Avatar } from 'flowbite-react'


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
                  Work closely with local universities, agricultural experts, and farmers to ensure the technology <br></br>meets the specific needs and is adaptable to local conditions.:<br></br><br></br>

                  Local Universities <br></br>
                  1. University of Rwanda - The largest university in the country with strong programs in agriculture and technology.<br></br>
                  2. Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri) - Known for its applied sciences programs, including agriculture.<br></br>
                  3. Rwanda Polytechnic (RP) - Offers various programs through its colleges that focus on technology and practical skills relevant to agriculture.<br></br><br></br>

                  Agricultural Experts<br></br><br></br>
                  Experts in Rwanda can be found working within universities, government agencies, and international organizations. Some key contacts would include:<br></br><br></br>
                  - Faculty members from the agriculture departments of the universities listed above. <br></br>
                  - Rwanda Agriculture Board (RAB) - The main government body responsible for agricultural research and development. Experts here are involved in everything from policy making to practical agricultural technologies.<br></br>
                  - International organizations The Food and Agriculture Organization (FAO) and the International Fund for Agricultural Development (IFAD) often have local experts focused on Rwandan agriculture.<br></br><br></br>

                  Farmers and Farmer Organizations<br></br><br></br>
                  - Imbaraga Farmers Organization - A well-established farmer organization in Rwanda that advocates for farmers' rights and provides training and resources.<br></br>
                  - COAGIR - Cooperative for Agriculture and Livelihood Improvement, a cooperative that supports agricultural development and sustainable practices among its members.<br></br>
                  - Local cooperatives in various districts, which are typically involved in specific types of crops such as coffee, tea, or staples like maize and beans.<br></br><br></br>

                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Training and Education </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Develop comprehensive training programs to ensure farmers and local technicians can operate and maintain the drones.
                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Sustainability Focus </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Ensure the project is economically sustainable by evaluating cost-benefit ratios and exploring ways to make it affordable for small-scale farmers, including leasing models or shared service platforms.<br></br><br></br>

                  Average Income of Rwandan Farmers<br></br>
                  The average income for Rwandan farmers largely depends on their farming scale and type. Let's estimate:<br></br>
                  - Subsistence Farmers: Typically, these farmers may earn around **$30 to $50 per month** from selling surplus produce, if available.<br></br>
                  - Commercial Farmers: Those involved in growing cash crops like coffee and tea might earn substantially more, approximately **$100 to $300 per month**, depending on crop yield and market prices.<br></br><br></br>

                  Cost Analysis for Drone Technology<br></br>
                  To make this technology viable, consider the initial and recurring costs for using drones:<br></br>
                  - Initial Costs:<br></br>
                  - Purchase Cost of a Drone: A commercial agricultural drone can cost anywhere from $5,000 to $20,000 each, depending on capabilities.<br></br>
                  - **Training and Setup**: Initial training and setup might cost around **$1,000**.<br></br><br></br>

                  - Operational Costs:<br></br>
                  - Maintenance: Approximately **$500 per year** for maintenance.<br></br>
                  - Operation Costs: Including fuel or battery charges, might run about **$50 per operation**.<br></br><br></br>

                  Pricing Models<br></br>
                  Given these costs and the income levels of farmers, the following models could help make this technology accessible:<br></br>
                  - Leasing: Instead of purchasing, farmers could lease a drone for about **$100 to $200 per month** during planting and spraying seasons.<br></br>
                  - Pay-per-Use Service: A service provider could offer drone spraying or monitoring for **$10 to $20 per acre per service**.<br></br>
                  - Shared Use: Farmers could form a cooperative and share the cost of one drone system, potentially reducing individual costs dramatically.<br></br> For example, if 100 farmers share one drone, the cost per farmer could be reduced to as little as **$20 to $40 per month**.<br></br><br></br>

                  Subsidies and Financial Support<br></br>
                  To further reduce the burden:<br></br>
                  - Government Subsidies: Could cover 50% of the leasing or purchase cost.<br></br>
                  - International Grants: Might be used to subsidize the initial setup and training costs.<br></br><br></br>


                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Regulatory Compliance:  </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Navigate and comply with local aviation and pesticide application laws to ensure the safe and lawful operation of drones.<br></br><br></br>

                  1. Drone Registration: All drones must be registered with the Rwanda Civil Aviation Authority (RCAA) using the RCAA-Form-UAS001. Only Rwandan citizens or permanent residents aged 21 or older can register a drone. The registration process typically takes about three months and incurs a fee of approximately 110,000 RWF (around 125 Euros).<br></br><br></br>

                  2. Operational Permit: In addition to registration, drone operators must obtain a specific operational permit from the RCAA by filling out the RCAA-Form-RPAS002. This application process can take between two to four weeks.<br></br><br></br>

                  3. Insurance Requirement: Insurance is mandatory for both private and commercial drone operations in Rwanda.<br></br><br></br>

                  4. Flight Restrictions: Drones are prohibited from flying within a 10-kilometer radius of any airport or airfield and must maintain a distance of 50 meters from people, buildings, vehicles, and animals unless directly involved in the drone operation. Night flights are not allowed, and drones must not exceed a speed of 100 kilometers per hour..<br></br><br></br>

                  5. Foreign Operators: While foreign drone operators can register their drones, the actual drone operation must be conducted by a Rwandan citizen or a registered Rwandan business. It is highly recommended to employ a local drone operator to facilitate permitting and legal operations.<br></br><br></br>

                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> Continuous Feedback Loop: </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Establish a feedback mechanism to continuously gather data and insights from users to improve the technology and its application.
                  This plan is structured to be adaptable and could be revised based on ongoing feedback and technological advancements.<br></br><br></br>
                </p>
                <h1 className='text-[2rem] font-bold text-[#5e5e5e]'> CHALLENGES: </h1>
                <p className='text-[#5D5D5D] text-[0.8rem] text-[1em]'>
                  Implementing a drone-based crop monitoring and pesticide spraying system in Rwanda can encounter several challenges:<br></br><br></br>

                  1. Technological Adoption and Literacy: Farmers in Rwanda have LOW levels of technological literacy. Introducing advanced technologies like drones could require significant training and support to ensure comfortable and effective use by local farmers.<br></br><br></br>

                  2. Cost and Access to Technology: The initial cost of drones, along with their maintenance and operation, can be high. This might be prohibitive for small-scale farmers unless subsidized or provided through a cooperative model that allows cost-sharing.<br></br><br></br>

                  3. Infrastructure Issues: Reliable access to electricity and internet, which are crucial for the operation and data transmission capabilities of drones, can be inconsistent in rural areas of Rwanda, this is not available in more than 10 districts in Rwanda.<br></br><br></br>

                  4. Cultural Acceptance: Introducing new technology often requires changing traditional farming methods used in many rural areas like Nyabihu and Rusizi and others alike, which might be met with resistance from local communities. Gaining trust and demonstrating the value of drones without disrupting cultural norms is essential.<br></br><br></br>

                  5. Logistics and Maintenance: Developing a robust system for the distribution and maintenance of drone technology in rural areas like karongi and many more like it can be challenging. Ensuring that parts and technical support are readily available is crucial for the sustainability of the project.<br></br><br></br>

                  6. Environmental Concerns: While drones can reduce the amount of pesticide used, their impact on the environment, including potential contamination from battery use and disposal, needs careful management.<br></br><br></br>

                  7. Weather Dependency: Drone operations can be highly sensitive to weather conditions. Rwanda’s varied climate, with its rainy seasons, can limit the operational days for drones, affecting their efficiency.<br></br><br></br>
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