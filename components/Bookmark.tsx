import React from 'react'

const Bookmark = () => {
  return (
    <>
      <div className="absolute top-0 right-0">
        <svg
          width={20}
          height={26}
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1429 0H2.85714C2.09938 0 1.37266 0.301019 0.836838 0.836838C0.301019 1.37266 0 2.09938 0 2.85714V25.7143L10 21.4286L20 25.7143V2.85714C20 1.27143 18.7143 0 17.1429 0Z"
            fill="currentColor"
          />
        </svg>

        {/* <svg
        width={20}
        height={26}
        viewBox="0 0 20 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1429 21.4286L10 18.3143L2.85714 21.4286V2.85714H17.1429M17.1429 0H2.85714C2.09938 0 1.37266 0.301019 0.836838 0.836838C0.301019 1.37266 0 2.09938 0 2.85714V25.7143L10 21.4286L20 25.7143V2.85714C20 1.27143 18.7143 0 17.1429 0Z"
          fill="currentColor"
        />
      </svg> */}
      </div>
    </>
  )
}

export default Bookmark
