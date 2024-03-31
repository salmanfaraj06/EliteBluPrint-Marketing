import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <span className="ml-3 text-xl">EliteBluPrint</span>
            </a>
            <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-700 sm:py-2 sm:mt-0 mt-4">
                © {new Date().getFullYear()} EliteBluPrint —
                <a href="https://twitter.com/elitebluprint" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@elitebluprint</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-white">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="ml-3 text-white">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="ml-3 text-white">
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="ml-3 text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer
