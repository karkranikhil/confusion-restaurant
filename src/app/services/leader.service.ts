import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response} from '@angular/http';
import { LEADERS } from '../shared/leaders';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseUrl';
//import 'rxjs/add/operator/toPromise';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ProcessHttpmsgService} from './process-httpmsg.service';
@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }
  // getLeaders(): Observable<Leader[]> {
  //   return this.http.get(baseURL + 'LEADERS')
  //   .map(res => {return this.processHttpmsgService.extractData(res)})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
  // }
  // getLeader(id: number): Observable<Leader> {
  //   return this.http.get(baseURL + 'LEADERS/'+id)
  //   .map(res => {return this.processHttpmsgService.extractData(res)})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
  // }
  // getFeaturedLeader(): Observable<Leader> {
  //   return this.http.get(baseURL + 'LEADERS?featured=true')
  //   .map(res => {return this.processHttpmsgService.extractData(res)[0]})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
  // }
  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('LEADERS').getList();
  }
  
  getLeader(id: number): Observable<Leader> {
    return  this.restangular.one('LEADERS',id).get();
  }
  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('LEADERS').getList({featured: true})
      .map(LEADERS => LEADERS[0]);
  }
}