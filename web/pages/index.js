import {useLocalStorageState} from 'ahooks';
import FeaturesSection from '../components/index/featuresSection';
import FooterSection from '../components/index/footerSection';
import HeaderSection from '../components/index/headerSection';
import IntroSection from '../components/index/introSection';
import CryptoSection from '../components/index/cryptoSection';
import HeaderMobile from '../components/index_mobile/header_mobile';
import FooterMobile from '../components/index_mobile/footer_mobile';
import IntroMobile from '../components/index_mobile/intro_mobile';
import CryptoMobile from '../components/index_mobile/crypto_mobile';
import FeaturesMobile from '../components/index_mobile/features_mobile';
import DownloadDialog from '@/components/index/downloadDialog';

import en from '../locales/en';
import rus from '../locales/rus';
import ch from '../locales/ch';
import jp from '../locales/jp';
import hk from '../locales/hk';
import * as appDownPack from '../locales/appDownPack';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import { useCallback, useEffect, useState } from 'react';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: en, // 'common' is our custom namespace
      'dl-android': appDownPack.en.android,
      'dl-ios': appDownPack.en.ios,
      'dl-chrome': appDownPack.en.chrome,
    },
    ch: {
      common: ch,
      'dl-android': appDownPack.ch.android,
      'dl-ios': appDownPack.ch.ios,
      'dl-chrome': appDownPack.ch.chrome,
    },
    hk: {
      common: hk,
      'dl-android': appDownPack.hk.android,
      'dl-ios': appDownPack.hk.ios,
      'dl-chrome': appDownPack.hk.chrome,
    },
    jp: {
      common: jp,
      'dl-android': appDownPack.jp.android,
      'dl-ios': appDownPack.jp.ios,
      'dl-chrome': appDownPack.jp.chrome,
    },
    rus: {
      common: rus,
      'dl-android': appDownPack.ru.android,
      'dl-ios': appDownPack.ru.ios,
      'dl-chrome': appDownPack.ru.chrome,
    },
  },
});

export default function Home() {
  const [dlVisible, setDlVisible] = useState(false);
  const [localLocale] = useLocalStorageState('defiport_locale', {defaultValue: 'en'});
  useEffect(() => {
    i18next.changeLanguage(localLocale);
  }, [localLocale]);

  const onDownload = useCallback(() => {
    setDlVisible(true);
  }, [setDlVisible]);

  const onClose = useCallback(() => {
    setDlVisible(false);
  }, [setDlVisible]);

  return (
    <I18nextProvider i18n={i18next}>
      <div className="home pc">
        <HeaderSection onDownload={onDownload} />
        <main>
          <IntroSection onDownload={onDownload} />
          <CryptoSection/>
          <FeaturesSection/>
        </main>
        <FooterSection/>
      </div>
      <div className="home mobile">
        <HeaderMobile />
        <main>
          <IntroMobile /* onDownload={onDownload} *//>
          <CryptoMobile/>
          <FeaturesMobile/>
        </main>
        <FooterMobile/>
      </div>
      <DownloadDialog visible={dlVisible} onClose={onClose} />
    </I18nextProvider>
  );
}
