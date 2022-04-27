const DURATION = 0.25
const BOUNCE = 0.4

export const fade = {
    hide: {
        opacity: 0,
        transition: {
            type: "tween",
            duration: DURATION
        }
    },
    show: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: DURATION
        }
    }
}

export const fadeUp = {
    hide: {
        opacity: 0,
        translateY: 30,
        transition: {
            type: "tween",
            duration: DURATION
        }
    },
    show: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: "tween",
            duration: DURATION
        }
    }
}

export const fadeLeft = {
    hide: {
        opacity: 0,
        translateX: 80,
        transition: {
            type: "tween",
            duration: DURATION
        }
    },
    show: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: "tween",
            duration: DURATION
        }
    }
}

export const fadeUpSpring = {
    hide: {
        opacity: 0,
        translateY: 40,
        transition: {
            type: "spring",
            bounce: BOUNCE
        }
    },
    show: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: "spring",
            bounce: BOUNCE
        }
    }
}

export const staggerChildren = {
    hide: {
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1
        }
    },
    show: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.04
        }
    }
}
