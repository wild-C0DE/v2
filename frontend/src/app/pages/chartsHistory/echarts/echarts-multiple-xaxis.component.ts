import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements OnDestroy {
  options: any = {};
  themeSubscription: any;
  source: object = Array ;
  
  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/historyChart").subscribe(data=>{     
      this.source = data     
      const helper = this.source
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
      
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
  
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.info],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['2019 Correction', '2020 Correction'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.info,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Correction  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '2020-1',
              '2020-2',
              '2020-3',
              '2020-4',
              '2020-5',
              '2020-6',
              '2020-7',
              '2020-8',
              '2020-9',
              '2020-10',
              '2020-11',
              '2020-12',
            ],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Correction  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '2019-1',
              '2019-2',
              '2019-3',
              '2019-4',
              '2019-5',
              '2019-6',
              '2019-7',
              '2019-8',
              '2019-9',
              '2019-10',
              '2019-11',
              '2019-12',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        
        series: [
          {
            name: '2019 Correction',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
          },
          {
            name: '2020 Correction',
            type: 'line',
            smooth: true,
            data: helper ,
          },
        ],
      };
    })
   } )
  
   
   
  }

 
  constructor(private theme: NbThemeService,private http: HttpClient) {
  }

  

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
