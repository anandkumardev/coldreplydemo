

const Banner = () => {
  return (
    <div>
        <section className="flex flex-col items-center justify-center mx-auto  my-20 max-md:mx-2 px-4 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-gradient-to-r from-neutral-900 to-neutral-700">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Stop Overthinking Cold Email Replies</h1>
                <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"></div>
                <p className="text-sm md:text-base text-white max-w-xl">
                    Reply Faster. Sound Human. Save time everyday
                </p>
                <button className="px-10 py-3 mt-4 text-sm bg-white hover:scale-105 transition duration-300 rounded-full">
                    Generate My Reply
                </button>
            </section>
    </div>
  )
}

export default Banner