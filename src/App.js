import React from "react";
import ThreeDotsWave from "./ThreeDotsWave";
import BouncingBall from "./BouncingBall";

function App() {
  return (
    <div className="container">
      
      <Grid>
        <ThreeDotsWave />
      </Grid>
      {/* <BouncingBall /> */}
      {/* <ThreeDotsWave /> */}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  });
}



export default App;
