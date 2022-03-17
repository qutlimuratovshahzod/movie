import React from 'react'

export const Card = () => {
    return (
        <div classNameName="card w-74 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div classNameName="card-body">
                <h2 classNameName="card-title">
                    Shoes!
                    <div classNameName="badge badge-secondary badge-error">8.9 &#9733;</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div classNameName="card-actions justify-end">
                   <button classNameName="btn btn-sm btn-primary mt-4">Watch</button>
                </div>
            </div>
        </div>

    )
}
