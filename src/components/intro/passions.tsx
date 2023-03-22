import React, {FC} from "react";
import "./passions.scss"
import {Image} from "react-bootstrap";
import {Waypoint} from "react-waypoint";
import {animated, useSpring} from "react-spring";

const Passions: FC = () => {
    const [styles, api] = useSpring(() => ({x: -25}));
    const [styles2, api2] = useSpring(() => ({x: -25}));
    const [styles3, api3] = useSpring(() => ({x: -25}));
    const [stylediv, api4] = useSpring(() => ({x: -700}));
    const [styletext, api5] = useSpring(() => ({opacity: 0}));

    let neonAnimated= false;

    function neonAnimation() {
        api4.start({from: {x: -700}, to: {x: 0}, onRest: {
                x: () => animateNeon()
            }});
        neonAnimated = true;
    }
    function animateNeon() {
        api5.start({from: {opacity: 0},to: {opacity: 1}});
        api.start({from: {x: -25}, to: {x: 25}});
        api2.start({from: {x: -25}, to: {x: 0}});
        api3.start({from: {x: -25}, to: {x: -25}});
    }

    return (
            <animated.div className="fav-tech-div">
                <Waypoint onEnter={() => {if(!neonAnimated) {neonAnimation()}}}/>
                    <div id="Neon-anim">
                        <animated.img src="image.svg" className="neon-background" style={stylediv}></animated.img>
                        <animated.img src="neon.png" className="neon img1" style={styles}/>
                        <animated.img src="neon-blue.png" className="neon img2" style={styles2}/>
                        <animated.img src="neon-blue-light.png" className="neon img3" style={styles3}/>
                    </div>
                <div className="inline-text">
                    <animated.p style={styletext}>
                        bla bla valorant, bla bla jeux vidéo
                        <br/> bla bla Tagalog, bla bla musique
                        <br/> bla bla Tagalog, bla bla musique
                        <br/> bla bla Tagalog, bla bla musique
                        <br/> bla bla Tagalog, bla bla musique
                        <br/> bla bla Tagalog, bla bla musique
                    </animated.p>
                </div>
            </animated.div>
    );
}
export default Passions;