import { motion } from 'framer-motion'
import Masonry from '../components/Masonry'

const Gallery = () => {
    // Gallery items with varying heights for masonry effect
    const galleryItems = [
        // Power Talk Images
        {
            id: "pt1",
            img: "/gallery/power_talk_glimpse_1.jpg",
            title: "Power Talk Session",
            height: 450,
        },
        {
            id: "pt2",
            img: "/gallery/power_talk_glimpse_2.jpg",
            title: "Power Talk Discussion",
            height: 400,
        },
        // AGM Images
        {
            id: "agm1",
            img: "/gallery/AGM/AGM.jpg",
            title: "Annual General Meeting",
            height: 520,
        },
        {
            id: "agm2",
            img: "/gallery/AGM/1.jpg",
            title: "AGM Session",
            height: 400,
        },
        // IEDathon Images
        {
            id: "ied1",
            img: "/gallery/iedathon/1.jpg",
            title: "IEDathon 2024",
            height: 500,
        },
        {
            id: "ied2",
            img: "/gallery/iedathon/2.jpg",
            title: "IEDathon Event",
            height: 380,
        },
        {
            id: "agm3",
            img: "/gallery/AGM/2.jpg",
            title: "AGM Gathering",
            height: 450,
        },
        {
            id: "ied3",
            img: "/gallery/iedathon/3.jpg",
            title: "IEDathon Participants",
            height: 450,
        },
        {
            id: "ied4",
            img: "/gallery/iedathon/4.jpg",
            title: "IEDathon Workshop",
            height: 400,
        },
        {
            id: "agm4",
            img: "/gallery/AGM/3.jpg",
            title: "AGM Team",
            height: 480,
        },
        {
            id: "ied5",
            img: "/gallery/iedathon/5.jpg",
            title: "IEDathon Team",
            height: 520,
        },
        {
            id: "ied6",
            img: "/gallery/iedathon/6.jpg",
            title: "IEDathon Presentation",
            height: 360,
        },
        {
            id: "ied7",
            img: "/gallery/iedathon/7.jpg",
            title: "IEDathon Innovation",
            height: 480,
        },
        {
            id: "ied8",
            img: "/gallery/iedathon/8.jpg",
            title: "IEDathon Judging",
            height: 420,
        },
        {
            id: "ied10",
            img: "/gallery/iedathon/10.jpg",
            title: "IEDathon Awards",
            height: 500,
        },
        {
            id: "ied11",
            img: "/gallery/iedathon/11.jpg",
            title: "IEDathon Celebration",
            height: 380,
        },
        // Mr & Ms Aura Images
        {
            id: "aura1",
            img: "/gallery/mr_ms_aura/1.jpg",
            title: "Mr & Ms Aura",
            height: 550,
        },
        {
            id: "aura2",
            img: "/gallery/mr_ms_aura/2.jpg",
            title: "Aura Competition",
            height: 400,
        },
        {
            id: "aura3",
            img: "/gallery/mr_ms_aura/3.jpg",
            title: "Aura Contestants",
            height: 480,
        },
        {
            id: "aura4",
            img: "/gallery/mr_ms_aura/4.jpg",
            title: "Aura Stage",
            height: 350,
        },
        {
            id: "aura5",
            img: "/gallery/mr_ms_aura/5.jpg",
            title: "Aura Performance",
            height: 520,
        },
        {
            id: "aura6",
            img: "/gallery/mr_ms_aura/6.jpg",
            title: "Aura Talent Show",
            height: 450,
        },
        {
            id: "aura7",
            img: "/gallery/mr_ms_aura/7.jpg",
            title: "Aura Winners",
            height: 400,
        },
        {
            id: "aura8",
            img: "/gallery/mr_ms_aura/8.jpg",
            title: "Aura Celebration",
            height: 480,
        },
        {
            id: "aura9",
            img: "/gallery/mr_ms_aura/9.jpg",
            title: "Aura Finale",
            height: 380,
        },
        {
            id: "aura10",
            img: "/gallery/mr_ms_aura/10.jpg",
            title: "Aura Group Photo",
            height: 500,
        },
        // More IEDathon Images
        {
            id: "ied12",
            img: "/gallery/iedathon/12.jpg",
            title: "IEDathon Networking",
            height: 420,
        },
        {
            id: "ied14",
            img: "/gallery/iedathon/14.jpg",
            title: "IEDathon Mentoring",
            height: 460,
        },
        {
            id: "ied15",
            img: "/gallery/iedathon/15.jpg",
            title: "IEDathon Projects",
            height: 380,
        },
        {
            id: "ied16",
            img: "/gallery/iedathon/16.jpg",
            title: "IEDathon Demo",
            height: 500,
        },
        {
            id: "ied17",
            img: "/gallery/iedathon/17.jpg",
            title: "IEDathon Winners",
            height: 440,
        },
        {
            id: "ied18",
            img: "/gallery/iedathon/18.jpg",
            title: "IEDathon Crowd",
            height: 360,
        },
        {
            id: "ied19",
            img: "/gallery/iedathon/19.jpg",
            title: "IEDathon Speaker",
            height: 480,
        },
        {
            id: "ied20",
            img: "/gallery/iedathon/20.jpg",
            title: "IEDathon Group",
            height: 520,
        },
        {
            id: "ied21",
            img: "/gallery/iedathon/21.jpg",
            title: "IEDathon Final",
            height: 400,
        },
        {
            id: "ied22",
            img: "/gallery/iedathon/22.jpg",
            title: "IEDathon Memory",
            height: 450,
        },
    ]

    return (
        <div className="min-h-screen pt-24">
            {/* Header */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6">
                            Our Moments
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            IEDC <span className="text-gradient">Gallery</span>
                        </h1>
                        <p className="text-xl text-light/70 max-w-2xl mx-auto">
                            Capturing the spirit of innovation, collaboration, and success
                            through memorable moments at IEDC.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Masonry Gallery */}
            <section className="relative px-4 md:px-8 pb-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-7xl mx-auto"
                >
                    <Masonry
                        items={galleryItems}
                        ease="power3.out"
                        duration={0.8}
                        stagger={0.06}
                        animateFrom="bottom"
                        scaleOnHover
                        hoverScale={0.95}
                        blurToFocus
                        colorShiftOnHover={false}
                    />
                </motion.div>
            </section>
        </div>
    )
}

export default Gallery
