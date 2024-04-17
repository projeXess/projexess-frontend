import { Checkbox } from "antd"

function Notifications() {
  return (
      <div className="p-4"> 
          <h1 className="text-[#5c5c5c] text-[1.3rem]">Notifications</h1>
          
          <div className="ml-10">
              <div className="flex gap-3 p-4 text-[#5c5c5c]">
                  <Checkbox id="newTeamMember"/>
                  <label htmlFor="newTeamMember">Get notified when a new team member is added</label>
            </div>

              <div className="flex gap-3 p-4 text-[#5c5c5c]">
                  <Checkbox id="progressSubmit" />
                  <label htmlFor="progressSubmit">Get notified when any team member submits there achievements or progress</label>
              </div>
          </div>
    </div>
  )
}

export default Notifications