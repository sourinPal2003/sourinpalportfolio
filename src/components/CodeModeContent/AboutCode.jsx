export default function AboutCode() {
  return (
    <div className="text-sm leading-relaxed">
      <div className="mb-4">
        <span className="text-vscode-keyword">const</span>{" "}
        <span className="text-vscode-variable">developer</span>{" "}
        <span className="text-white">=</span>{" "}
        <span className="text-vscode-punctuation">{"{"}</span>
      </div>

      <div className="pl-6 mb-4">
        <span className="text-vscode-property">name</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-string">&quot;Sourin Pal&quot;</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-vscode-property">title</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-string">&quot;Full Stack Developer&quot;</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-vscode-property">location</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-string">&quot;Kolkata, West Bengal&quot;</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-vscode-property">bio</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-string">
          &quot;I am a Full Stack Developer specializing in the MERN stack (MongoDB,
          Express.js, React.js, Node.js), with a strong foundation in Java
          programming, Data Structures & Algorithms, and Object-Oriented
          Programming. I love coding and find fun in solving problems through
          elegant, efficient solutions. I am passionate about designing,
          developing, and deploying scalable web applications that deliver
          seamless user experiences. I consistently practice, optimize, and
          engineer robust backend logic while collaborating effectively. I am
          seeking opportunities to spearhead innovative solutions, enhance
          application performance, and contribute to impactful tech projects.&quot;
        </span>
        <span className="text-white">,</span>
      </div>

      <div className="pl-6 mb-4">
        <span className="text-vscode-property">interests</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-punctuation">[</span>
        <span className="text-vscode-string">&quot;Web Development&quot;</span>
        <span className="text-white">,</span>
        <span className="text-vscode-string">&quot;UI/UX Design&quot;</span>
        <span className="text-white">,</span>
        <span className="text-vscode-string">&quot;Open Source&quot;</span>
        <span className="text-white">,</span>
        <span className="text-vscode-string">&quot;Artificial Intelligence&quot;</span>
        <span className="text-vscode-punctuation">]</span>
        <span className="text-white">,</span>
      </div>

      <div className="pl-6 mb-4">
        <span className="text-vscode-property">introduce</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-function">function</span>
        <span className="text-vscode-punctuation">()</span>{" "}
        <span className="text-vscode-punctuation">{"{"}</span>
        <br />
        <div className="pl-6">
          <span className="text-vscode-keyword">return</span>{" "}
          
          <span className="text-vscode-string">`Hi, I’m ${"{this.name}"}, a ${"{this.title}"} based in ${"{this.location}"}. I love ${"{this.interests.join(', ')}"}.`</span>
          <span className="text-white">;</span>
        </div>
        <span className="text-vscode-punctuation">{"}"}</span>
      </div>

      <div className="text-vscode-punctuation">{"}"}</div>

      <div className="mt-6">
        <span className="text-vscode-comment">// Call the function to display introduction</span>
        <br />
        <span className="text-vscode-console">console</span>
        <span className="text-white">.</span>
        <span className="text-vscode-function">log</span>
        <span className="text-vscode-punctuation">(</span>
        <span className="text-vscode-variable">developer</span>
        <span className="text-white">.</span>
        <span className="text-vscode-function">introduce</span>
        <span className="text-vscode-punctuation">()</span>
        <span className="text-vscode-punctuation">)</span>
        <span className="text-white">;</span>
      </div>
    </div>
  );
}
