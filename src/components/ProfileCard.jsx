import React from 'react'

function ProfileCard({user}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="p-8">
            <div className="flex flex-col items-center">
                <img 
                    src={user.avatar_url}
                    alt="avatar"
                    className="w-32 h-32 rounded-full border-4 border-orange-100 shadow-md mb-4" 
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name || "No name provided"}</h2>
                <p className="text-orange-600 mb-2">@{user.login}</p>
                <p className="text-gray-600 text-center mb-6">{user.bio || "No bio provided"}</p>

                <div className="grid grid-cols-3 gap-8 mb-6">
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-orange-600">{user.followers}</span>
                        <span className="text-gray-600">Followers</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-orange-600">{user.following}</span>
                        <span className="text-gray-600">Following</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-orange-600">{user.public_repos}</span>
                        <span className="text-gray-600">Repos</span>
                    </div>
                </div>

                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-full hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard