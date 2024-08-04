import React from "react"

export default function CardData(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">{props.name}</h1>
          <h1 className="font-bold text-3xl">{props.data}</h1>
        </div>
      </div>
    </div>
  )
}
