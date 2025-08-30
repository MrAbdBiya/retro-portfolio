
import React from 'react';
import Terminal from './components/Terminal';

function App() {
  return (
    <div>
      <img src="/photo.png" alt="Moi" />
    </div>

    <div className="relative min-h-screen w-full bg-black text-green-400 font-mono text-lg p-4 overflow-hidden">
      {/* CRT Scanline Effect Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABNJREFUGFdjZGBg+M+ABYwKAgACKgAB220fFQAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
      
      {/* Vignette Effect Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient-at-center from-transparent to-black opacity-60 pointer-events-none"></div>
      
      <main className="relative z-10 w-full h-full">
        <Terminal />
      </main>
    </div>
  );
}

// Custom Tailwind utility for radial gradient
const style = document.createElement('style');
style.innerHTML = `
  .bg-radial-gradient-at-center {
    background-image: radial-gradient(ellipse at center, transparent 30%, black 100%);
  }
`;
document.head.appendChild(style);


export default App;
