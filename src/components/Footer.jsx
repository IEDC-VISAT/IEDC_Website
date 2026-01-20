import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
    const footerLinks = {
        quickLinks: [
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Events', path: '/events' },
            { name: 'Team', path: '/team' },
            { name: 'Contact', path: '/contact' },
        ],
    }

    const socialLinks = [
        { name: 'LinkedIn', icon: 'i-lucide-linkedin', url: 'https://www.linkedin.com/company/iedc-visat/posts/?feedView=all' },
        { name: 'Instagram', icon: 'i-lucide-instagram', url: 'https://www.instagram.com/iedc_visat/' },
    ]

    return (
        <footer className="relative bg-dark/80 backdrop-blur-lg overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            {/* Main Footer */}
            <div className="relative border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="inline-flex items-center gap-3 mb-6">
                                <img
                                    src="/logo.png"
                                    alt="IEDC VISAT"
                                    className="w-14 h-14 rounded-full object-cover shadow-lg"
                                />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-2xl">IEDC</span>
                                    <span className="text-light/50 text-sm">VISAT</span>
                                </div>
                            </Link>
                            <p className="text-light/60 text-sm leading-relaxed mb-6">
                                Empowering students to innovate, create, and lead. Building the next generation of entrepreneurs and problem solvers.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-light/60 hover:text-accent hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                                    >
                                        <span className={`${social.icon} text-lg`} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {footerLinks.quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-light/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="i-lucide-chevron-right text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>



                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="i-lucide-map-pin text-primary mt-1" />
                                    <span className="text-light/60 text-sm">
                                        IEDC ROOM ,VISAT ENGINNERING COLLEGE<br />
                                        ELANJI , KOCHI
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="i-lucide-mail text-primary" />
                                    <a href="mailto:iedcvisat25@gmail.com" className="text-light/60 text-sm hover:text-accent transition-colors">
                                        iedcvisat25@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-light/40 text-sm text-center md:text-left">
                                © 2026 IEDC - Innovation and Entrepreneurship Development Cell. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="#" className="text-light/40 text-sm hover:text-accent transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-light/40 text-sm hover:text-accent transition-colors">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
