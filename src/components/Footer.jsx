import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="container mx-auto flex flex-wrap justify-between px-6 py-12">
                {/* About Section */}
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">About the Blog</h2>
                    <p className="text-neutral-400">
                        This blog offers a comprehensive overview of web development, covering everything from frontend technologies like HTML, CSS, and JavaScript to backend frameworks and databases. Whether you're just starting out or looking to deepen your understanding, this blog provides valuable insights and resources to help you navigate the full stack of web development.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0 pl-10">
                    <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                    <ul className="text-neutral-400">
                        <li className="mb-2"><a href="/" className="hover:text-white">Home</a></li>
                        <li className="mb-2"><a href="/frontend" className="hover:text-white">Frontend</a></li>
                        <li className="mb-2"><a href="/backend" className="hover:text-white">Backend</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex  gap-4 text-2xl">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="w-full lg:w-1/4">
                    <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <form className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mb-4 px-4 py-2 rounded-lg text-black"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-neutral-700 mt-8 pt-4">
                <p className="text-center text-neutral-400">
                    &copy; {new Date().getFullYear()} WebWave. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
