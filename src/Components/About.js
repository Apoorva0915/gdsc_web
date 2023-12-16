import React from "react";
import styled from "styled-components";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

function About() {
  return (
    <Container id="about">
      <Body>
        <Heading className="">
          <h2 className="font-semibold">Google Developer Student Clubs</h2>
          <h2 className="font-semibold">ABES Engineering College</h2>
        </Heading>
        <p>
          Google Developer Student Clubs are university based community groups
          for students interested in google developer technologies. students
          from all undergraduate or graduate programs with an interest in
          growing as a developer are welcome. by joining a GDSC, students grow
          their knowledge in a peer-to-peer learning environment and build
          solutions for local businesses and their community.
          <ul className="list-disc">
            <Part>
              <li>
                Gain relevant industry experience by solving problems for local
                organizations with technology based solutions.
              </li>
              <li>
                Showcase their prototypes and solutions to their local community
                and industry.
              </li>
              <li>
                Grow their knowledge on developer technologies and more through
                peer to peer
              </li>
              <li>
                Getting inspiration to become world-class developers and
                changemakers.
              </li>
            </Part>
          </ul>
        </p>
        <ButtonTab className="mt-4">
          <Button className="hover:bg-green-600">
            <a href="https://gdsc.community.dev/abes-engineering-college-ghaziabad/">
              Join us
            </a>
          </Button>
        </ButtonTab>
      </Body>
      <Picture>
        <DotLottiePlayer src="/Images/join_us.lottie" autoplay loop>
        </DotLottiePlayer>
      </Picture>
    </Container>
  );
}

export default About;

const Container = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-weight: 500;
  padding: 10px 40px;
  @media (max-width: 993px) {
    flex-direction: column;
    height: fit-content;
    padding: 0px 10px !important;
  }
  background: url("/Images/gdsc-india-android-study-jam.png") no-repeat;
  background-size: 100% 100%;
`;

const Heading = styled.div`
  h2 {
    padding: 2px;
    font-size: 2rem;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin: 20px;
  color: var(--about-para);
  p {
    padding: 20px;
  }
  @media (max-width: 824px) {
    margin: 0;
    width: 100%;
    p {
      padding: 10px !important;
    }
  }
`;

const Part = styled.div`
  margin-top: 5px;
  margin-left: 25px;
  @media (max-width: 824px) {
    margin: 10px;
  }
`;

const Picture = styled.div`
  width: 36vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
    fit-content: contain;
  }
  @media (max-width: 824px) {
    img {
      width: 250px;
    }
  }
`;
const ButtonTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 800;
  background-color: blue;
  cursor: pointer;
  border: 0px;
  a {
    text-decoration: none;
    color: white;
  }
`;
