// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "SE3 Docs",
    tagline: "Space Eternity 3 Documentation",
    url: "https://space-eternity-3.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Space-Eternity-3", // Usually your GitHub org/user name.
    projectName: "SE3-Docs", // Usually your repo name.

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
                            label: "Beta-1.12",
                            path: "Beta-1.12",
                        },
                    },
                },
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "SE3 Documentation",
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        href: "https://github.com/Space-Eternity-3/Space-Eternity-3.github.io",
                        label: "GitHub",
                        position: "right",
                    },
                    {
                        type: "docsVersionDropdown",
                        position: "right",
                        dropdownActiveClassDisabled: true,
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
