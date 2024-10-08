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
                    <br style={{userSelect: 'none'}} />
                    <br style={{userSelect: 'none'}} />
                    <img 
                        src="/img/logo.png" 
                        alt="Space Eternity 3 - official logo" 
                        style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto', userSelect: `none` }} 
                    />
                    <br style={{userSelect: 'none'}} />
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
