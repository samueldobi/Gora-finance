import Button from "./utilities/Button"

const Hero = () => {
  return (
    <>
   
        <div className=" flex flex-col items-center justify-evenly">
          <div className="m-4">
              <h1 className="font-semibold text-[#000] text-5xl md:text-6xl">
              <span className="text-[#E52020]">Gora Finance:</span> Empowering Your Finances, Together
            </h1>
            </div>
            <div className="max-w-4xl m-4">
              <p className="mt-5 text-2xl">
                  Stake, contribute, crowdfund, and pay seamlessly with Gora Finance, the social finance app powered by Algorand’s native tokens.
              </p>
            </div>
            <div className="button-div flex justify-center">
              <Button text = "Get Started"/>
              <Button text = "Learn More "/>
            </div> 
            
         
     
        </div>

    </>
  )
}

export default Hero