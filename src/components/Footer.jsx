const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2023 Codemindz. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer