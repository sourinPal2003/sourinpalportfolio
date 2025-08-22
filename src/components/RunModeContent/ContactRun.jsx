export default function ContactRun() {
    return (
        <>
            <div className="preview-content p-6">
                <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h2>
                        <div className="space-y-3">

                            <div className="flex items-start">
                                <span className="text-green-500 mr-3">📍</span>
                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-gray-400">Kolkata, India</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-green-500 mr-3">📧</span>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-gray-400">sourinpal2003@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-green-500 mr-3">📞</span>
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-gray-400">+91 9382337725</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-green-500 mr-3">🔗</span>
                                <div>
                                    <h3 className="font-medium">Social Profiles</h3>
                                    <div className="flex space-x-3 mt-1">
                                        <a
                                            href="https://github.com/sourinPal2003/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/sourin-pal/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition"
                                        >
                                            LinkedIn
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h2 className="text-xl font-semibold text-blue-400 mb-4">Send Me a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
