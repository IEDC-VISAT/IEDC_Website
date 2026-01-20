import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        // TODO: Replace these with your actual EmailJS credentials
        // Get these from https://dashboard.emailjs.com/
        const serviceId = 'service_jx9j2zs'
        const templateId = 'template_qkkaq8a'
        const publicKey = 'QT-dprDN-Z6BsXDrM'

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text)
                setIsSubmitted(true)
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 3000)
            }, (error) => {
                console.log(error.text)
                alert("Failed to send message. Please try again.")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const contactInfo = [
        {
            icon: 'i-lucide-mail',
            title: 'Email Us',
            content: 'iedcvisat25@gmail.com',
            link: 'mailto:iedcvisat25@gmail.com',
        },
        {
            icon: 'i-lucide-map-pin',
            title: 'Visit Us',
            content: 'IEDC ROOM ,VISAT ENGINNERING COLLEGE ,ELANJI , KOCHI',
            link: '#',
        },
    ]

    const socialLinks = [
        { name: 'LinkedIn', icon: 'i-lucide-linkedin', url: 'https://www.linkedin.com/company/iedc-visat/posts/?feedView=all', color: 'hover:bg-blue-600' },
        { name: 'Instagram', icon: 'i-lucide-instagram', url: 'https://www.instagram.com/iedc_visat/', color: 'hover:bg-pink-600' },
    ]

    return (
        <div className="min-h-screen pt-24">
            {/* Header */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Contact <span className="text-gradient">Us</span>
                        </h1>
                        <p className="text-xl text-light/70 max-w-2xl mx-auto">
                            Have a question or want to collaborate? We'd love to hear from you.
                            Reach out and let's create something amazing together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Send us a Message</h2>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-light/80 font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-light/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-light/80 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-light/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-light/80 font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-light/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitted || isLoading}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isSubmitted
                                        ? 'bg-secondary text-white'
                                        : isLoading
                                            ? 'bg-white/10 text-light/50 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
                                        }`}
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="i-lucide-check-circle" />
                                            Message Sent!
                                        </span>
                                    ) : isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="i-lucide-loader-2 animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <span className="i-lucide-send" />
                                        </span>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Contact Information</h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                                            <span className={`${info.icon} text-white text-xl`} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                                            <p className="text-light/60">{info.content}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-light/70 hover:text-white hover:border-transparent ${social.color} transition-all duration-300`}
                                        >
                                            <span className={`${social.icon} text-xl`} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Office Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border border-white/10"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="i-lucide-clock text-primary text-xl" />
                                    <h3 className="text-white font-semibold text-lg">Office Hours</h3>
                                </div>
                                <div className="space-y-2 text-light/60">
                                    <p className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-white">9:00 AM - 6:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-white">10:00 AM - 4:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-accent">Closed</span>
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-80 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.0785080719334!2d76.5539613590105!3d9.851265785673455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07da2c8a8e8271%3A0x8e1ab4fa9ba5b0be!2sVISAT%20Group%20of%20Institutions%2C%20Piravom%2C%20Ernakulam!5e0!3m2!1sen!2sin!4v1768924020950!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact
