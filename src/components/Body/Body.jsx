const Body = ()=>{
    return(
        <>
            <div className="body">
                <div className="w-full h-[15rem] bg-red-100 gap-y-4">will contain the photo</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-[10px] bg-red-100">
                <div className="h-[25rem] bg-slate-400 rounded-md">col 1</div>
                <div className="h-[25rem] bg-slate-400 rounded-md">col 2</div>
                <div className="h-[25rem] bg-slate-400 rounded-md">col 3</div>
                <div className="h-[25rem] bg-slate-400 rounded-md">col 4</div>
            </div>
        </>
    )
} 
export default Body