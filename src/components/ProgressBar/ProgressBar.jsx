import React from "react";
import Icon from "@ied/icon";

import { Container, Step, Bar, Circle } from "./Styled.js";
import "./ProgressBar.css";

// https://ant.design/components/steps/

const noob = [
  { level: 1, finished: true },
  { level: 2, finished: true },
  { level: 3, finished: false }
];
const ProgressBar=()=> {
  return (
    <div className="progress1">
      <Container>
        {noob.map((s, index) => (
          <Step>
            {index !== 0 && <Bar completed={s.finished} />}
            <Circle completed={s.finished} delay={index !== 0} style={{borderRadius:"40px"}}>
              <Icon className="icon">check</Icon>
            </Circle>
          </Step>
        ))}
      </Container>
    </div>
  );
}

export default ProgressBar
