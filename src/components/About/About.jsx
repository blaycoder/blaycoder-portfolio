import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTubeIcon from '@material-ui/icons/YouTube'
import mediumIcon from '../../assets/mediumIcon.png'
import { about } from '../../portfolio'
import { Reveal } from '../utils/Reveal'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <Reveal>
        {name && (
          <h1>
            Hi 🖐, I am <span className='about__name'>{name}.</span>
          </h1>
        )}
      </Reveal>

      <Reveal>
        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>
      </Reveal>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank'>
            <span type='button' className='btn btn--outline'>
              Download Resume
            </span>
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blankk'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.medium && (
              <a
                href={social.medium}
                aria-label='medium'
                className='link link--icon medium--icon'
                target='_blank'
              >
                <img src={mediumIcon} alt='medium' width={25} />
              </a>
            )}

            {social.youtube && (
              <a
                href={social.youtube}
                aria-label='youtube'
                className='link link--icon'
                target='_blank'
              >
                <YouTubeIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
