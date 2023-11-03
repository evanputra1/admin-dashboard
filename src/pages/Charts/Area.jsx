import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';

const Area = () => {

  return (
    <div>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
        <Header category="Chart" title="Area Chart" />

        <ChartComponent
          id="area-chart"
          height="600px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;