import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div style={{ padding: 24, color: "whitesmoke" }}>
      <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>404</div>
      <div style={{ marginBottom: 16 }}>That page doesn’t exist.</div>
      <Link to="/" className="nav-item" style={{ display: "inline-flex", minHeight: 44 }}>
        Back home
      </Link>
    </div>
  );
}
