import React from 'react';
import styled from 'styled-components';
import LinkedInLogo from './LinkedInLogo';
import GithubLogo from './GithubLogo';
import InstagramSvg from './InstagramSvg';

function Footer() {
    return (
        <Container className='bg-gray-300 mt-24'>
            <FooterImg>
                <img src="./Images/Google-DSC-Lockup-LeftAligned-Chapter.269ee91a8ab3da257401.png" alt="404! Element Not Found" />
                <p>&copy;{(new Date().getFullYear())}| All Rights Reserved</p>
                <p>Engineered By Technical Team.</p>
                <p>Powered By Google</p>
            </FooterImg>
            <QuickLinks >
                <h2 className='text-base font-bold'>Quick Links:</h2>
                <ul className='list-disc '>
                    <li><a href="https://gdsc.community.dev/chapters/" className='transition-all duration-200'>Chapters</a></li>
                    <li><a href="https://gdsc.community.dev/events/#/list" className='transition-all duration-200'>Upcoming events</a></li>
                    <li><a href="https://developers.google.com/community/gdsc" className='transition-all duration-200'>More About DSC</a></li>
                    <li><a href="https://gdsc.community.dev/participation-terms/" className='transition-all duration-200'>Participation Terms</a></li>
                    <li><a href="https://policies.google.com/privacy" className='transition-all duration-200'>Privacy</a></li>
                    <li><a href="https://policies.google.com/terms" className='transition-all duration-200'>Terms</a></li>
                </ul>
            </QuickLinks>
            <Social>
                <h2 className='text-base font-bold'>Connect with us At:</h2>
                <Icons>
                    <a href="https://www.instagram.com/gdsc.abesec/" id="insta-a"><InstagramSvg className="hover:fill-rose-500  transition-all duration-300"/></a>
                    <a href="https://www.linkedin.com/company/dsc-abesec/" id="linkedin-a"><LinkedInLogo className="hover:fill-blue-700 transition-all duration-300"/></a>
                    <a href="https://github.com/Developer-Students-Club-ABESEC" id="github-a"><GithubLogo className="hover:fill-black transition-all duration-300"/></a>
                </Icons>
            </Social>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    display: flex;

    padding: 40px 50px 40px 50px; 
    justify-content: center;
    border-top: 1px solid lightgrey;
    @media (max-width: 756px)
     {
        flex-direction: column-reverse;
        margin-bottom: 70px;
        padding: 0 20px 10px 20px;
     }
`;

const FooterImg = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #5f6368;
    font-size: 0.8em;
    font-weight: 600;

    img{
        margin-bottom: 20px;
        width: 100%;
        max-width: 250px;
        fit-content: contain;
    }
    
    @media (max-width: 756px)
     {
        width: 100%;
     }
`;

const QuickLinks = styled(FooterImg)`
    width: 25vw;
    align-items: flex-start;
    a{
        text-decoration: none;
        color: #5f6368;   
    }
    a:hover{
        color: #4285F4;
    }
    li{
        margin-top: 5px;
    }
    ul{
        margin-left: 20px;
    }
    @media (max-width: 756px)
     {
        margin-top: 20px;
        width: 100%;
     }
`;

const Social = styled(FooterImg)`
    width: 25vw;
    @media (max-width: 756px)
    {
        margin-top: 20px;
        width: 100%;
    }
`;

const Icons = styled.div`
    display: flex;
    padding: 10px;
    gap: 8px;
    justify-content: center;
    a {
        cursor: pointer;
    }


`;
