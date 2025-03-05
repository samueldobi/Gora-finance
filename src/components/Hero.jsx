import Getstarted from "./utilities/Getstarted"
const Hero = () => {
  return (
    <>
   
        <div className="">
          <h1 className="font-semibold text-[#000] text-5xl md:text-6xl">
            <span className="text-[#E52020]">Gora Finance:</span> Empowering Your Finances, Together
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-lg">
                Stake, contribute, crowdfund, and pay seamlessly with Gora Finance, the social finance app powered by Algorand’s native tokens.
            </p>
          </div>
          <div className="button-div flex">
            <Getstarted text = "Get Started"/>
            <Getstarted text = "Learn More "/>
          </div>
        </div>

    </>
  )
}

export default Hero