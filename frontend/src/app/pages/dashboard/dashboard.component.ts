import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {Router} from '@angular/router';
interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  animation: string;
  link: string
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  emailCard: CardSettings = {
    title: 'Machines',
    iconClass: 'nb-layout-one-column',
    type: 'danger',
    animation: 'shake',
    link:'./pages/machines/machine'
  };
  settingsCard: CardSettings = {
    title: 'Work-Order',
    iconClass: 'nb-checkmark-circle',
    type: 'success',
    animation:'zoom',
    link:'./pages/work-order/workorder'
  };
  chatRoomCard: CardSettings = {
    title: 'Stock',
    iconClass: 'nb-e-commerce',
    type: 'info',
    animation: 'pulse',
    link:'./pages/stock/stock-table'
  };
  chartsCard: CardSettings = {
    title: 'Chart',
    iconClass: 'nb-bar-chart',
    type: 'warning',
    animation: 'zoom',
    link:'./pages/dashboard'
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.emailCard,
    this.settingsCard,
    this.chatRoomCard,
    this.chartsCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.emailCard,
        type: 'warning',
      },
      {
        ...this.settingsCard,
        type: 'primary',
      },
      {
        ...this.chatRoomCard,
        type: 'danger',
      },
      {
        ...this.chartsCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private router: Router) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }
  links(link) {
    this.router.navigate([link])
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
