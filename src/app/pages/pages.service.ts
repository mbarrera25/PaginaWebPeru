import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { iImage } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
token: string = 'IGQWROcTc5d1NsbXNtOVJCNjEtU0RoQWlMdWh3U28tTGJxNEcyX2IwTTVPc05idmd2MkJWaV8xNGhxd0NuTk9rZAUxyalpDcnRVM1VoQl96X3ZAGUWw3V3Y0bnlYLWc4Q1FzTmZAhZADhkUWNSRzFXOHNXVmdkOVNZAUHcZD'
idsImages: string[] = ['','','','']
  constructor(
    private http: HttpClient
  ) { }
  get urlApiIG() {
    return 'https://graph.instagram.com/me/media?fields=id&access_token=' + this.token
  }
  get urlApiImageIG() {
    return 'https://graph.instagram.com/'
  }
  get urlEndApi(){
    return `?fields=id,media_type,media_url,permalink&access_token=${this.token}`
  }

  getImage(){
    return this.http.get(`${this.urlApiImageIG}18263536519075065${this.urlEndApi}`)
  }
  getImagesInstagram(): Observable<iImage[]>{
    return this.http.get(this.urlApiIG).pipe(
      map((response: any) => response.data),
      map( (data: any[]) => data.map(item => item.id)),
      switchMap( ids => {
        const observables = ids.map( id => {
          const apiUrl = `${this.urlApiImageIG}${id}${this.urlEndApi}`
          return this.http.get(apiUrl).pipe(
            catchError(error => {
              // Maneja el error aquí o simplemente retorna un observable con un valor vacío
              console.error('Error en la solicitud de Instagram id:' + id, error);
              return of(null); // Retorna un observable con un valor nulo para la solicitud fallida
            })
          );
        });
          return forkJoin(observables)
      }),
      /*catchError( error => {
        console.error('Error en la solicitud de Instagram', error)
        throw error
      }),*/
      map(( responses: any[] ) => {
        let url = responses.filter(r =>r !== null && r.media_type != 'VIDEO')
        return url.map( (response) => {
          return {
            src: response.media_url,
            permalink: response.permalink
          }
        })
      })
    )
  }

}
