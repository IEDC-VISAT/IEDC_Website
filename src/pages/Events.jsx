import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { upcomingEvents, pastEvents } from '../data/events'
import TiltedCard from '../components/TiltedCard'

const Events = () => {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <div className="min-h-screen pt-24">
            {/* Header */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl transform-gpu" />
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl transform-gpu" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
                            What's Happening
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            IEDC <span className="text-gradient">Events</span>
                        </h1>
                        <p className="text-xl text-light/70 max-w-2xl mx-auto">
                            Discover workshops, hackathons, networking sessions, and more.
                            Join us in shaping the future of innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {upcomingEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden p-6 hover:border-primary/30 transition-all duration-300 transform-gpu"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    {/* Tilted Card Image */}
                                    <div className="flex-shrink-0">
                                        <TiltedCard
                                            imageSrc={event.image}
                                            altText={event.title}
                                            captionText={event.title}
                                            containerHeight="220px"
                                            containerWidth="220px"
                                            imageHeight="220px"
                                            imageWidth="220px"
                                            rotateAmplitude={10}
                                            scaleOnHover={1.05}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <div className={`w-full h-full flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 to-transparent rounded-[15px]`}>
                                                    {event.status === 'coming-soon' ? (
                                                        <span className="text-accent font-bold text-sm">Coming Soon</span>
                                                    ) : (
                                                        <span className="text-white font-semibold text-xs">{formatDate(event.date)}</span>
                                                    )}
                                                </div>
                                            }
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                            {event.title}
                                        </h3>

                                        <div className="text-sm text-light/50 mb-3 space-y-1">
                                            {event.status !== 'coming-soon' && (
                                                <>
                                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                                        <span className="i-lucide-clock text-primary" />
                                                        {event.time}
                                                    </div>
                                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                                        <span className="i-lucide-map-pin text-primary" />
                                                        {event.location}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <p className="text-light/60 text-sm leading-relaxed mb-6">
                                            {event.description}
                                        </p>

                                        <button
                                            className={`w-full md:w-auto px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${event.status === 'coming-soon'
                                                ? 'bg-white/10 text-light/50 cursor-not-allowed border border-white/20'
                                                : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
                                                }`}
                                            disabled={event.status === 'coming-soon'}
                                        >
                                            {event.status === 'coming-soon' ? 'Stay Tuned' : 'Register Now'}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Past Events */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gradient">Past Events</h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {pastEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                className="flex flex-col items-center"
                            >
                                <div className="mb-4">
                                    <TiltedCard
                                        imageSrc={event.image}
                                        altText={event.title}
                                        captionText={event.title}
                                        containerHeight="280px"
                                        containerWidth="280px"
                                        imageHeight="280px"
                                        imageWidth="280px"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.05}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        overlayContent={
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-[15px]">
                                                <span className="px-4 py-2 bg-primary/90 rounded-full text-white text-xs font-bold backdrop-blur transform-gpu">
                                                    Completed
                                                </span>
                                            </div>
                                        }
                                    />
                                </div>

                                <div className="text-center max-w-xs">
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-light/50 text-sm line-clamp-2 mb-4">
                                        {event.description}
                                    </p>
                                    {event.gallery && (
                                        <Link
                                            to={event.gallery}
                                            className="text-primary text-sm font-semibold hover:text-accent transition-colors underline underline-offset-4"
                                        >
                                            View Gallery
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 border border-white/10"
                    >
                        <span className="i-lucide-bell text-4xl text-accent mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Never Miss an Event
                        </h3>
                        <p className="text-light/60 mb-8 max-w-lg mx-auto">
                            Subscribe to our newsletter and get notified about upcoming events,
                            workshops, and opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-light/40 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Events
