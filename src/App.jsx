import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <div className='bg-neutral-900 max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24'>
      
      {/* Hero Section */}
      <div className="">
        <div className="">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0]">Preline Agency:</span> Transforming ideas into reality
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. 
              At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
            </p>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Clients Section */}
      <div className="relative overflow-hidden pt-4 bg-neutral-900">
        <svg 
          className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" 
          width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" 
            className="stroke-neutral-700/50" stroke="currentColor"
          />
          {/* Other paths omitted for brevity */}
        </svg>
        <div className="relative z-10">
          <div className="max-w-5xl px-4 xl:px-0 mx-auto">
            <div className="mb-4">
              <h2 className="text-neutral-400">
                Trusted by Open Source, enterprise, and more than 99,000 of you
              </h2>
            </div>
            <div className="flex justify-between gap-6">
              <svg 
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" 
                enableBackground="new 0 0 2499 614" 
                viewBox="0 0 2499 614" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zM..." />
                {/* Other SVG paths omitted for brevity */}
              </svg>
              {/* Add other client logos here */}
            </div>
          </div>
        </div>
      </div>
      {/* End Clients Section */}
    </div>
    </>
  )
}

export default App
