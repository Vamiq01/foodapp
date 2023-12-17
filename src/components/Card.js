import React from 'react'

export default function Card() {
  return (
    <div>
    <div
      className="card mt-3"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is card</p>
        <div className="container w-100 ">
          <span>Total Price</span>
          <select className="m-2 h-100 bg-warning">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i} value={i}>
                  {" "}
                  {i+1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  )
}
