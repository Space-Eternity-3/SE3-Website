import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function () {
    return (
        <Layout title="Space Eternity 3">
            <div className={styles.background}></div>
            <div className={styles.mainContent}>
                <div>
                    <span className={styles.title}>Space Eternity 3</span>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <a className={styles.contentButton} href="/download">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
