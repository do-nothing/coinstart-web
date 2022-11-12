import { useState, useEffect, useReducer } from 'react'

// import v from '@/conf/versions'

export function useAppVersions() {
  const [infos, setInfos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const vers = await import('@/conf/versions')

      const { apps, serial, urls } = vers['default'];
      const appInfos = serial.map(appType => {
        const app = apps[appType]
        return ({
          type: appType,
          size: app.size,
          version: app.version,
          requirement: app.requirement,
          update: new Date(app.update),
          qrcode: app.qrcode,
          activeUrls: app.activeUrls.map(u => ({
            type: u, url: urls[u]
          }))
        });
      })
  
      setInfos(appInfos)
    }
    fetchData();
  }, [])

  return { appInfos: infos }
}
