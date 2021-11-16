import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const data = [
  { year: 'Positve Case', population: 41419 },
  { year: 'Death', population: 10300 },
  { year: 'Total', population: 41419 },
  { year: 'PosNeg', population: 41419},
  { year: 'Total viral', population: 49646 },

];

export default class Demo extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }
  
  render() {
    const { data: chartData } = this.state;


    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Corana Cases Charts" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

