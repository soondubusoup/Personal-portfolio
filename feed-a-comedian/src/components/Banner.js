import {useState, useEffect} from "react"
import { Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id="home"> 
          <Container>
            <row className="align-items-center">
                <col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Jimmy`}<span className="wrap">web developer</span></h1>
                    <p>Searching for One Piece</p>
                    <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                </col>
                <col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img" />

                </col>
            </row>
          </Container>
        </section>
    )
}