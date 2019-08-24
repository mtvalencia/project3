import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function DateTime(props) {
  return (
    <div className="form-group">
      <input type="datetime-local" className="form-control" {...props} />
    </div>
  );
}

export function TimeZone({onChange}) {

  return (
    <form className="form-group">
      <select onChange={onChange} name="timezone">
        <option value="-0500">EST-Fall</option>
        <option value="-0400">EDT-Spring</option>
        <option value="-0600">CST-Fall</option>
        <option value="-0500">CDT-Spring</option>
        <option value="-0700">MST-Fall</option>
        <option value="-0600" selected>MDT-Spring</option>
        <option value="-0800">PST-Fall</option>
        <option value="-0700">PDT-Spring</option>
      </select>
    </form>
  );
}

export function Status({onChange}) {

  return (
    <form className="form-group">
      <select onChange={onChange} name="status">
        <option value="Active" selected>Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </form>
  );
}

export function Date(props) {
  return (
    <div className="form-group">
      <input type="date" className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-dark">
      {props.children}
    </button>
  );
}
