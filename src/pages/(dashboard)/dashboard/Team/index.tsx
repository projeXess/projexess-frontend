import Subheader from "@/components/dashboard/Subheader";
import { LinkedinIcon, Plus } from "lucide-react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import image1 from '../../../../assets/image.jpeg';
import image2 from '../../../../assets/ineza.jpeg';
import image3 from '../../../../../public/default_profile.svg';

const members = [
    {
        name: "Rukundo Honore",
        image: image3,
        role: "Project manager",
        description: 'This is the project backend developer',
        socials: [
            {
                linkedin: 'https://www.linkedin.com/in/rukundo-honore-35973022a/'
            }
        ]
    }, 
    {
        name: "Vainqeur",
        image: image1,
        role: "Designer",
        description: 'This is the project frontend developer',
        socials: [
            {
                linkedin: 'https://www.linkedin.com/in/ivainqueur/'
            }
        ]
    }, 
    {
        name: "Ineza Gloria",
        image: image2,
        role: "Designer",
        description: 'This is the CEO of the project',
        socials: [
            {
                linkedin: 'https://www.linkedin.com/in/ineza-gloria-b860a925b/'
            }
        ]
    }
];

function Index() {
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader
                description=""
                title="Team"
            />
            <div className="w-full p-3 flex items-center justify-end">
                <button className="flex btn-filled p-2 rounded-md">
                    Add new
                    <Plus />
                </button>
            </div>
            <div className="w-full p-3 grid md:grid-cols-4 gap-5 grid-cols-1 sm:grid-cols-3">
                {
                    members.map((member, index) => (
                        <Link to={`/dashboard/team`} key={index}>
                            <Card
                                hoverable
                                className="w-60 mx-20"
                                about="designer"
                                cover={<img alt="example" src={member.image} />}
                                actions={[
                                    <Link to={member.socials[0].linkedin} target="_blank">
                                        <LinkedinIcon key="linkedin" />
                                    </Link>
                                ]}
                            >
                                <div className="flex flex-col gap-2 justify-center text-center text-[0.75rem]">
                                    <h1 className="font-bold text-[0.9rem]">{member.name}</h1>
                                    <p className="font-bold text-slate-700">{member.role}</p>
                                    <p>{member.description}</p>
                                </div>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Index;
