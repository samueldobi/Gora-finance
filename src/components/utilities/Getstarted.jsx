const Getstarted = ({text}) => {
  return (
    <div>
        <button type="button" className="py-3 px-4 inline-flex items-center m-5  p-5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            {text}
    </button>
    </div>
  )
}

export default Getstarted