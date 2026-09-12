type SocialNetwork = 'facebook' | 'instagram';

const socialLinks: Array<{
    name: string;
    type: SocialNetwork;
    href: string;
}> = [
    {
        name: 'Facebook',
        type: 'facebook',
        href: 'https://www.facebook.com/',
    },
    {
        name: 'Instagram',
        type: 'instagram',
        href: 'https://www.instagram.com/',
    },
];

function SocialIcon({ type }: { type: SocialNetwork }) {
    if (type === 'facebook') {
        return (
            <svg
                className="pp-social-icon pp-social-facebook"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M14.2 8.4V6.7c0-.8.5-1 1-1h2.6V2.1L15.1 2c-3.4 0-5.5 2-5.5 5.6v.8H6.7v4h2.9V22h4.6v-9.6h3.2l.5-4h-3.7Z" />
            </svg>
        );
    }

    return (
        <svg
            className="pp-social-icon pp-social-instagram"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.7" r="1" className="pp-social-dot" />
        </svg>
    );
}

export function SocialRail() {
    return (
        <aside
            className="pp-social-rail"
            aria-label="Síguenos en redes sociales"
        >
            {socialLinks.map((social) => (
                <div className="pp-social-slot" key={social.name}>
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visitar ${social.name}`}
                        title={social.name}
                    >
                        <SocialIcon type={social.type} />
                        <span>{social.name}</span>
                    </a>
                </div>
            ))}
        </aside>
    );
}
