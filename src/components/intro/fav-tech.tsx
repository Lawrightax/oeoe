import React, {FC, MutableRefObject, useRef} from "react";
import './fav-tech.scss'
import {Image} from "react-bootstrap";
import {animated, config, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";
import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
   bar: {
       backgroundColor: theme.primaryColor,
   }
}))

const FavTech: FC = () => {
    const AnimatedImage = animated(Image);
    const { classes, cx } = useStyles();
    const [stylediv, api4] = useSpring(() => ({x: -700}));
    const [style, api] = useSpring(() => ({from: {width: '100%'}}));
    let animatedImage: boolean = false;

    function anim() {
        if(!animatedImage)
            api.start({from: {width: '100%'}, to: {width: '5%'}, config: {mass: 1, tension: 70, friction: 17} });
        animatedImage = true;
    }


    return (
        <Waypoint onEnter={anim} >
            <div className="test">
                <div className="test2">
                </div>
                <div className="test3">
                    <animated.div className={cx(classes.bar, "test4")} style={style}></animated.div>
                    <Image src="neon.png" className="test5"></Image>
                </div>
            </div>
        </Waypoint>
    );
}

export default FavTech;