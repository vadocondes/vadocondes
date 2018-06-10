import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const pathCountries = 'https://api.dev.portnet.platform.gtd.eu/api/tp/ps/1.0.0/regimes';

const pathAPI = 'https://data-agenda.wedeploy.io';
const endPointTalks= '/talks';

@Injectable()
export class TalksProvider {

  constructor(public http: HttpClient) {

  }

  getAllTalks() {

    /* let headers = new HttpHeaders();
     headers = headers.set('Authorization', 'Bearer 2e5eb5a5-698f-347e-b21a-45ac0743d85b')
       .set('Accept-Language', 'fr')
       .set('Content-Type', 'application/json; charset=UTF-8')
     return this.http.get(pathCountries, { headers });*/

    return this.http.get(pathAPI + endPointTalks);

  }

  save(title) {
    return this.http.post(pathAPI + endPointTalks, { title });
  }


}
