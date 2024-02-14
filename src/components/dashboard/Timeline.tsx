import Subheader from './Subheader'


function Timeline() {
    return (
        <div className={`w-full h-auto p-3 flex gap-4 flex-col`}>
            <Subheader title={"Timeline"} description='View all you project progress using the timeline presentation provided' />
        </div>
    )
}

export default Timeline