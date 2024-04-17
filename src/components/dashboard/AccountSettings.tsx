import { Avatar, Input } from "antd"

function AccountSettings() {
    return (
        <div className="flex flex-col gap-5 mt-10">
            <Avatar size={"large"} src="/default_profile.svg" className="w-[100px] h-[100px] bg-slate-100 border-dotted border-2 border-black text-black cursor-pointer"  >
                <img width={'100%'} />
            </Avatar>

            <form action="" className="w-full flex flex-col gap-11">
                <div className="w-full flex gap-5">
                    <div className="input__container w-1/2">
                        <label htmlFor="firstName">First Name</label>
                        <Input placeholder="John" className="mt-5"/>
                    </div>

                    <div className="input__container w-1/2">
                        <label htmlFor="lastName" >Last Name</label>
                        <Input placeholder="Doe" className="mt-5" />
                    </div>
            </div>

                <div className="w-full flex gap-5">
                    <div className="input__container w-1/2">
                        <label htmlFor="email">Email</label>
                        <Input placeholder="johndoe@gmail.com" className="mt-5" />
                    </div>

                    <div className="input__container w-1/2">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Input placeholder="034568547634758" className="mt-5" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="btn-filled p-2 rounded-md" >Update</button>
                    <button className="btn-outlined p-2 rounded-md">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default AccountSettings