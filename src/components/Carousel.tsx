import { DragEvent } from "react"
import { useCallback, useState, useRef } from "react"
import styled from "styled-components"

const Carousel = ({ slides }: { slides: (() => JSX.Element)[] }) => {
    const [active, setActive] = useState(0)
    const dragVal = useRef<number | undefined>(undefined)

    const changeSlide = useCallback(
        (val: number) => {
            const length = slides.length - 1

            if (val > length) {
                return 0
            } else if (val < 0) {
                return length
            }

            return val
        },
        [slides]
    )

    // Handle Drag Events
    const handleDragStart = (e: DragEvent) => {
        var img = document.createElement("img")
        img.src = ""
        e.dataTransfer.setDragImage(img, 0, 0)

        console.log("start", e.clientX)
        dragVal.current = e.clientX
    }

    const handleDragEnd = (e: DragEvent) => {
        console.log("end", e.clientX, dragVal.current)
        if (typeof dragVal.current === "number") {
            if (e.clientX < dragVal.current) {
                setActive(changeSlide(active + 1))
            } else if (e.clientX > dragVal.current) {
                setActive(changeSlide(active - 1))
            }
        }

        dragVal.current = undefined
    }

    return (
        <StyledCarousel
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            draggable="true"
        >
            {slides.map((component, index) => {
                return index === active ? (
                    <Slide draggable="false" key={`heroslide-${index}`}>
                        {component()}
                    </Slide>
                ) : undefined
            })}

            <button
                className="left button-reset"
                onClick={() => setActive(changeSlide(active - 1))}
            >
                &#10094;
            </button>
            <button
                className="right button-reset"
                onClick={() => setActive(changeSlide(active + 1))}
            >
                &#10095;
            </button>
        </StyledCarousel>
    )
}

const StyledCarousel = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    position: relative;
    cursor: move;
    cursor: grab;

    &:active {
        cursor: grab;
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    button {
        &.left,
        &.right {
            position: absolute;
            font-size: 32px;
            line-height: 1;
            top: 48%;
        }

        &.left {
            left: 24px;
        }
        &.right {
            right: 24px;
        }
    }
`

const Slide = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 2;
`

export default Carousel
