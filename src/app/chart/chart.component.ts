import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { MdDialog, MdDialogConfig, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart: AmChart;
  animal;
  dataProvider = [
    {
      'date': '2014-03-01',
      'column1': 8,
      'column2': 5
    },
    {
      'date': '2014-03-02',
      'column1': 6,
      'column2': 7
    },
    {
      'date': '2014-03-03',
      'column1': 2,
      'column2': 3
    },
    {
      'date': '2014-03-04',
      'column1': 1,
      'column2': 3
    },
    {
      'date': '2014-03-05',
      'column1': 2,
      'column2': 1
    },
    {
      'date': '2014-03-06',
      'column1': 3,
      'column2': 2
    },
    {
      'date': '2014-03-07',
      'column1': 6,
      'column2': 8
    }
  ];

  constructor(private AmCharts: AmChartsService,
              public dialog: MdDialog) { }

  makeChart(): void {
    /*amCharts*/
  }

  openDialog(data): void {
    console.log('*********');
    console.log(data);
    console.log('*********');
    let dialogRef = this.dialog.open(DialogComponent, <MdDialogConfig>{
      data: {dataProvider: this.dataProvider}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'categoryField': 'date',
      'dataDateFormat': 'YYYY-MM-DD',
      'categoryAxis': {
        'parseDates': true
      },
      'chartCursor': {
        'enabled': true
      },
      'chartScrollbar': {
        'enabled': true
      },
      'trendLines': [],
      'graphs': [
        {
          'bullet': 'round',
          'id': 'AmGraph-1',
          'title': 'graph 1',
          'valueField': 'column1'
        },
        {
          'bullet': 'square',
          'id': 'AmGraph-2',
          'title': 'graph 2',
          'valueField': 'column2'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'title': 'Axis title'
        }
      ],
      'allLabels': [],
      'balloon': {},
      'legend': {
        'enabled': true,
        'useGraphSettings': true
      },
      'titles': [
        {
          'id': 'Title-1',
          'size': 15,
          'text': 'Chart Title'
        }
      ],
      'dataProvider': [
        {
          'date': '2014-03-01',
          'column1': 8,
          'column2': 5
        },
        {
          'date': '2014-03-02',
          'column1': 6,
          'column2': 7
        },
        {
          'date': '2014-03-03',
          'column1': 2,
          'column2': 3
        },
        {
          'date': '2014-03-04',
          'column1': 1,
          'column2': 3
        },
        {
          'date': '2014-03-05',
          'column1': 2,
          'column2': 1
        },
        {
          'date': '2014-03-06',
          'column1': 3,
          'column2': 2
        },
        {
          'date': '2014-03-07',
          'column1': 6,
          'column2': 8
        }
      ]
    });

    this.chart.addListener('clickGraphItem', (data) => this.openDialog(data));
  }

  ngOnInit() {
    // this.makeChart();
  }

}
