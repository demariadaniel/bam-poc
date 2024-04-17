import logo from "./logo.svg";
import "./App.css";

import bamClass from "bam.iobio/client/js/class.js";

import d3 from "bam.iobio/client/js/d3.min.js";
import bamd3 from "bam.iobio/client/js/bam.d3.js";
import donut from "bam.iobio/client/js/donut.d3.js";
import histogram from "bam.iobio/client/js/histogram.d3.js";
import histogramViewFinder from "bam.iobio/client/js/histogramViewFinder.d3.js";
import iobioViz from "bam.iobio/client/js/iobio.viz.js";
import iobio from "bam.iobio/client/js/iobio.min.js";
import jquery from "bam.iobio/client/js/jquery.min.js";
import nprogress from "bam.iobio/client/js/nprogress.js";
import rdp from "bam.iobio/client/js/rdp.js";
import queue from "bam.iobio/client/js/queue.min.js";
import movingLine from "bam.iobio/client/js/movingLine.d3.js";
import socket from "bam.iobio/client/js/socket.io.js";

import build from "bam.iobio/client/dist/build.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <>
          <div id="app"></div>
          <script src={bamClass}></script>
          <script src={bamd3}></script>
          <script src={d3}></script>
          <script src={donut}></script>
          <script src={histogram}></script>
          <script src={histogramViewFinder}></script>
          <script src={iobioViz}></script>
          <script src={iobio}></script>
          <script src={jquery}></script>
          <script src={nprogress}></script>
          <script src={rdp}></script>
          <script src={queue}></script>
          <script src={movingLine}></script>
          <script src={socket}></script>
          <script src={build}></script>
        </>
      </header>
    </div>
  );
}

export default App;