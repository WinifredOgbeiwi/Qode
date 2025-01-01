import React from 'react'

const Loader = () => {
  return (
    <div className=" w-full flex justify-center ">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 4px solid black;
          border-top: 4px solid white;
          border-radius: 100%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Loader