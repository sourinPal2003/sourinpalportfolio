export default function ProjectsCode() {
    return (
      <div className="text-sm leading-relaxed">
        <div className="mb-4">
          <span className="text-vscode-keyword">import</span> <span className="text-vscode-variable">React</span>{" "}
          <span className="text-vscode-keyword">from</span> <span className="text-vscode-string">&apos;react&apos;</span>
          <span className="text-white">;</span>
          <br />
          <span className="text-vscode-keyword">import</span> <span className="text-vscode-punctuation">{"{"}</span>{" "}
          <span className="text-vscode-variable">ProjectCard</span> <span className="text-vscode-punctuation">{"}"}</span>{" "}
          <span className="text-vscode-keyword">from</span>{" "}
          <span className="text-vscode-string">&apos;./components/ProjectCard&apos;</span>
          <span className="text-white">;</span>
        </div>
  
        <div className="mb-4">
          <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">projects</span>{" "}
          <span className="text-white">=</span> <span className="text-vscode-punctuation">[</span>
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span>
            <br />
            <div className="pl-6">
              <span className="text-vscode-property">id</span>
              <span className="text-white">:</span> <span className="text-vscode-string">&quot;1&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">title</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;MiniSQL&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">description</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">
                &quot;A terminal-based in-memory SQL engine with custom data structures for dynamic table handling. Parsed and evaluated complex WHERE clauses using postfix logic and stack-based algorithms.&quot;
              </span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">technologies</span>
              <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
              <span className="text-vscode-string">&quot;Java&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;HashMap&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;ArrayList&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;Stack&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;Shunting Yard Algorithm&quot;</span>
              <span className="text-vscode-punctuation">]</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">github</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://github.com/sourinPal2003/MiniSQL&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">demo</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;&quot;</span>
            </div>
            <span className="text-vscode-punctuation">{"}"}</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span>
            <br />
            <div className="pl-6">
              <span className="text-vscode-property">id</span>
              <span className="text-white">:</span> <span className="text-vscode-string">&quot;2&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">title</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;Worker Manager&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">description</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">
                &quot;A task management system for workers with filter and sort options. Designed dynamic state management using React hooks and customized user views for pending, completed, and cancelled work.&quot;
              </span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">technologies</span>
              <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
              <span className="text-vscode-string">&quot;React.js&quot;</span>
              <span className="text-vscode-punctuation">]</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">github</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://github.com/sourinPal2003/workermanager&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">demo</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;&quot;</span>
            </div>
            <span className="text-vscode-punctuation">{"}"}</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span>
            <br />
            <div className="pl-6">
              <span className="text-vscode-property">id</span>
              <span className="text-white">:</span> <span className="text-vscode-string">&quot;3&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">title</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;CheatChat&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">description</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">
                &quot;A real-time chat application with messaging and file transfer features built using Node.js.&quot;
              </span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">technologies</span>
              <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
              <span className="text-vscode-string">&quot;Node.js&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;Express.js&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;Socket.io&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;EJS&quot;</span>
              <span className="text-vscode-punctuation">]</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">github</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://github.com/sourinPal2003/cheatchat&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">demo</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://cheatchat.onrender.com&quot;</span>
            </div>
            <span className="text-vscode-punctuation">{"}"}</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span>
            <br />
            <div className="pl-6">
              <span className="text-vscode-property">id</span>
              <span className="text-white">:</span> <span className="text-vscode-string">&quot;4&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">title</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;BlogMax&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">description</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">
                &quot;A blogging platform with user authentication, blog posting, and commenting features.&quot;
              </span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">technologies</span>
              <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
              <span className="text-vscode-string">&quot;Node.js&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;MongoDB&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;Express.js&quot;</span>
              <span className="text-white">,</span> <span className="text-vscode-string">&quot;EJS&quot;</span>
              <span className="text-vscode-punctuation">]</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">github</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://github.com/sourinPal2003/blogmax&quot;</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-vscode-property">demo</span>
              <span className="text-white">:</span>{" "}
              <span className="text-vscode-string">&quot;https://blogmax.onrender.com&quot;</span>
            </div>
            <span className="text-vscode-punctuation">{"}"}</span>
          </div>
          <span className="text-vscode-punctuation">]</span>
          <span className="text-white">;</span>
        </div>
  
        <div className="mb-4">
          <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">Projects</span>{" "}
          <span className="text-white">=</span> <span className="text-vscode-punctuation">()</span>{" "}
          <span className="text-vscode-operator">=&gt;</span> <span className="text-vscode-punctuation">{"{"}</span>
          <br />
          <div className="pl-6">
            <span className="text-vscode-keyword">return</span> <span className="text-vscode-punctuation">(</span>
            <br />
            <div className="pl-6">
              <span className="text-vscode-tag">&lt;div</span> <span className="text-vscode-attribute">className</span>
              <span className="text-white">=</span>
              <span className="text-vscode-string">&quot;projects-container&quot;</span>
              <span className="text-vscode-tag">&gt;</span>
              <br />
              <div className="pl-6">
                <span className="text-vscode-tag">&lt;h2</span> <span className="text-vscode-attribute">className</span>
                <span className="text-white">=</span>
                <span className="text-vscode-string">&quot;text-2xl font-bold mb-6&quot;</span>
                <span className="text-vscode-tag">&gt;</span>
                <span className="text-white">My Projects</span>
                <span className="text-vscode-tag">&lt;/h2&gt;</span>
                <br />
                <span className="text-vscode-tag">&lt;div</span> <span className="text-vscode-attribute">className</span>
                <span className="text-white">=</span>
                <span className="text-vscode-string">&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;</span>
                <span className="text-vscode-tag">&gt;</span>
                <br />
                <div className="pl-6">
                  <span className="text-vscode-punctuation">{"{"}</span>
                  <span className="text-vscode-variable">projects</span>
                  <span className="text-white">.</span>
                  <span className="text-vscode-function">map</span>
                  <span className="text-vscode-punctuation">(</span>
                  <span className="text-vscode-variable">project</span>{" "}
                  <span className="text-vscode-operator">=&gt;</span> <span className="text-vscode-punctuation">(</span>
                  <br />
                  <div className="pl-6">
                    <span className="text-vscode-tag">&lt;ProjectCard</span>
                    <br />
                    <div className="pl-6">
                      <span className="text-vscode-attribute">key</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">id</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                      <br />
                      <span className="text-vscode-attribute">title</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">title</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                      <br />
                      <span className="text-vscode-attribute">description</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">description</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                      <br />
                      <span className="text-vscode-attribute">technologies</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">technologies</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                      <br />
                      <span className="text-vscode-attribute">github</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">github</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                      <br />
                      <span className="text-vscode-attribute">demo</span>
                      <span className="text-white">=</span>
                      <span className="text-vscode-punctuation">{"{"}</span>
                      <span className="text-vscode-variable">project</span>
                      <span className="text-white">.</span>
                      <span className="text-vscode-property">demo</span>
                      <span className="text-vscode-punctuation">{"}"}</span>
                    </div>
                    <span className="text-vscode-tag">/&gt;</span>
                  </div>
                  <span className="text-vscode-punctuation">))</span>
                  <span className="text-vscode-punctuation">{"}"}</span>
                </div>
                <span className="text-vscode-tag">&lt;/div&gt;</span>
              </div>
              <span className="text-vscode-tag">&lt;/div&gt;</span>
            </div>
            <span className="text-vscode-punctuation">)</span>
            <span className="text-white">;</span>
          </div>
          <span className="text-vscode-punctuation">{"}"}</span>
          <span className="text-white">;</span>
        </div>
  
        <div className="mb-4">
          <span className="text-vscode-keyword">export</span> <span className="text-vscode-keyword">default</span>{" "}
          <span className="text-vscode-variable">Projects</span>
          <span className="text-white">;</span>
        </div>
      </div>
    )
  }
