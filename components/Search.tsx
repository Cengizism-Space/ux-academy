export default function Search() {
  return (
    <>
      <div className="mx-auto pl-8 flex flex-wrap items-center text-base justify-center">
        <input
          className={`sm:w-64
                      w-40 
                      bg-gray-100 
                      text-gray-600 
                      rounded 
                      border 
                      border-gray-400 
                      focus:outline-none 
                      focus:border-indigo-500 
                      text-base 
                      py-2 
                      px-4`}
          placeholder="Search"
          type="text"
        />
      </div>
    </>
  )
}
