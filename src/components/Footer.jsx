const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
            <div className="container mx-auto px-4">
                <p className="text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} GitFinder | 
                    <span className="text-orange-600 ml-1">
                        Built with React & Tailwind CSS
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;