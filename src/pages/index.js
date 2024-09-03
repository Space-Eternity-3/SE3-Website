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
                    content="The official page for Space Eternity 3 - Download and read about the game!"
                />
            </Head>
            <div className={styles.background}></div>
            <div className={styles.mainContent}>
                <div>
                    <img 
                        src="/img/logo.png" 
                        alt="Space Eternity 3 - official logo" 
                        style={{ width: '75%', height: 'auto', display: 'block', margin: '0 auto', userSelect: `none` }} 
                    />
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <a className={styles.contentButton} href="./testing">
                            Testing
                        </a>
                        <a className={styles.contentButton} href="./about">
                            How to play
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
