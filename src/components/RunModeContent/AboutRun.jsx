export default function AboutRun() {
    return (
        <>
            <div className="preview-content p-6">
                <div className="flex items-center mb-4">
                    <img 
                        src="https://avatars.githubusercontent.com/u/136143819" 
                        alt="Sourin Pal"
                        className="w-20 h-20 rounded-full mr-4 shadow-lg"
                    />
                    <div>
                        <h1 className="text-3xl text-blue-400 font-bold">Sourin Pal</h1>
                        <h2 className="text-xl text-gray-400">Full Stack Developer</h2>
                    </div>
                </div>

                <p className="mb-4">
                    I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), with a strong foundation in Java programming, Data Structures & Algorithms, and Object-Oriented Programming. I love coding and find fun in solving problems through elegant, efficient solutions. I am passionate about designing, developing, and deploying scalable web applications that deliver seamless user experiences. I consistently practice, optimize, and engineer robust backend logic while collaborating effectively. I am seeking opportunities to spearhead innovative solutions, enhance application performance, and contribute to impactful tech projects.
                </p>

                <p className="mb-4">
                    I enjoy building projects that solve real-world problems and improving my skills in DSA, backend, and AI.
                </p>

                <div className="mt-4">
                    <h3 className="text-lg text-green-400 font-semibold mb-2">Interests</h3>
                    <ul className="list-disc pl-5">
                        <li>Backend Development</li>
                        <li>AI-Powered Applications</li>
                        <li>System Design</li>
                        <li>Competitive Programming</li>
                        <li>Technical Blogging</li>
                        <li>Open Source Contribution</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
