import Insight from "@/components/dashboard/Insight"
import Subheader from "@/components/dashboard/Subheader"
import Calendar from "@/components/ui/Calendar"
import { insights } from "@/utils/constants"


function Bot() {
  return (
    <>
      <Subheader title="AI Bot" description="View all you project progress using the timeline presentation provided" />

      <div className="bot-page w-full p-2 flex md:flex-row flex-col-reverse items-center justify-around gap-5">
        <div className="md:w-[65%] w-[75%]  h-[400px] bg-white p-6 flex flex-col items-start justify-start rounded-xl shadow-lg overflow-auto  ">
          <h1 className="text-[#414D55] text-[1.01rem] font-bold pl-5">Daily market insights information gathered by AI</h1>

          <div className="p-1 mt-7">
            {
              insights.map(insights => (
                <Insight {...insights} key={insights.title} />
              ))
            }
          </div>
        </div>
        <div className="md:w-[30%] w-[50%] bg-white p-3  rounded-xl shadow-lg">
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default Bot