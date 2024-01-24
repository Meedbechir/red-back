import React from 'react'

function HeaderSidebar({ title, button, description, icon }) {
    return (
        <div className="hotels bg-white w-100 p-2">
            <div className="titleHotels  d-flex justify-content-between px-4 mt-2 align-items-center">
                <div className="">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="pb-2">
                    {button}
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default HeaderSidebar
