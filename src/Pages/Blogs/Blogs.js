import React from 'react';

const Blogs = () => {
    return (
        <div className='w-5/6 mx-auto my-10 grid grid-cols-1 gap-6 '>
            <div tabIndex={1} className="collapse collapse-plus border border-sky-400 bg-gray-200 rounded-box shadow-lg">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;