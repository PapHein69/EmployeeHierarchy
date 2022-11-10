import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {registerLicense} from '@syncfusion/ej2-base';

if (environment.production) {
  enableProdMode();
}

registerLicense("Mgo+DSMBaFt/QHNqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iSH5VdkFhUH9cdHdRRA==;ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjX39acn1VRGRZVEY=;NRAiBiAaIQQuGjN/V0Z+X09EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERiWXledHZcRmJYVkB0;Mgo+DSMBMAY9C3t2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjX39acn1VRGRVVEY=")

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
