
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CodeCamp } from '../entities/codecamp';
import { Observable } from 'rxjs';
import { Talk } from '../entities/talk';
import { Speaker } from '../entities/speaker';

@Injectable({
  providedIn: 'root'
})
export class CodecampService {
  apiUrl = 'https://<your-backend-repo>.azurewebsites.net/api/camps/';

  headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'X-Requested-With': 'XMLHttpRequest'})
  };

  constructor(private http: HttpClient) { }

  getAllCodecamps(): Observable<CodeCamp[]> {
    return this.http.get<CodeCamp[]>(this.apiUrl + '?includeTalks=true');
  }

  getCodecampById(id: number): Observable<CodeCamp> {
    return this.http.get<CodeCamp>(this.apiUrl + id + '?includeTalks=true');
  }

  createCodecamp(codecamp: CodeCamp): Observable<any> {
    return this.http.post<CodeCamp>(this.apiUrl , codecamp, this.headers);
  }

  deleteCodecamp(venue: string): Observable<any> {
    return this.http.delete<CodeCamp>(this.apiUrl  + venue,  this.headers);
  }

  updateCodecamp(codecamp: CodeCamp): Observable<CodeCamp> {
    return this.http.put<CodeCamp>(this.apiUrl + codecamp.venue, codecamp, this.headers);
  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>('https://<your-backend-repo>.azurewebsites.net/api/Speakers');
  }

  addTalk(venue: string, talk: Talk): Observable<any> {
    return this.http.post<Talk>(this.apiUrl  + venue + '/talks', talk, this.headers);
  }

  deleteTalk(id: number, venue: string): Observable<any> {
    return this.http.delete<Talk>(this.apiUrl + venue + '/Talks/'  + id,  this.headers);
  }


}
