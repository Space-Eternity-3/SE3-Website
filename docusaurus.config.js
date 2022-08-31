// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "SE3",
    tagline: "Space Eternity 3",
    url: "https://space-eternity-3.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Space-Eternity-3", // Usually your GitHub org/user name.
    projectName: "space-eternity-3.github.io", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    lastVersion: "current",
                    versions: {
                        current: {
                            label: "Beta-1.14",
                            path: "Beta-1.14",
                        },
                        "Beta-1.13": {
                            label: "Beta-1.13",
                            path: "Beta-1.13",
                            banner: "unmaintained",
                        },
                        "Beta-1.12": {
                            label: "Beta-1.12",
                            path: "Beta-1.12",
                            banner: "unmaintained",
                        }
                    },
                },
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
            }),
        ],
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "Space Eternity 3",
                items: [
                    {
                        position: "left",
                        to: "/download",
                        label: "Download",
                    },
                    {
                        position: "left",
                        to: "/about",
                        label: "About SE3",
                    },
                    {
                        position: "left",
                        to: "/controls",
                        label: "Controls",
                    },
                    {
                        position: "left",
                        to: "/server",
                        label: "Server",
                    },
                    {
                        position: "left",
                        to: "/Documentation",
                        label: "Documentation",
                    },
                    {
                        href: "https://discord.gg/e4ppBTRKhg",
                        label: "Discord",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
