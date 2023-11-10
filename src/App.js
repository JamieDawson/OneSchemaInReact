import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import OneSchemaImporter from "@oneschema/react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [oneSchemaMessage, setOneSchemaMessage] = useState("");

  const onLaunched = (data) => {
    // TODO handle launch
    setOneSchemaMessage("Launched");
  };

  const onSuccess = (data) => {
    // TODO handle success

    setOneSchemaMessage("Your CSV file was imported!");
  };

  const onCancel = () => {
    setOneSchemaMessage("You canceled your import");
  };

  const onError = (message) => {
    // TODO handle error
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Import</button>
      <div>{oneSchemaMessage}</div>

      <OneSchemaImporter
        /* managing state from your application */
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        /* required config values */
        clientId={process.env.REACT_APP_CLIENT_ID}
        userJwt={process.env.REACT_APP_JWT}
        templateKey="example_contacts"
        /* optional config values */
        importConfig={{ type: "local" }}
        devMode={true}
        className="oneschema-importer"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
        }}
        /* handling results */
        onLaunched={onLaunched}
        onSuccess={onSuccess}
        onCancel={onCancel}
        onError={onError}
      />
    </div>
  );
}

export default App;
