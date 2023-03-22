import React, {FC} from "react";
import "./intro.scss"
import {Button, Container, Image} from "react-bootstrap";

const Intro: FC = () => {
    return(
        <>
            <div className="intro">
                <Image src="akali-logo.png" id="akali-logo"></Image>
                <h1 className="hey">
                Welcome !
                </h1>
                <Container className="mt-xxl-5 me">
                    <span className="text-dark-span">
                        Welcome to my website, I'm Stevie Lavenu. I'm gonna talk a little about myself
                        and my passions here, while testing some parallax effects. Enjoy !
                    </span>
                </Container>
            </div>
        </>
    );
}
export default Intro;