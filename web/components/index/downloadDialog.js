import React, { useCallback , useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppVersions } from '@/serv/useAppVersions'
import Modal from '@/components/modal';


function AppInfo(props) {
  const { type, visible, name, highlight, size, version, requirement, update, sidePic, children } = props;

  if (!visible) {
    return null
  }

  return (
    <div className='dl-apps-page' data-key={type}>
      <div className='dl-apps-page-side'>{sidePic}</div>
      <div className='dl-apps-page-main'>
        <h2 className='dl-apps-page-name'>{name}</h2>
        <em className='dl-apps-page-highlight'>{highlight}</em>
        <dl className='dl-apps-page-edition'>
          <dd className='dl-apps-page-size'>{size}</dd>
          <dd className='dl-apps-page-ver'>{version}</dd>
          <dd className='dl-apps-page-req'>{requirement}</dd>
          <dd className='dl-apps-page-up'>{update}</dd>
        </dl>
        <div className='dl-apps-page-tiles'>
          {children}
        </div>
      </div>
    </div>
  )
}


export default function DownloadDialog(props) {
  const { visible, onClose } = props;
  const { t, i18n } = useTranslation('common');

  console.log(i18n.language)

  const { appInfos } = useAppVersions()
  const [ active, setActive ] = useState('android')

  const onTabChange = useCallback((/** @type {React.MouseEvent<HTMLButtonElement>} */ev) => {
    const key = ev.target.dataset['key']
    if (key) {
      setActive(ev.target.dataset['key'])
    }
  }, [])

  // const activedIndex = appInfos.findIndex(app => app.type === active)
  // position: absolute;

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={`dl-apps lang-${i18n.language}`}>
        <div className='dl-apps-tab-bar' onClickCapture={onTabChange}>
          <div className="dl-apps-tab-slide" data-active={active} /* ={{ transform: 'translateX(0%)' }} */ />
          {appInfos.map((app, i) => (
            <button key={app.type} data-key={app.type} className='dl-apps-tab-btn'>{t('Android/iOS', { ns: `dl-${app.type}` })}</button>
          ))}
        </div>
        <div className='dl-apps-tab-body'>
          {appInfos.map((app, i) => (
            <AppInfo
              key={app.type}
              type={app.type}
              visible={app.type === active}
              name={t('CoinStart App', { ns: `dl-${app.type}` })}
              highlight={t('most popular wallet', { ns: `dl-${app.type}` })}
              size={t('size: n M', { ns: `dl-${app.type}`, size: app.size })}
              version={t('version: Vx.y.z', { ns: `dl-${app.type}`, version: app.version })}
              requirement={t('requirement: any os above vN', { ns: `dl-${app.type}`, requirement: app.requirement })}
              update={t('recent update: 1 jan 20xx', { ns: `dl-${app.type}`, update: app.update, formatParams: {
                update: { year: 'numeric', month: 'numeric', day: 'numeric' },
              }, })}
              sidePic={<img src={`/home/dl-ui-${i}.png`}  />}
            >
              <>
                {app.activeUrls.map(({ url, type }) => (
                  <a  key={type} href={url} target="_blank" rel="noreferrer" className='dl-apps-page-tile'>
                    <img src={`/home/dl-tile-${type}.png`} alt={t('CoinStart App', { ns: `dl-${app.type}` })} />
                  </a>
                ))}
                {app.qrcode && (
                  <div className='dl-apps-page-scan'>
                    <img src={app.qrcode} />
                    <p>{t('scan plz', { ns: 'dl-android' })}</p>
                  </div>
                )}
              </>
            </AppInfo>
          ))}
        </div>
      </div>
    </Modal>
  );
}