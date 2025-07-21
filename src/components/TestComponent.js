import React from "react";

function TestComponent() {
  return (
    <div>
      <video
        title="time video"
        width="320"
        height="240"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default TestComponent;
