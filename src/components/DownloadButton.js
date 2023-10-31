import React from "react";

export default function DownloadButton({ text, url }) {
    return (
        <a className="download-button" href={url}>
            {text}
        </a>
    );
}
