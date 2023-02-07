import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

// import hynek from "../public/hynek.jpg"
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      <hr className='notion-hr' />
      <div className={styles.authorbox}>
        <img
          className={styles.authorbox__img}
          src='/hynek.jpeg'
          alt='Picture of Hynek Zemanec'
        />
        <p>
          Written by <strong>Hynek Zemanec</strong> who lives and works in
          Vienna, Austria, building beautiful things. Follow him on{' '}
          <a href='https://twitter.com/Hynas17' rel="noopener" target={'_blank'}>
            Twitter
          </a>{' '}
          and check out his{' '}
          <a href='https://www.instagram.com/hynekpics/' rel="noopener" target={'_blank'}>
            Photography adventures
          </a>
        </p>
      </div>

      <footer className={styles.footer}>
        <div className={styles.copyright}>
          Copyright 2020-{new Date().getFullYear()}{' '}
          <a
            style={{ textDecoration: 'underline' }}
            href='https://zemanec.me/'
            target={'_blank'}
          >
            {config.author}
          </a>
        </div>

        <div className={styles.settings}>
          {hasMounted && (
            <a
              className={styles.toggleDarkMode}
              href='#'
              role='button'
              onClick={onToggleDarkMode}
              title='Toggle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
            </a>
          )}
        </div>

        <div className={styles.social}>
          {config.twitter && (
            <a
              className={styles.twitter}
              href={`https://twitter.com/${config.twitter}`}
              title={`Twitter @${config.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          )}

          {config.mastodon && (
            <a
              className={styles.mastodon}
              href={config.mastodon}
              title={`Mastodon ${config.getMastodonHandle()}`}
              rel='me'
            >
              <FaMastodon />
            </a>
          )}

          {config.zhihu && (
            <a
              className={styles.zhihu}
              href={`https://zhihu.com/people/${config.zhihu}`}
              title={`Zhihu @${config.zhihu}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaZhihu />
            </a>
          )}

          {config.github && (
            <a
              className={styles.github}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          )}

          {config.linkedin && (
            <a
              className={styles.linkedin}
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          )}

          {config.newsletter && (
            <a
              className={styles.newsletter}
              href={`${config.newsletter}`}
              title={`Newsletter ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaEnvelopeOpenText />
            </a>
          )}

          {config.youtube && (
            <a
              className={styles.youtube}
              href={`https://www.youtube.com/${config.youtube}`}
              title={`YouTube ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube />
            </a>
          )}
        </div>
      </footer>
    </>
  )
}

export const Footer = React.memo(FooterImpl)
