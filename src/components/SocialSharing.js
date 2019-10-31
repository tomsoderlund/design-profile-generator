import React from 'react'
import styled from 'styled-components'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'

const SocialSharingSet = ({ link, title, body, styles }) => (
  <>
    <TwitterShareButton title={body} url={link} style={styles}><TwitterIcon round size={32} /></TwitterShareButton>
    <FacebookShareButton url={link} style={styles}><FacebookIcon round size={32} /></FacebookShareButton>
    <LinkedinShareButton url={link} style={styles}><LinkedinIcon round size={32} /></LinkedinShareButton>
    <EmailShareButton subject={title} body={body} url={link} style={styles}><EmailIcon round size={32} /></EmailShareButton>
  </>
)

export default () => (
  <SocialSharingBox>
    Share:
    <SocialSharingSet
      link='https://tomsoderlund.github.io/design-profile-generator/'
      title='Design Profile Generator'
      body='Check out Design Profile Generator – Quickly generate a graphic design profile (as CSS):'
      styles={{ cursor: 'pointer', display: 'inline-block', marginLeft: '0.3em' }}
    />
  </SocialSharingBox>
)

const SocialSharingBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  border-bottom-left-radius: 0.35em;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.3);
  background: linear-gradient(135deg, rgba(0,0,0, 0.3) 0%, rgba(0,0,0, 0.3) 40%, white 50%, rgba(0,0,0, 0.3) 60%, rgba(0,0,0, 0.3) 100%);
  background-size: 400% 100%;
  background-position: 100% 50%;
  animation: animation-shine 5s 0s infinite;

  @keyframes animation-shine {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`
