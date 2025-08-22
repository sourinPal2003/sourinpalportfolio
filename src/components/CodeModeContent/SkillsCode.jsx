export default function SkillsCode() {
  return (
    <div className="text-sm leading-relaxed">
      <div className="mb-4">
        <span className="text-vscode-punctuation">{"{"}</span>
      </div>

      <div className="pl-6 mb-4">
        <span className="text-vscode-property">&quot;name&quot;</span>
        <span className="text-white">:</span> <span className="text-vscode-string">&quot;Sourin Pal&quot;</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-vscode-property">&quot;title&quot;</span>
        <span className="text-white">:</span>{" "}
        <span className="text-vscode-string">&quot;Full Stack Developer&quot;</span>
        <span className="text-white">,</span>
      </div>

      <div className="pl-6 mb-4">
        <span className="text-vscode-property">&quot;skills&quot;</span>
        <span className="text-white">:</span> <span className="text-vscode-punctuation">{"{"}</span>
        <br />

        {/* Languages */}
        <div className="pl-6 mb-2">
          <span className="text-vscode-property">&quot;languages&quot;</span>
          <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
          <br />
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;Core Java&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">90</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />
            
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;JavaScript&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">85</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />
            
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;HTML&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">95</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />
            
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;CSS&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">90</span> <span className="text-vscode-punctuation">{"}"}</span>
          </div>
          <span className="text-vscode-punctuation">]</span>,
        </div>

        {/* Frameworks */}
        <div className="pl-6 mb-2">
          <span className="text-vscode-property">&quot;frameworks&quot;</span>
          <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
          <br />
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;Express.js&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">85</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />

            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;React.js&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">90</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />

            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;Node.js&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">85</span> <span className="text-vscode-punctuation">{"}"}</span>
          </div>
          <span className="text-vscode-punctuation">]</span>,
        </div>

        {/* Database */}
        <div className="pl-6 mb-2">
          <span className="text-vscode-property">&quot;database&quot;</span>
          <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
          <br />
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;MongoDB&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">80</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />

            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;MySQL&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">85</span> <span className="text-vscode-punctuation">{"}"}</span>
          </div>
          <span className="text-vscode-punctuation">]</span>,
        </div>

        {/* Tools */}
        <div className="pl-6 mb-2">
          <span className="text-vscode-property">&quot;tools&quot;</span>
          <span className="text-white">:</span> <span className="text-vscode-punctuation">[</span>
          <br />
          <div className="pl-6">
            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;Git&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">90</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />

            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;VS Code&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">95</span> <span className="text-vscode-punctuation">{"}"}</span>,<br />

            <span className="text-vscode-punctuation">{"{"}</span> 
            <span className="text-vscode-property">&quot;name&quot;</span>: <span className="text-vscode-string">&quot;Postman&quot;</span>, 
            <span className="text-vscode-property"> &quot;level&quot;</span>: <span className="text-vscode-number">85</span> <span className="text-vscode-punctuation">{"}"}</span>
          </div>
          <span className="text-vscode-punctuation">]</span>
        </div>

        <span className="text-vscode-punctuation">{"}"}</span>
        <span className="text-white">,</span>
      </div>

      <div className="text-vscode-punctuation">{"}"}</div>
    </div>
  )
}
