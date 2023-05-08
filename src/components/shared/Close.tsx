import React from "react"

const Close = ({ action, color, className }) => {
  return (
    <div className={`cursor-pointer ${className}`} onClick={action}>
      <div className="relative overflow-hidden w-8 sm:w-12 h-8 sm:h-12">
        <div
          className={`border border-${color} w-8 sm:w-12 absolute right-0 top-4 sm:top-6 rotate-45`}
        ></div>
        <div
          className={`border border-${color} w-8 sm:w-12 absolute right-0 top-4 sm:top-6 -rotate-45`}
        ></div>
      </div>
    </div>
  )
}

export default Close
