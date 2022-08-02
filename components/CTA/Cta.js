const Cta = () => {
    return (
    <div className="my-10 mb-32">
        <div className="rounded-xl bg-blue-700 p-16">
            <div className="-m-6 flex flex-wrap items-center justify-between">
                <div className="w-1/2 p-6">
                    <div className="font-heading text-white">
                        <h2 className="text-[42px] font-semibold">Subscribe to get updated</h2>
                        <p className="my-5 text-md text-opacity-60">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
                    </div>
                 </div>
                <div className="w-1/2 p-6">
                    <div className=" flex flex-wrap justify-center">
                        <div className="w-auto">
                            <button className="font-heading border-2 w-[202px] rounded-md border-white ml-[180px] py-4 text-xs">
                                <p className="text-center -tracking-tighter text-white">Get Start</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}


export default Cta;