import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

const Home = () => {
    const aboutCards = [
        {
            icon: 'i-lucide-lightbulb',
            title: 'What is IEDC?',
            description: 'The Innovation and Entrepreneurship Development Cell (IEDC) is a dynamic platform designed to foster innovation, creativity, and entrepreneurial thinking among students. We provide the ecosystem needed to transform innovative ideas into successful ventures.',
            gradient: 'from-primary to-blue-600',
        },
        {
            icon: 'i-lucide-target',
            title: 'Our Mission',
            description: 'To empower students with the skills, resources, and mindset needed to become successful entrepreneurs. We bridge the gap between academic learning and real-world business challenges through hands-on experiences.',
            gradient: 'from-secondary to-emerald-500',
        },
        {
            icon: 'i-lucide-users',
            title: 'Mentorship Network',
            description: 'Connect with industry experts, successful entrepreneurs, and experienced faculty who guide you through every step of your entrepreneurial journey. Our mentors have helped launch over 20 startups.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: 'i-lucide-rocket',
            title: 'Startup Support',
            description: 'Get funding guidance, incubation support, and connections to investors. We provide workspace, prototyping labs, and access to a network of angel investors and venture capitalists.',
            gradient: 'from-accent to-orange-500',
        },
        {
            icon: 'i-lucide-trophy',
            title: 'Competitions & Events',
            description: 'Participate in hackathons, pitch competitions, innovation challenges, and workshops. These events help you build skills, network with peers, and showcase your ideas to the world.',
            gradient: 'from-rose-500 to-red-600',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background - Transparent for glass effect */}
                <div className="absolute inset-0">
                    {/* Subtle gradient overlay instead of solid dark */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/10 to-dark/50" />
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Grid Pattern - lighter */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23ffffff10'%3e%3cpath d='m0 .5h32m-.5 0v32'/%3e%3c/svg%3e")`,
                        backgroundSize: '32px 32px',
                    }} />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-light/80 text-sm mb-8 shadow-lg shadow-black/20">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            Welcome to IEDC
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-md">
                            Innovate.
                        </span>
                        <br />
                        <span className="text-white drop-shadow-lg">Inspire. Ignite.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto mb-12 drop-shadow-md"
                    >
                        Empowering the next generation of entrepreneurs and innovators.
                        Transform your ideas into impactful ventures with IEDC.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/events"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                        >
                            Explore Events
                        </Link>
                        <Link
                            to="/gallery"
                            className="px-8 py-4 rounded-xl bg-white/5 border-2 border-white/20 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                        >
                            View Gallery
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(51,255,255,0.8)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About IEDC Section with ScrollStack */}
            <section className="relative overflow-hidden">
                {/* Background Decorations - Integrated with glass feel */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                {/* Section Header */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary font-semibold text-sm mb-6 shadow-lg">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                            Discover <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">IEDC</span>
                        </h2>
                        <p className="text-xl text-light/70 max-w-2xl mx-auto drop-shadow">
                            Scroll down to explore what makes us the leading innovation hub
                        </p>
                    </motion.div>
                </div>

                {/* ScrollStack Cards */}
                <div className="relative max-w-4xl mx-auto px-4 md:px-8">
                    <ScrollStack
                        itemDistance={150}
                        itemScale={0.02}
                        itemStackDistance={20}
                        stackPosition="30%"
                        scaleEndPosition="20%"
                        baseScale={0.92}
                        blurAmount={2}
                        smoothness={0.08}
                    >
                        {aboutCards.map((card, index) => (
                            <ScrollStackItem key={card.title}>
                                <div className="flex flex-col h-full relative z-10">
                                    {/* Icon Badge */}
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                                        <span className={`${card.icon} text-white text-2xl md:text-3xl`} />
                                    </div>

                                    {/* Card Number */}
                                    <div className="absolute top-6 right-6 md:top-8 md:right-8 text-6xl md:text-8xl font-bold text-white/5 z-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md z-10">
                                        {card.title}
                                    </h3>
                                    <p className="text-light/80 text-base md:text-lg leading-relaxed flex-1 z-10 font-medium">
                                        {card.description}
                                    </p>

                                    {/* Bottom Accent Line */}
                                    <div className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r ${card.gradient} shadow-[0_0_10px_rgba(0,0,0,0.3)]`} />
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </section>

            {/* Project Highlights Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-sm">
                            Project Highlights
                        </h2>
                    </motion.div>

                    {/* Project Cards Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {/* DIY Projects Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden glass shadow-xl"
                        >
                            {/* Neon Border Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-full h-full rounded-2xl bg-dark/40 backdrop-blur-xl" />
                            </div>

                            <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl h-full border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                                {/* Image */}
                                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-colors duration-300 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
                                        alt="DIY Projects"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-primary transition-colors duration-300">DIY Projects</h3>
                                <p className="text-light/70 text-sm text-center leading-relaxed">
                                    IEDC DIY Projects foster hands-on innovation by encouraging students to build, experiment, and solve real-world problems. These projects ignite creativity and transform ideas into impactful solutions through a maker-driven approach.
                                </p>
                            </div>
                        </motion.div>

                        {/* Solar-Based AUTO Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden glass shadow-xl"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-accent to-secondary p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-full h-full rounded-2xl bg-dark/40 backdrop-blur-xl" />
                            </div>

                            <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl h-full border border-white/10 group-hover:border-secondary/50 transition-colors duration-300">
                                {/* Image */}
                                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-secondary/50 transition-colors duration-300 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                                        alt="Solar-Based AUTO"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-secondary transition-colors duration-300">Solar-Based AUTO</h3>
                                <p className="text-light/70 text-sm text-center leading-relaxed">
                                    The Solar-Based Auto by Sonu Sunil and it's is an eco-friendly Auto powered entirely by solar energy and built from scratch promoting sustainable mobility. It showcases innovative engineering aimed at reducing carbon footprint and enhancing energy efficiency.
                                </p>
                            </div>
                        </motion.div>

                        {/* IEDC ROBOT Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden glass shadow-xl"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-primary to-accent p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-full h-full rounded-2xl bg-dark/40 backdrop-blur-xl" />
                            </div>

                            <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl h-full border border-white/10 group-hover:border-accent/50 transition-colors duration-300">
                                {/* Image */}
                                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-accent/50 transition-colors duration-300 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
                                        alt="IEDC ROBOT"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-accent transition-colors duration-300">IEDC ROBOT</h3>
                                <p className="text-light/70 text-sm text-center leading-relaxed">
                                    The upcoming IEDC humanoid robot leverages RAG architecture with LLMs and advanced NLP to enable natural, context-aware conversations. It's designed to simulate human interaction and dynamically retrieve accurate responses in real time.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/5 backdrop-blur-sm" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />

                <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-light/80 mb-10 max-w-2xl mx-auto font-medium">
                            Join hundreds of students who are turning their ideas into reality.
                            Your innovation journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded-xl bg-accent text-dark font-bold text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                Join IEDC Today
                            </Link>
                            <Link
                                to="/events"
                                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Upcoming Events
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
