import { Component } from '@angular/core';

import { DeviceapiService } from './services/deviceapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeviceapiService]
})
export class AppComponent {
  title = 'app';
  fingers = ['Pulgar', 'Indice', 'Medio', 'Anular', 'Meñique'];

  constructor(private deviceApi: DeviceapiService) { }

  public sendData(): void {
    this.deviceApi.sendInformationToDevice(JSON.stringify(this.fingers));
  }
}
