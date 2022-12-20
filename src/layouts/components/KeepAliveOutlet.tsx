import type { KeepAliveElements } from '@/layouts/components/TabsHeader';
import TabsHeader from '@/layouts/components/TabsHeader';
import { isKeepAliveRoutesSet, settingsMap } from '@/routes';
import { useRef } from 'react';
import { matchPath, useLocation, useOutlet } from 'react-router-dom';

const KeepAliveOutlet = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  const keepAliveElements = useRef<KeepAliveElements>({});

  const currRouteSettingsKey = Object.keys(settingsMap).find((key) => matchPath(key, pathname));
  const isKeepAlive = currRouteSettingsKey ? isKeepAliveRoutesSet.has(currRouteSettingsKey) : false;

  if (isKeepAlive) {
    keepAliveElements.current[currRouteSettingsKey!] = element;
  }

  return (
    <>
      <TabsHeader keepAliveElements={keepAliveElements.current} />
      {Object.entries(keepAliveElements.current).map(([key, element]) => (
        <div key={key} hidden={!matchPath(key, pathname)}>
          {element}
        </div>
      ))}
      {!isKeepAlive && element}
    </>
  );
};

export default KeepAliveOutlet;
