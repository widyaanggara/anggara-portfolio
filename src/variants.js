export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',  // Changed to 'spring' for a more natural movement
                stiffness: 30,   // Lower stiffness for smoother motion
                damping: 10,     // Added damping to reduce oscillation
                delay: delay,
                ease: [0.42, 0.0, 0.58, 1.0],  // Updated easing for smoother effect
                duration: 0.3    // Increased duration for slower motion
            }
        }
    }
}
