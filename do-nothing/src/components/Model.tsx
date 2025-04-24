import React from "react";

interface ModelProps {
  children: React.ReactNode
}
const Model = ({children}: ModelProps) => {

  return(
      <div className="model_container">
        {children}
      </div>
  )
}

export default Model