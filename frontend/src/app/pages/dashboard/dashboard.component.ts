import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
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
    title: 'Email',
    iconClass: 'nb-email',
    type: 'danger',
  };
  settingsCard: CardSettings = {
    title: 'Settings',
    iconClass: 'nb-gear',
    type: 'success',
  };
  chatRoomCard: CardSettings = {
    title: 'Chat Room',
    iconClass: 'nb-compose',
    type: 'info',
  };
  chartsCard: CardSettings = {
    title: 'Charts',
    iconClass: 'nb-bar-chart',
    type: 'warning',
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
              private solarService: SolarData) {
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

  ngOnDestroy() {
    this.alive = false;
  }
}
