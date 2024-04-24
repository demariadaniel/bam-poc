import { useState, useEffect } from "react";

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
import nprogress from "bam.iobio/client/js/nprogress.js";
import rdp from "bam.iobio/client/js/rdp.js";
import movingLine from "bam.iobio/client/js/movingLine.d3.js";
import socket from "bam.iobio/client/js/socket.io.js";

import build from "bam.iobio/client/dist/build.js";

const defaultBamContext = {
  pieChooser: true,
  readCoverageBox: true,
  readsSampledBox: true,
  mappedReads: true,
  forwardStrands: true,
  properPairs: true,
  singletons: true,
  bothMatesMapped: true,
  duplicates: true,
  mappingQualityDistribution: true,
};

const bamConfigPanel = (bamContext, updateContext) => {
  const {
    pieChooser,
    readCoverageBox,
    readsSampledBox,
    mappedReads,
    forwardStrands,
    properPairs,
    singletons,
    bothMatesMapped,
    duplicates,
    mappingQualityDistribution,
  } = bamContext;

  return (
    <div style={{ margin: "15px" }}>
      <button
        className={pieChooser ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("pieChooser", pieChooser);
        }}
      >
        Pie Chooser
      </button>
      <button
        className={readCoverageBox ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("readCoverageBox", readCoverageBox);
        }}
      >
        Read Coverage
      </button>
      <button
        className={readsSampledBox ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("readsSampledBox", readsSampledBox);
        }}
      >
        Reads Sampled
      </button>
      <button
        className={mappedReads ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("mappedReads", mappedReads);
        }}
      >
        Mapped Reads
      </button>
      <button
        className={forwardStrands ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("forwardStrands", forwardStrands);
        }}
      >
        Forward Strands
      </button>
      <button
        className={properPairs ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("properPairs", properPairs);
        }}
      >
        Proper Pairs
      </button>
      <button
        className={singletons ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("singletons", singletons);
        }}
      >
        Singletons
      </button>
      <button
        className={bothMatesMapped ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("bothMatesMapped", bothMatesMapped);
        }}
      >
        Both Mates Mapped
      </button>
      <button
        className={duplicates ? "config-button active" : "config-button"}
        onClick={() => {
          updateContext("duplicates", duplicates);
        }}
      >
        Duplicates
      </button>
      <button
        className={
          mappingQualityDistribution ? "config-button active" : "config-button"
        }
        onClick={() => {
          updateContext(
            "mappingQualityDistribution",
            mappingQualityDistribution
          );
        }}
      >
        Mapping Quality Distribution
      </button>
    </div>
  );
};

function App() {
  const bamUrl =
    "/?bam=https://s3.amazonaws.com/iobio/NA12878/NA12878.autsome.bam";

  const fileLoaded = Boolean(window.location.search);

  const localBamConfig = JSON.parse(localStorage.getItem("bamConfig"));

  const [bamContext, setBamContext] = useState(
    localBamConfig || defaultBamContext
  );

  const [showBam, toggleShowBam] = useState(true);

  const updateContext = (key, value) => {
    const newContext = {
      ...bamContext,
      [key]: !value,
    };
    setBamContext(newContext);
  };

  useEffect(() => {
    localStorage.setItem("bamConfig", JSON.stringify(bamContext));
  }, [bamContext]);

  return (
    <div className="App">
      <header className={`App-header ${fileLoaded ? "file-loaded" : "home"}`}>
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </>
        {fileLoaded ? (
          <a className="Back-button" href={"/"}>
            Back
          </a>
        ) : (
          <a href={bamUrl}>Demo URL</a>
        )}
      </header>

      {!fileLoaded && bamConfigPanel(bamContext, updateContext)}

      <button
        className={`config-button ${showBam && "active"}`}
        onClick={() => toggleShowBam(!showBam)}
      >
        Show / Hide BAM
      </button>

      <div className={`bam-container ${showBam && "bam-open"}`}>
        <h3 class="home-page-link">bam.iobio</h3>
        <div id="app"></div>
        <script src={bamClass}></script>
        <script src={bamd3}></script>
        <script src={d3}></script>
        <script src={donut}></script>
        <script src={histogram}></script>
        <script src={histogramViewFinder}></script>
        <script src={iobioViz}></script>
        <script src={iobio}></script>
        <script src={nprogress}></script>
        <script src={rdp}></script>
        <script src={movingLine}></script>
        <script src={socket}></script>
        <script src={build}></script>
      </div>
    </div>
  );
}

export default App;
