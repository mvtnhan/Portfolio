import React from "react";
import "./index.scss";

export function renderHeader() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}

export function renderRightSide() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}

export function renderIntro() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}

export function renderWorks() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}

export function renderAbout() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}

export function renderContact() {
  return (
    <div className="Header">
      <div />
    </div>
  );
}
export default function Craftsman() {
  return (
    <div className="Craftsman">
      {renderHeader()}
      {renderRightSide()}
      {renderIntro()}
      {renderWorks()}
      {renderAbout()}
      {renderContact()}
    </div>
  );
}
