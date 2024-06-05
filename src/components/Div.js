
// const contents = document.querySelectorAll('.content');
// let currentIndex = 0;

// export default function  showNextContent() {
//     contents[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % contents.length;
//     contents[currentIndex].classList.add('active');
// }

// // Show the first content initially
// contents[currentIndex].classList.add('active');

// // Automatically switch to the next content every 3 seconds (adjust as needed)
// setInterval(showNextContent, 3000);
// ShowHideContent.js
import React, { useState, useEffect } from 'react';

const Text = () => {
  const [visibleDiv, setVisibleDiv] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleDiv((prev) => (prev === 5 ? 1 : prev + 1));
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [visibleDiv]);

  return (
    <div className="containar">
      <div className="text-4">
      <div style={{ display: visibleDiv === 0 ? 'block' : 'none' }}>
        
        </div>
        <div style={{ display: visibleDiv === 1 ? 'block' : 'none' }}>
          <h2 className="hh4" >Heading 1</h2>
          <ul>
            <li>HTML Structure: The HTML contains three </li>
            <li>elements are hidden by default. The</li>
          </ul>
        </div>
        <div style={{ display: visibleDiv === 2 ? 'block' : 'none' }}>
          <h2 className="hh4">Heading 2</h2>
          <ul>
            <li>The script selects all elements with the class </li>
            <li>class to the current element and removing it from the others</li>
          </ul>
        </div>
        <div style={{ display: visibleDiv === 3 ? 'block' : 'none' }}>
          <h2 className="hh4">Hadding 3</h2>
          <ul>
            <li> looping back to the start when the end is reached.</li>
            <li>This approach separates the styling from the component logic and makes </li>
          </ul>
        </div>
        <div style={{ display: visibleDiv === 4 ? 'block' : 'none' }}>
          <h2 className="hh4">Heading 4</h2>
          <ul>
            <li>element visible one at a time, every 3 seconds, while hiding the others.</li>
            <li> attribute uses a template string to conditionally add </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Text;

