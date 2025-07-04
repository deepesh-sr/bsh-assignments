import React from 'react'

const TemplateCard = (props) => {
    return (
        <div className='w-92 h-96 my-3 shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden'>
            <img src={props.image} alt={props.title} className='w-full h-48 object-cover' />
            <div className="p-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                        <a href={props.templateUrl}>
                            {props.title}
                        </a>
                    </h2>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h6 className="text-xl font-bold text-green-600">{props.price}</h6>
                        <div className="flex items-center text-gray-600 text-sm">
                            <i className="fa fa-shopping-basket mr-1"></i>
                            <span>{props.purchases} Purchases</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <a
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                            href={props.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Preview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateCard
