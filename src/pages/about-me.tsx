import React, {useContext, useRef} from 'react';
import "./about-me.scss";
import Intro from "../components/intro/intro";
import Passions from "../components/intro/passions";
import Baddest from "../components/intro/baddest";
import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import FavTech from "../components/intro/fav-tech";
import {HeaderBar} from "../components/mantine-topbar/mantine-topbar";
import {PageContext} from "../context/PageContext";


function AboutMe() {
    const parallax = useRef<IParallax>(null!);
    const { setPage } = useContext(PageContext);
    const pages = 4;
    function changeOffset(){
        if (parallax.current.offset === pages-1)
            parallax.current.scrollTo(0);
        else
            parallax.current.scrollTo(parallax.current.offset + 1)

    }

    setPage(3)

    return (
        <>
            <div className="about-me">
                <HeaderBar />
                <Parallax ref={parallax} pages={pages} className="without-scroll" style={{ height: "93.3%"}}>
                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        factor={3}
                        style={{
                            zIndex: -1,
                            backgroundColor: '#222a38'
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={1}
                        onClick={() => changeOffset()}
                        style={{backgroundColor: '#181e28'}}>
                        <Intro />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={2.5}
                        onClick={() => changeOffset()}
                    >
                        <Passions />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={2}
                        speed={2}
                        style={{backgroundColor: '#181e28'}}
                    />
                    <ParallaxLayer
                        offset={2}
                        speed={0.5}
                        onClick={() => changeOffset()}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}>
                        <Baddest/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={3}
                        onClick={() => changeOffset()}>
                        <FavTech />
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    );
}
export default AboutMe;