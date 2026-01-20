import { motion } from 'framer-motion'
import ChromaGrid from '../components/ChromaGrid'
import { teamData } from '../data/team'

const Team = () => {
    // Transform team data for ChromaGrid
    const chromaItems = teamData.map(member => ({
        image: member.image,
        title: member.name,
        role: member.position,
        linkedin: member.social.linkedin,
        instagram: member.social.instagram,
        github: member.social.github,
        borderColor: member.borderColor,
        gradient: member.gradient
    }))

    return (
        <div className="min-h-screen pt-24">
            {/* Header */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6">
                            Meet Our Team
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            The <span className="text-gradient">Innovators</span>
                        </h1>
                        <p className="text-xl text-light/70 max-w-2xl mx-auto">
                            A dedicated team of student leaders and innovators working together
                            to build a better future through technology and entrepreneurship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="relative pb-24 px-4 md:px-8">
                <div className="max-w-[1400px] mx-auto min-h-[800px]">
                    <ChromaGrid
                        items={chromaItems}
                        radius={300}
                        columns={4}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="relative py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 border border-white/10"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Want to be part of the team?
                        </h3>
                        <p className="text-light/60 mb-8 max-w-lg mx-auto">
                            We are always looking for passionate individuals to join our community.
                            Check out open positions during our annual recruitment drive.
                        </p>
                        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                            Join Community
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Team
