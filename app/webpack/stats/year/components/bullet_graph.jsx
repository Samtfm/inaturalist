import React from "react";
import PropTypes from "prop-types";
import { scaleLinear } from "d3";

const BulletGraph = ( {
  performance,
  comparison,
  low,
  lowLabel,
  lowLabelExtra,
  medium,
  mediumLabel,
  mediumLabelExtra,
  high,
  highLabel,
  highLabelExtra,
  vertical
} ) => {
  const valueDimension = vertical ? "height" : "width";
  const scale = scaleLinear( ).domain( [0, high] ).range( ["0%", "100%"] );
  const ticks = scale.ticks( );
  return (
    <div className={`BulletGraph ${vertical ? "vertical" : ""}`}>
      <div className="high" style={{ [valueDimension]: "100%" }} title={high}>
        <div className="qual-label">{ highLabel }</div>
        <div className="qual-label-extra">{ highLabelExtra }</div>
        <div className="medium" style={{ [valueDimension]: scale( medium ) }} title={medium}>
          <div className="qual-label">{ mediumLabel }</div>
          <div className="qual-label-extra">{ mediumLabelExtra }</div>
        </div>
        <div className="low" style={{ [valueDimension]: scale( low ) }} title={low}>
          <div className="qual-label">{ lowLabel }</div>
          <div className="qual-label-extra">{ lowLabelExtra }</div>
        </div>
        <div className="comparison" style={{ [valueDimension]: scale( comparison ) }} title={comparison} />
        <div className="performance" style={{ [valueDimension]: scale( performance ) }} title={performance} />
      </div>
      <div className="ticks">
        { ticks.map( ( tick, i ) => (
          <div
            key={`bullet-graph-ticks-${tick}`}
            className={`tick ${tick === 0 ? "zero" : ""} ${i % 2 === 0 ? "even" : "odd"}`}
            style={{ [valueDimension]: scale( tick ) }}
          >
            <span>{ tick }</span>
          </div>
        ) ) }
      </div>
    </div>
  );
};

BulletGraph.propTypes = {
  performance: PropTypes.number,
  comparison: PropTypes.number,
  low: PropTypes.number,
  lowLabel: PropTypes.string,
  lowLabelExtra: PropTypes.string,
  medium: PropTypes.number,
  mediumLabel: PropTypes.string,
  mediumLabelExtra: PropTypes.string,
  high: PropTypes.number,
  highLabel: PropTypes.string,
  highLabelExtra: PropTypes.string,
  vertical: PropTypes.bool
};

export default BulletGraph;
