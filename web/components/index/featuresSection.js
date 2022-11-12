import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { t } = useTranslation('common');

  const features = [
    { img: '/start_id.png',    title: `${t('features.feature1a')}`, desc: [] },
    { img: '/social-chat.png', title: `${t('features.feature2a')}`, desc: [], },
    { img: '/dapps.png',       title: `${t('features.feature3a')}`, desc: [] },
    { img: '/home/fet-4-aptos.png', title: `${t('features.feature4a')}`, desc: [] },
    { img: '/home/fet-5-gamefi.png',   title: `${t('features.feature5a')}`, desc: [] },
  ];

  features.forEach((e, i) => {
    'bcdefg'.split('').forEach((k/* a,b,c */) => {
      const key = `features.feature${i+1}${k}`; // features.feature1b'
      const res = t(key);
      if (res !== key) {
        e.desc.push(res);
      }
    });
  });

  return (
    <>
      {features.map((item, index) => {
        return (
          <div className="features" key={index}>
            <div className={index % 2 != 0 ? 'left' : 'right'}>
              {item.img && <img src={item.img} alt="social"/>}
            </div>
            <div className={index % 2 != 0 ? 'right' : 'left'}>
              <h1>{item.title}</h1>
              {item.desc.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}