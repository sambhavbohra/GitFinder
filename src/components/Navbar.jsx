import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                
                
                <Link 
                    to="/" 
                    className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-200"
                >
                    GitFinder
                </Link> 

                
                <div className="flex items-center space-x-6">
                    <Link 
                        to="/" 
                        className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
                    >
                        Profile
                    </Link>
                    <Link 
                        to="/repos" 
                        className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
                    >
                        Repositories
                    </Link>
                    <Link 
                        to="/followers" 
                        className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
                    >
                        Followers
                    </Link>  
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar