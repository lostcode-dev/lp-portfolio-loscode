// src/navbarLinks.js

export const navbarLinksLeft = [
    {
        label: 'home',
        href: '#home_section',
        class: 'navbar__link'
    },
    {
        label: 'who_am_i',
        href: '#about_section',
        class: 'navbar__link'
    },
    {
        label: 'what_do_i_do',
        href: '#what_do_i_do_section',
        class: 'navbar__link'
    }
];

export const navbarLinksRight = [
    {
        label: 'portfolio',
        href: '#home_section',
        class: 'navbar__link'
    },
    {
        label: 'article',
        href: '#article_section',
        class: 'navbar__link'
    },
    {
        label: 'contact_us',
        href: '#talk_with_us_section',
        class: 'navbar__link'
    }
];

export const menuLinks = [
    ...navbarLinksLeft.map(link => ({ ...link, class: 'menu__link' })),
    ...navbarLinksRight.map(link => ({ ...link, class: 'menu__link' }))
]
