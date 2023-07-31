import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";
export default function () {
    return (
        <Layout title="Space Eternity 3">
            <Head>
                <meta
                    name="description"
                    content="Space Eternity 3 - A PC game created by Kamiloso in Unity. Visit our universe and explore the infinite area full of asteroids and other interesting stuff! There are so many things to discover!"
                />
            </Head>
            <div className={styles.background}></div>
            <div className={styles.mainContent}>
                <div>
                    <span className={styles.title}>Space Eternity 3</span>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <a className={styles.contentButton} href="/download">
                            Download
                        </a>
                        <a className={styles.contentButton} href="/about">
                            How to play
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
