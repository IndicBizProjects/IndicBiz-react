import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, createElement } from 'react'

export default function KineticHero({
  topText = "YOUR",
  bottomText = "AGENCY",
  rollingWords = ["BRANDING", "MARKETING", "CREATIVE"],
  interval = 2.4,
  letterDuration = 0.55,
  textColor = "var(--color-ink)",
  accentColor = "var(--color-accent-strong)",
  font = {},
  tag = "h1",
  showAsterisk = true,
  ornamentContent = "✦",
  ornamentPlacement = "bottom",
  showDot = true,
  align = "left",
  padding = 0,
}) {
  const words = (rollingWords || []).filter(
    (w) => typeof w === "string" && w.trim().length > 0
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval * 1000)
    return () => clearInterval(id)
  }, [words.length, interval])

  const currentWord = words[index] || ""
  const displayWord = currentWord
    ? `${currentWord.charAt(0).toUpperCase()}${currentWord.slice(1).toLowerCase()}`
    : ""

  const typography = {
    fontFamily: font?.fontFamily || "var(--font-display)",
    fontSize: font?.fontSize || "clamp(2.5rem, 6vw, 5.5rem)",
    fontWeight: font?.fontWeight || 500,
    fontStyle: font?.fontStyle || "normal",
    letterSpacing: font?.letterSpacing || "-0.04em",
    lineHeight: font?.lineHeight || 1.0,
  }

  const wrapperStyle = {
    width: "100%",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: align === "center" ? "center" : "flex-start",
    padding: `${padding}%`,
    boxSizing: "border-box",
    position: "relative",
  }

  const headingStyle = {
    color: textColor,
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: align === "center" ? "center" : "flex-start",
    textAlign: align === "center" ? "center" : "left",
    width: "100%",
    minWidth: 0,
    ...typography,
  }

  const lineStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    position: "relative",
  }

  const middleLineStyle = {
    ...lineStyle,
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    alignSelf: "stretch",
    whiteSpace: "normal",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    overflow: "hidden",
    color: accentColor,
    minHeight: "1.25em",
  }

  const phraseIn = {
    hidden: { y: "80%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: letterDuration, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      y: "-80%",
      opacity: 0,
      transition: { duration: letterDuration * 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const showTopOrnament = showAsterisk && (ornamentPlacement === "top" || ornamentPlacement === "both")
  const showBottomOrnament = showAsterisk && (ornamentPlacement === "bottom" || ornamentPlacement === "both")

  const ornamentStyle = {
    marginLeft: "0.2em",
    color: accentColor,
    fontSize: "0.8em",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const ornamentElement = (
    <motion.span
      style={ornamentStyle}
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      {ornamentContent}
    </motion.span>
  )

  const headline = createElement(
    tag,
    { style: headingStyle },
    [
      <span key="top" style={{ ...lineStyle, display: "inline-flex" }}>
        <span style={{ position: "relative", display: "inline-block" }}>
          {topText}
          {showDot && (
            <span
              style={{
                position: "absolute",
                top: "15%",
                right: "-0.2em",
                width: "0.12em",
                height: "0.12em",
                borderRadius: "50%",
                background: accentColor,
              }}
            />
          )}
        </span>
        {showTopOrnament && ornamentElement}
      </span>,
      <span key="mid" style={middleLineStyle}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord + index}
            variants={phraseIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "inline-block",
              position: "relative",
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              whiteSpace: "normal",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            {displayWord}
          </motion.span>
        </AnimatePresence>
      </span>,
      <span key="bot" style={{ ...lineStyle, display: "inline-flex" }}>
        {bottomText}
        {showBottomOrnament && ornamentElement}
      </span>
    ]
  )

  return <div style={wrapperStyle}>{headline}</div>
}
