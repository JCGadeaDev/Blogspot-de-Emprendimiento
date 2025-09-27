import React from 'react'

const PostCard = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <a href="#" className="font-medium hover:underline transition-colors duration-300" style={{color: '#f89831'}}>Leer más →</a>
        </div>
    );
};

export default PostCard;