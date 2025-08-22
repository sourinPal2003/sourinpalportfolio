export default function EducationCode() {
  return (
    <div className="text-sm leading-relaxed font-mono">
      <div>
        <span className="text-vscode-keyword">public class</span>{" "}
        <span className="text-vscode-class">Education</span> {"{"}
      </div>
      <div className="pl-6">
        <div>
          <span className="text-vscode-keyword">public static void</span>{" "}
          <span className="text-vscode-method">main</span>
          <span className="text-vscode-plain">(</span>
          <span className="text-vscode-class">String</span>
          <span className="text-vscode-plain">[] args)</span>{" "}
          {"{"}
        </div>
        <div className="pl-6">
          {/* B.Tech */}
          <div>
            <span className="text-vscode-comment">// B.Tech in Computer Science and Engineering</span>
          </div>
          <div>
            <span className="text-vscode-class">String</span>{" "}
            <span className="text-vscode-variable">degree</span> ={" "}
            <span className="text-vscode-string">
              "B.Tech in Computer Science and Engineering"
            </span>;
          </div>
          <div>
            <span className="text-vscode-class">String</span>{" "}
            <span className="text-vscode-variable">college</span> ={" "}
            <span className="text-vscode-string">
              "Netaji Subhash Engineering College, Kolkata"
            </span>;
          </div>
          <div>
            <span className="text-vscode-class">int</span>{" "}
            <span className="text-vscode-variable">graduationYear</span> ={" "}
            <span className="text-vscode-number">2026</span>;{" "}
            <span className="text-vscode-comment">// Expected</span>
          </div>
          <div>
            <span className="text-vscode-class">double</span>{" "}
            <span className="text-vscode-variable">cgpa</span> ={" "}
            <span className="text-vscode-number">8.29</span>;{" "}
            <span className="text-vscode-comment">// Till now</span>
          </div>
          <div>
            <span className="text-vscode-class">String[]</span>{" "}
            <span className="text-vscode-variable">coursework</span> = {"{"}
            <span className="text-vscode-string">"Data Structures and Algorithms"</span>,{" "}
            <span className="text-vscode-string">"Object-Oriented Programming"</span>,{" "}
            <span className="text-vscode-string">"Database Management Systems"</span>,{" "}
            <span className="text-vscode-string">"Operating Systems"</span>
            {"}"};
          </div>
          <div>
            <span className="text-vscode-class">String[]</span>{" "}
            <span className="text-vscode-variable">activities</span> = {"{"}
            <span className="text-vscode-string">"Coding Club"</span>,{" "}
            <span className="text-vscode-string">"Technical Society"</span>,{" "}
            <span className="text-vscode-string">"Sports Club"</span>
            {"}"};
          </div>
          <br />

          {/* Higher Secondary */}
          <div>
            <span className="text-vscode-comment">// Higher Secondary Education (Class XII)</span>
          </div>
          <div>
            <span className="text-vscode-class">String</span>{" "}
            <span className="text-vscode-variable">hsSchool</span> ={" "}
            <span className="text-vscode-string">"Bishnupur High School"</span>;
          </div>
          <div>
            <span className="text-vscode-class">int</span>{" "}
            <span className="text-vscode-variable">hsYear</span> ={" "}
            <span className="text-vscode-number">2022</span>;
          </div>
          <div>
            <span className="text-vscode-class">double</span>{" "}
            <span className="text-vscode-variable">hsScore</span> ={" "}
            <span className="text-vscode-number">92.4</span>;{" "}
            <span className="text-vscode-comment">// 462/500</span>
          </div>
          <div>
            <span className="text-vscode-class">String[]</span>{" "}
            <span className="text-vscode-variable">hsSubjects</span> = {"{"}
            <span className="text-vscode-string">"Physics"</span>,{" "}
            <span className="text-vscode-string">"Chemistry"</span>,{" "}
            <span className="text-vscode-string">"Mathematics"</span>,{" "}
            <span className="text-vscode-string">"Biology"</span>,{" "}
            <span className="text-vscode-string">"Bengali"</span>,{" "}
            <span className="text-vscode-string">"English"</span>
            {"}"};
          </div>
          <br />

          {/* Secondary */}
          <div>
            <span className="text-vscode-comment">// Secondary Education (Class X)</span>
          </div>
          <div>
            <span className="text-vscode-class">String</span>{" "}
            <span className="text-vscode-variable">secondarySchool</span> ={" "}
            <span className="text-vscode-string">"Radhanagar High School"</span>;
          </div>
          <div>
            <span className="text-vscode-class">int</span>{" "}
            <span className="text-vscode-variable">secondaryYear</span> ={" "}
            <span className="text-vscode-number">2020</span>;
          </div>
          <div>
            <span className="text-vscode-class">double</span>{" "}
            <span className="text-vscode-variable">secondaryScore</span> ={" "}
            <span className="text-vscode-number">89.86</span>;{" "}
            <span className="text-vscode-comment">// 629/700</span>
          </div>
          <div>
            <span className="text-vscode-class">String[]</span>{" "}
            <span className="text-vscode-variable">secondarySubjects</span> = {"{"}
            <span className="text-vscode-string">"Bengali"</span>,{" "}
            <span className="text-vscode-string">"English"</span>,{" "}
            <span className="text-vscode-string">"Mathematics"</span>,{" "}
            <span className="text-vscode-string">"History"</span>,{" "}
            <span className="text-vscode-string">"Geography"</span>,{" "}
            <span className="text-vscode-string">"Physical Science"</span>,{" "}
            <span className="text-vscode-string">"Life Science"</span>
            {"}"};
          </div>
        </div>
        <div>{"}"}</div>
      </div>
      <div>{"}"}</div>
    </div>
  );
}
