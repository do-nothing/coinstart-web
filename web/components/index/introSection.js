import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
// import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

{/* <TelegramShareButton>
<TelegramIcon size={26} borderRadius={16} />
</TelegramShareButton>

<LineShareButton>
<LineIcon size={26} borderRadius={16} />
</LineShareButton>

<WhatsappShareButton>
<WhatsappIcon size={26} borderRadius={16} />
</WhatsappShareButton>
WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, LineShareButton, LineIcon, 
 */}

// [0, 1, 2, .... , 9]
const serial = Array.from({ length: 10 }, (_, i) => i);

export default function IntroSection(props) {
  const { onDownload } = props;
  const { t, i18n } = useTranslation('common');

  const descList = serial.reduce((arr, n) => {
    const key = `intro.desc${n}`; // features.feature1b'
    if (i18n.exists(key, { ns: 'common' })) {
      arr.push(t(key));
    }
    return arr;
  }, []);

  // const { metaShare } = useShare();

  return (
    <>
      <section key="sec1" className='home-intro-sec1'>
        <div className="title">
          {t('intro.title')}
        </div>
        <div className="home-intro-wordlogo">
          <img src="/coinstart.ttf.svg" width="504" height="122" />
        </div>
        <div className="sub-title">
          {t('intro.subtitle')}
        </div>
        <div className="description">
          {descList.map(e => (
            <div className="description-item" key={e}>{e}</div>
          ))}
        </div>
        <div className="home-intro-btns">
          <a className="cst-button btn-top-down-l" href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">
            <img src="/icon-color-chrome.png" alt="coinstart-wallet google webstore app detail" width="30" height="30" />
            &#x2000;
            {t('Chrome')}
          </a>
          <a className="cst-button cst-btn-ghost btn-top-down-s" href="https://coinstart.io/wallet/">{t('Desktop')}</a>
          <button className="cst-button cst-btn-ghost btn-top-down-s" onClick={onDownload}>{t('Download')}</button>
          {/* <button><img src="/icon-apple.png" alt="icon-apple"  /> App Store</button>
          <button><img src="/icon-play-store.png" alt="icon-play-store"  />Play Store</button>
          <a href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">
            <button><img src="/icon-chrome.png" alt="icon-chrome"  />Chrome</button>
          </a> */}
        </div>
        <div className="social">
          <a href="https://twitter.com/coinstartwallet" target="_blank" rel="noreferrer">
            <img src="/icon-twitter.png" alt="icon-twitter"  />
          </a>
          <a href="https://discord.gg/75m2wmNKPZ" target="_blank" rel="noreferrer">
            <img src="/icon-discord.png" alt="icon-discord"  />
          </a>
          {/* <a href="#" target="_blank" rel="noreferrer" onClick={metaShare}>
            <img src="/icon-facebook.png" alt="share facebook"  />
          </a> */}

          {/* <div className="fb-like fb_iframe_widget" data-href="https://coinstart.io/" data-width="" data-layout="button_count" data-action="recommend" data-size="large" data-share="true" data-lazy="true"><span /></div> */}
          <div className="fb-share-button" data-href="https://coinstart.io/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoinstart.io%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div>

          <a class="twitter-share-button"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcoinstart.io%2F&text=Your%20Portal%20to%20crypto%20world%2C%20safe%20%26%20easy%20for%20you%20to%20store%2C%20buy%2C%20send%2C%20receive%2C%20swap%20tokens%20and%20collect%20NFTs.&image=https%3A%2F%2Fbafkreicrqzwfmjdbp3uzd73ezmwdjlso2zeexj2t5agmpjhxuux6z6es4e.ipfs.nftstorage.link"
            data-size="large"
          ><i /> <label>Tweet</label>
          </a>
          {/* <FacebookShareButton 
            title="share to facebook"
            url="https://coinstart.io/"
            quote="Your Portal to crypto world, safe & easy for you to store, buy, send, receive, swap tokens and collect NFTs."
            hashtag="#wallet,#web3-wallet,#sui-wallet,#nft,#defi,#dapp-wallet,#coinstart"
            className="coinstart-share share-meta"
          >
            <FacebookIcon size={26} borderRadius={16} />
          </FacebookShareButton>

          <TwitterShareButton
            title='CoinStart'
            url='https://twitter.com/coinstartwallet'
            hashtag="#wallet,#web3-wallet,#sui-wallet,#nft,#defi,#dapp-wallet,#coinstart"
            image="https://bafkreicrqzwfmjdbp3uzd73ezmwdjlso2zeexj2t5agmpjhxuux6z6es4e.ipfs.nftstorage.link"
          >
            <TwitterIcon size={26} borderRadius={16} />
          </TwitterShareButton> */}
        </div>
        {/* <img className="icon-hand" src="/icon-hand.png" alt="icon-hand"  /> */}
        <img className="icon-hand" src="/home/intro-uishow-0.png" alt="coinstart"  />
        <img className="icon-mobile" src="/home/intro-uishow-1.png" alt="coinstart"  />
        <img className="icon-mobile" src="/home/intro-uishow-2.png" alt="coinstart" id="mockup-1" />
        <img className="icon-mobile" src="/home/intro-uishow-3.png" alt="coinstart" id="mockup-2" />
        <img className="icon-mobile" src="/home/intro-uishow-4.png" alt="coinstart" id="mockup-3" />
        {/* <img className="icon-mobile" id="mockup-1" src="/icon-mobile.png" alt="icon-hand"  />
        <img className="icon-mobile" id="mockup-2" src="/icon-mobile1.png" alt="icon-hand"  />
        <img className="icon-mobile" id="mockup-3" src="/icon-mobile2.png" alt="icon-hand"  /> */}
      </section>
      <section key="sec2">
        <p id="title">{t('intro.title2')}</p>
        <p key="subtitle2" className='text-desc'>{t('intro.subtitle2')}</p>
        <p key="subtitle3" className='text-desc'>{t('intro.subtitle3')}</p>
      </section>
    </>
  );
}

IntroSection.propTypes = {
  onDownload: func.isRequired
};
