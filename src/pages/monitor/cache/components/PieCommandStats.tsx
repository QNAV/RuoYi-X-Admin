import { Pie } from '@antv/g2plot';
import type { FC } from 'react';
import { startTransition, useEffect, useRef } from 'react';

const PieCommandStats: FC<{
  data?: {
    name: string;
    value: number;
  }[];
}> = ({ data = [] }) => {
  const piePlotRef = useRef<Pie>();

  startTransition(() => {
    piePlotRef.current?.changeData(data);
  });

  useEffect(() => {
    if (!piePlotRef.current) {
      const piePlot = new Pie('PieCommandStats', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'name',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
      });

      piePlotRef.current = piePlot;

      piePlot.render();
    }

    return () => {
      piePlotRef.current?.destroy();
      piePlotRef.current = undefined;
    };
  }, []);

  return <div id="PieCommandStats" />;
};

export default PieCommandStats;
