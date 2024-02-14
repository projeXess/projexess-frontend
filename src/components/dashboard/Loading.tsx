import ReactLoading from 'react-loading'

function DashboardLoading() {
    return (
       <div className="h-full grid place-content-center">
            <ReactLoading color={"#3AA1FF"} type='bars' />
       </div>
    )
}

export default DashboardLoading