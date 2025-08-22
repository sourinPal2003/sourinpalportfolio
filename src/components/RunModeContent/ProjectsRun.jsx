export default function ProjectsRun() {
    return (
        <>
            <div className="preview-content p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 - MiniSQL */}
                    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                        <h2 className="text-xl font-semibold text-blue-400">MiniSQL</h2>
                        <p className="mt-2 text-gray-300">
                            A terminal-based in-memory SQL engine with custom data structures for dynamic table handling.
                            Parsed and evaluated complex WHERE clauses using postfix logic and stack-based algorithms.
                        </p>

                        <div className="mt-3">
                            <h3 className="text-sm text-gray-400">Technologies:</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Java</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">HashMap</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">ArrayList</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Stack</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Shunting Yard Algorithm</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <a
                                href="https://github.com/sourinPal2003/MiniSQL"
                                className="text-blue-400 hover:underline text-sm"
                            >
                                View Code
                            </a>
                            <span className="text-gray-500 text-sm italic">No Live Demo</span>
                        </div>
                    </div>

                    {/* Project 2 - Worker Manager */}
                    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                        <h2 className="text-xl font-semibold text-blue-400">Worker Manager</h2>
                        <p className="mt-2 text-gray-300">
                            A task management system for workers with filter and sort options.
                            Designed dynamic state management using React hooks and customized user views
                            for pending, completed, and cancelled work.
                        </p>

                        <div className="mt-3">
                            <h3 className="text-sm text-gray-400">Technologies:</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">React.js</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <a
                                href="https://github.com/sourinPal2003/workermanager"
                                className="text-blue-400 hover:underline text-sm"
                            >
                                View Code
                            </a>
                            <span className="text-gray-500 text-sm italic">No Live Demo</span>
                        </div>
                    </div>

                    {/* Project 3 - CheatChat */}
                    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                        <h2 className="text-xl font-semibold text-blue-400">CheatChat</h2>
                        <p className="mt-2 text-gray-300">
                            A real-time chat application with messaging and file transfer features built using Node.js.
                        </p>

                        <div className="mt-3">
                            <h3 className="text-sm text-gray-400">Technologies:</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Node.js</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Express.js</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Socket.io</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">EJS</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <a
                                href="https://github.com/sourinPal2003/cheatchat"
                                className="text-blue-400 hover:underline text-sm"
                            >
                                View Code
                            </a>
                            <a
                                href="https://cheatchat.onrender.com"
                                className="text-green-400 hover:underline text-sm"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Project 4 - BlogMax */}
                    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                        <h2 className="text-xl font-semibold text-blue-400">BlogMax</h2>
                        <p className="mt-2 text-gray-300">
                            A blogging platform with user authentication, blog posting, and commenting features.
                        </p>

                        <div className="mt-3">
                            <h3 className="text-sm text-gray-400">Technologies:</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Node.js</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">MongoDB</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">Express.js</span>
                                <span className="px-2 py-1 text-xs bg-gray-700 rounded">EJS</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <a
                                href="https://github.com/sourinPal2003/blogmax"
                                className="text-blue-400 hover:underline text-sm"
                            >
                                View Code
                            </a>
                            <a
                                href="https://blogmax.onrender.com"
                                className="text-green-400 hover:underline text-sm"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
