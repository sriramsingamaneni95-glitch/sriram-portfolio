
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [motion, setMotion] = useState(true);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const closeMenu = () => setMenuOpen(false);

    const toggleMotion = () => {
        const newMotion = !motion;
        setMotion(newMotion);
        document.documentElement.dataset.motion =
            newMotion ? 'on' : 'off';
    };

    return (
        <header className="navbar">

            <a href="#home" className="nav-logo" onClick={closeMenu}>
                Sriram <span>Singamaneni.</span>
            </a>

            <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            <div className="nav-actions">
                <button
                    className="motion-btn"
                    onClick={toggleMotion}
                >
                    <span className={motion ? 'motion-dot on' : 'motion-dot'} />
                    Motion {motion ? 'ON' : 'OFF'}
                </button>

                <a
                    href="#contact"
                    className="talk-btn"
                    onClick={closeMenu}
                >
                    LET'S TALK ↗
                </a>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

        </header>
    );
}

export default Navbar;
