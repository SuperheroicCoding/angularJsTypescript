import {IOnInit} from 'angular';
export const appComponent = {
  template: `
    <div>
      <h2>Cara KT!!! {{ $ctrl.date | date }}</h2>
    </div>
  `,
  controller: class AppComponent implements IOnInit {
    private date: number;

    $onInit() {
      this.date = Date.now();
    }

  }
};