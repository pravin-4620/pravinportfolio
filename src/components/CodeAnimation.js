import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const CodeAnimation = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const codeSnippets = [
    "const developer = {",
    "  name: 'Full Stack Developer',",
    "  skills: ['React', 'Node.js', 'Python'],",
    "  passion: 'Building amazing things',",
    "  status: 'Available for projects'",
    "};",
    "",
    "console.log('Let\\'s build something great!');",
  ];

  useEffect(() => {
    if (currentLine < codeSnippets.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, codeSnippets[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="code-animation">
      <div className="code-window">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="code-title">
            <Terminal size={16} />
            <span>developer.js</span>
          </div>
        </div>
        <div className="code-body">
          <pre className="code-content">
            {lines.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{index + 1}</span>
                <span className="line-content">{line}</span>
              </div>
            ))}
            {currentLine < codeSnippets.length && (
              <div className="code-line">
                <span className="line-number">{currentLine + 1}</span>
                <span className="line-content">
                  <span className="cursor-blink">|</span>
                </span>
              </div>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeAnimation;
