import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import './HeroGeometric.css';

function ElegantShape({
    className = "",
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradientClass = "",
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={`elegant-shape-wrapper ${className}`}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ width, height }}
                className="elegant-shape-container"
            >
                <div className={`elegant-shape-inner ${gradientClass}`} />
            </motion.div>
        </motion.div>
    );
}

export default function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="hero-geometric-section">
            <div className="hero-geo-bg-blur" />

            <div className="hero-geo-shapes">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradientClass="grad-indigo"
                    className="shape-1"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradientClass="grad-rose"
                    className="shape-2"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradientClass="grad-violet"
                    className="shape-3"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradientClass="grad-amber"
                    className="shape-4"
                />
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradientClass="grad-cyan"
                    className="shape-5"
                />
            </div>

            <div className="hero-geo-content container">
                <div className="hero-geo-text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-geo-badge"
                    >
                        <Circle className="hero-geo-circle" size={8} />
                        <span>{badge}</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="hero-geo-title">
                            <span className="hero-geo-title1">{title1}</span>
                            <br />
                            <span className="hero-geo-title2">{title2}</span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="hero-geo-subtitle">
                            From branding and websites to apps and digital growth, IndicBiz helps businesses become brands people trust and remember.
                        </p>
                    </motion.div>
                    
                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="hero-geo-actions">
                         <a href="#" className="btn btn-primary" style={{backgroundColor: 'white', color: 'black', border: 'none'}}>Start Your Project</a>
                         <a href="#" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.2)', color: 'white'}}>View Services</a>
                    </motion.div>
                </div>
            </div>

            <div className="hero-geo-overlay" />
        </div>
    );
}
