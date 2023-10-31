import React from "react";

export default function AllServerDownloads({ versions }) {
    const BASE_URL =
        "https://github.com/Space-Eternity-3/SE3-Server/archive/refs/heads/";
    const EXTENSIONS = [".zip", ".tar.gz"];

    return (
        <table>
            <thead>
                <tr>
                    <th>Version</th>
                    <th>Download as .zip</th>
                    <th>Download as .tar.gz</th>
                </tr>
            </thead>
            <tbody>
                {versions.map((version) => (
                    <tr key={version}>
                        <td>{version}</td>
                        {EXTENSIONS.map((ext) => (
                            <td key={`${version}${ext}`}>
                                <a href={`${BASE_URL}${version}${ext}`}>
                                    SE3-Server-{version + ext}
                                </a>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
