import Subheader from "@/components/dashboard/Subheader"
import { InstagramIcon, LinkedinIcon, Plus, TwitterIcon } from "lucide-react"
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";


const members = [
    {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    }, {
        name: "Amanda Fisher",
        image: 'https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=',
        role: "Designer",
        description: 'There are many variations of passages of Lorem Ipsum available',
        socials: [
            {
                twitter: '',
                email: '',
                tiktok: '',
                linkedin: ''
            }
        ]
    },
]

function index() {
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

            <div className="w-full p-3 grid md:grid-cols-4 gap-5 grid-cols-2 sm:grid-cols-3">
                {
                    members.map((member) => {
                        return (
                            <Link to={`/dashboard/team/${member.name}`}>
                                <Card

                                    hoverable
                                    className="w-auto"
                                    cover={
                                        <img
                                            alt="example"
                                            src={member.image}
                                        />
                                    }
                                    actions={[
                                        <TwitterIcon key="twitter" />,
                                        <InstagramIcon key="instagram" />,
                                        <LinkedinIcon key="linkedin" />,

                                    ]}
                                >

                                    <Meta
                                        className="flex justify-center text-center text-[0.7rem]"
                                        // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title={member.name}
                                        description={member.description}
                                    />
                                </Card>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default index