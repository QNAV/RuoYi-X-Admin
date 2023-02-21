import { Gauge } from '@antv/g2plot';
import type { FC } from 'react';
import { useEffect, useRef, useTransition } from 'react';

const ticks = [0, 1 / 3, 2 / 3, 1];
const color = ['#30BF78', '#FAAD14', '#F4664A'];

const PieUsedMemory: FC<{
  data?: number;
}> = ({ data = 0 }) => {
  const gaugeRef = useRef<Gauge>();

  const [, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      gaugeRef.current?.changeData(data / 1000);
    });
  }, [data]);

  useEffect(() => {
    if (!gaugeRef.current) {
      const gauge = new Gauge('PieUsedMemory', {
        percent: 0,
        range: {
          ticks: [0, 1],
          color: ['l(0) 0:#30BF78 0.5:#FAAD14 1:#F4664A'],
        },
        indicator: {
          pointer: {
            style: {
              stroke: '#D0D0D0',
            },
          },
          pin: {
            style: {
              stroke: '#D0D0D0',
            },
          },
        },
        statistic: {
          title: {
            formatter: (e) => {
              return `${((e?.percent ?? 0) * 1000).toFixed(2)}M`;
            },
            style: ({ percent }) => {
              return {
                fontSize: '36px',
                lineHeight: 1,
                color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
              };
            },
          },
        },
        axis: {
          label: {
            formatter(v) {
              return Number(v) * 1000;
            },
          },
        },
      });

      gaugeRef.current = gauge;

      gauge.render();
    }

    return () => {
      gaugeRef.current?.destroy();
      gaugeRef.current = undefined;
    };
  }, []);

  return <div id="PieUsedMemory" />;
};

export default PieUsedMemory;
