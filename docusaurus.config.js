// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.vsDark;

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
                            label: "Beta-2.1",
                            path: "Beta-2.1",
                        },
                        "Beta-2.0": {
                            label: "Beta-2.0",
                            path: "Beta-2.0",
                            banner: "unmaintained",
                        },
                        "Beta-1.15": {
                            label: "Beta-1.15",
                            path: "Beta-1.15",
                            banner: "unmaintained",
                        },
                        "Beta-1.14": {
                            label: "Beta-1.14",
                            path: "Beta-1.14",
                            banner: "unmaintained",
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
                        },
                    },
                },
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
                blog: {
                    blogSidebarTitle: "All posts",
                    blogSidebarCount: "ALL",
                },
            }),
        ],
    ],

    themes: [
        [
            // @ts-ignore
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            // @ts-ignore
            ({
                hashed: true,
            }),
        ],
    ],

    markdown: {
        format: "detect",
    },

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
                        label: "How to play",
                    },
                    {
                        position: "left",
                        to: "/server",
                        label: "Server",
                    },
                    {
                        position: "left",
                        to: "/documentation",
                        label: "Documentation",
                    },
                    {
                        href: "https://discord.gg/e4ppBTRKhg",
                        label: "Discord",
                        position: "right",
                    },
                    {
                        to: "blog",
                        label: "Blog",
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
