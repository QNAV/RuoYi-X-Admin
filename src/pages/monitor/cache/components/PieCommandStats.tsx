import { Pie } from '@antv/g2plot';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const PieCommandStats: FC<{
  data?: {
    name: string;
    value: number;
  }[];
}> = ({ data = [] }) => {
  const piePlotRef = useRef<Pie>();

  useEffect(() => {
    let p: Pie | undefined = piePlotRef.current;

    if (!p) {
      p = new Pie('PieCommandStats', {
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

      piePlotRef.current = p;

      p.render();
    }

    p.changeData(data);
  }, [data]);

  useEffect(() => {
    return () => {
      console.log(111);
      piePlotRef.current?.destroy();
    };
  }, []);

  return <div id="PieCommandStats" />;
};

export default PieCommandStats;
