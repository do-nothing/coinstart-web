import { useTranslation } from 'react-i18next';
import SocialShare from './social-share';
import styles from './index_mobile.module.scss';
// import useWallet from './useWallet';
import dynamic from 'next/dynamic';

dynamic(import('react-onsenui'), { ssr: false });

// [0, 1, 2, .... , 9]
const serial = Array.from({ length: 10 }, (_, i) => i)

export default function IntroMobile(props) {
  const { onDownload } = props
  // const { openWallet } = useWallet();
  const { t, i18n } = useTranslation('common', { useSuspense: false });

  const descList = serial.reduce((arr, n) => {
    const key = `intro.desc${n}`; // features.feature1b'
    if (i18n.exists(key, { ns: 'common' })) {
      arr.push(t(key))
    }
    return arr
  }, [])

  return (
    <>
      <div className="hand">
        <img className="icon-hand" src="/home/intro-uishow-0.png" alt="rich-hand"  />
        <img className="icon-mobile" src="/home/intro-uishow-1.png" alt="coinstart-app"  />
        <img className="icon-mobile" src="/home/intro-uishow-2.png" alt="coinstart-app" id="mockup-mobile-1" />
        <img className="icon-mobile" src="/home/intro-uishow-3.png" alt="coinstart-app" id="mockup-mobile-2" />
        <img className="icon-mobile" src="/home/intro-uishow-4.png" alt="coinstart-app" id="mockup-mobile-3" />
      </div>
      <div className="intro-gowallet-warper">
        <a className="csm-btn intro-gowallet" href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">{t('Connect Wallet')}</a>

        {/* <button className="cst-button intro-gowallet" onClick={openWallet}>{t('intro.Go-wallet')}</button> */}
      </div>
      <div className={styles['intro-socialshare-warper']}>
        <SocialShare />
      </div>
      <div className="intro-col">
        <div className="title">
          {t('intro.title')}
        </div>
        <div className="sub-title">
          {t('intro.subtitle')}
        </div>
        <div className="description">
          {descList.map(e => (
            <div className="description-item" key={e}>
              <img src="/icon-check.png" alt="icon-check" className="checkIcon" /> {e}
            </div>
          ))}
        </div>

        <div className="home-intro-btns">
          {/* intro-gowallet  cst-button */}
          <a className="csm-btn btn-top-down-l" href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">
            <img src="/icon-color-chrome.png" alt="coinstart-wallet google webstore app detail" width="30" height="30" />
            &#x2000;
            {t('Chrome')}
          </a>
          <a className="csm-btn cst-btn-ghost btn-top-down-s" href="https://coinstart.io/wallet/">{t('Desktop')}</a>
          <button className="csm-btn cst-btn-ghost btn-top-down-s" onClick={onDownload}>{t('Download')}</button>
        </div>

        <p id="title">{t('intro.title2')}</p>
        <p id="desc">{t('intro.subtitle2')}</p>
        <p id="desc">{t('intro.subtitle3')}</p>
      </div>
    </>
  );
}