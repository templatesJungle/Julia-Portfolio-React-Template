import React from 'react'
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

const fxSettings = {
    'fade' : [
        {
            targets: ".letter",
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: stagger(100)
        }
    ],
    'slide' : [
        {
            targets: ".letter",
            translateY: ["1.1em", 0],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 100 * i
        }
    ],
    'drop' : [
        {
            targets: ".letter",
            translateY: ['-1em', '0em'],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 100 * i
        }
    ],
    'domino' : [
        {
            targets: ".letter",
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 100 * i
        }
    ]
};

function AnimatedText({
    children,
    effect
}) {
    const textContent = children.split(' ');
    
  return (
    <>
    {textContent.map( (word, index) => (
        <div className={`text-wrapper ${effect}`}>
            <Anime
            explode="characters"
            explodeOptions={{ name: "letter" }}
            initial={fxSettings[effect]}
            >
            {word}
            </Anime>
        </div>
    )
    )}
    </>
  )
}

export default AnimatedText