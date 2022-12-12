import { Pie } from '@antv/g2plot';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const PieCommandStats: FC<{
  data: {
    name: string;
    value: number;
  }[];
}> = ({ data }) => {
  const [piePlot, setPiePlot] = useState<Pie>();

  useEffect(() => {
    let p: Pie | undefined = piePlot;

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

      setPiePlot(p);

      p.render();
    }

    p.update({
      data,
    });
  }, [data]);

  useEffect(() => {
    return () => {
      piePlot?.destroy();
    };
  }, []);

  return <div id="PieCommandStats" />;
};

export default PieCommandStats;
