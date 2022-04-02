import React from "react";
import Layout from "@theme/Layout";
import "./index.css";

export default function Hello() {
    return (
        <Layout title="Space Eternity 3">
            <div id="background"></div>
            <div id="main-content">
                <div className="content-container">
                    <span className="title">Space Eternity 3</span>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <a className="download-btn" href="/download">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
