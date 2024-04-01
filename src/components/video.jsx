import React from 'react';

function VideoComponent() {
    return (
        <div className=" m-auto p-4 overflow-hidden shadow-lg w-[600px] h-[300px]">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/wzETRF6jGOs`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
}

export default VideoComponent;