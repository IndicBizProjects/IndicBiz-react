/**
 * motions/index.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Barrel export — import anything from '@/motions'
 *
 * Source: https://motion.dev/docs
 * Maintained by: IndicBiz motion library
 *
 * ─── Quick-reference ─────────────────────────────────────────────────────────
 *
 * PRESETS (tokens)
 *   easeOut, easeInOut, easeSharpOut, anticipate
 *   tween, tweenFast, tweenSlow, tweenLinear
 *   springSoft, springSnappy, springHover, springTap, springBouncy, springHeavy
 *   viewportOnce, viewportRepeat, viewportFull, viewportEarly
 *   fadeIn, fadeUp, fadeDown, fadeLeft, fadeRight
 *   scaleIn, scalePop, clipRevealUp, clipRevealLeft
 *   staggerContainer, staggerContainerExit
 *   pageFade, pageSlideRight, pageSlideLeft, pageSlideUp
 *   overlayVariant, modalVariant
 *   hoverLiftTarget, hoverScaleTarget, hoverGlowTarget, tapPressTarget
 *   dragInertia
 *   scrollOffsetEnter, scrollOffsetExit, scrollOffsetFull
 *
 * ENTER ANIMATIONS
 *   <FadeIn>             scroll-triggered fade + lift
 *   <FadeInStagger>      stagger wrapper (scroll-triggered)
 *   <StaggerItem>        child of FadeInStagger
 *   <SlideIn>            directional slide from left/right/up/down
 *   <ScaleIn>            scale up from small
 *   <ClipReveal>         clip-path wipe reveal
 *
 * STAGGER
 *   <StaggerGroup>       orchestrates children with stagger
 *   <StaggerChild>       named child variant (fadeUp|fadeDown|slideLeft|…)
 *
 * PRESENCE / EXIT
 *   <PageTransition>     enter + exit animations for route changes
 *   <ModalPresence>      overlay + modal panel
 *   <Slideshow>          keyed single-child crossfade/slide
 *   <ListPresence>       animated list add/remove
 *   <ListItem>           individual list item for ListPresence
 *
 * SCROLL
 *   <ScrollProgress>     page read progress bar
 *   <Parallax>           scroll-speed offset element
 *   <ScrollScale>        scale driven by scroll
 *   <ScrollOpacity>      opacity driven by scroll
 *   <ScrollRevealText>   word-by-word reveal on scroll
 *
 * GESTURES
 *   <HoverLift>          lift element on hover
 *   <HoverScale>         scale element on hover
 *   <HoverGlow>          brightness on hover
 *   <TapPress>           scale-down on tap
 *   <HoverTap>           hover + tap combo
 *   <FocusRing>          animated focus outline
 *   <DraggableItem>      drag-enabled element
 *
 * LAYOUT
 *   <LayoutBox>          auto-animates layout changes
 *   <SharedElement>      layoutId shared element transition
 *   <Accordion>          animated accordion
 *   <SortableList>       list with reorder animations
 *   <SortableItem>       item for SortableList
 *   <TabIndicator>       animated tab underline
 *
 * TEXT
 *   <WordReveal>         word-by-word scroll reveal
 *   <CharReveal>         char-by-char scroll reveal
 *   <BlurReveal>         blur → sharp entrance
 *   <CountUp>            animated number counter
 *   <Typewriter>         typewriter char-by-char
 */

// ─── Presets ─────────────────────────────────────────────────────────────────
export * from './presets'

// ─── Enter animations ────────────────────────────────────────────────────────
export { FadeIn, FadeInStagger, StaggerItem } from './FadeIn'
export { SlideIn } from './SlideIn'
export { ScaleIn, ClipReveal } from './ScaleIn'

// ─── Stagger ─────────────────────────────────────────────────────────────────
export { StaggerGroup, StaggerChild } from './Stagger'

// ─── Presence / Exit ─────────────────────────────────────────────────────────
export { PageTransition, ModalPresence, Slideshow, ListPresence, ListItem } from './Presence'

// ─── Scroll ──────────────────────────────────────────────────────────────────
export { ScrollProgress, Parallax, ScrollScale, ScrollOpacity, ScrollRevealText } from './Scroll'

// ─── Gestures ────────────────────────────────────────────────────────────────
export { HoverLift, HoverScale, HoverGlow, TapPress, HoverTap, FocusRing, DraggableItem } from './Gestures'

// ─── Layout ──────────────────────────────────────────────────────────────────
export { LayoutBox, SharedElement, Accordion, SortableList, SortableItem, TabIndicator } from './LayoutTransition'

// ─── Text ────────────────────────────────────────────────────────────────────
export { WordReveal, CharReveal, BlurReveal, CountUp, Typewriter } from './TextReveal'
