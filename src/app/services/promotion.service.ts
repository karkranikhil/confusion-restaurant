import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseUrl';
import { RestangularModule, Restangular } from 'ngx-restangular';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  // getPromotions(): Observable<Promotion[]> {
  //   return this.http.get(baseURL + 'PROMOTIONS')
  //   .map(res => {return this.processHttpmsgService.extractData(res)})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
  // }

  // getPromotion(id: number): Observable<Promotion>{
  //   return this.http.get(baseURL + 'PROMOTIONS/'+id)
  //   .map(res => {return this.processHttpmsgService.extractData(res)})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
  // }

  // getFeaturedPromotion(): Observable<Promotion> {
  //   return this.http.get(baseURL + 'PROMOTIONS?featured=true')
  //   .map(res => {return this.processHttpmsgService.extractData(res)[0]})
  //   .catch(error=>{return this.processHttpmsgService.handleError(error)});

  // }
  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('PROMOTIONS').getList();
  }
  
  getPromotion(id: number): Observable<Promotion> {
    return  this.restangular.one('PROMOTIONS',id).get();
  }
  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('PROMOTIONS').getList({featured: true})
      .map(PROMOTIONS => PROMOTIONS[0]);
  }
}