import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, CALCULATOR_TOKEN } from "../utils/constant";
import { AuthResult, User } from "../utils/types";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post<AuthResult>(`${BASE_URL}/auth/login`, { username, password })
        .subscribe({
          next: res => {
            const jsonStorage = JSON.stringify({ token: res.token, expiresIn: res.expiresIn });
            
            localStorage.removeItem(CALCULATOR_TOKEN);
            localStorage.setItem(CALCULATOR_TOKEN, jsonStorage);

            resolve(res)
          },
          error: (err) => reject(err)
        })
    })
  }

  register(user: User) {
    return this.http.post<User>(`${BASE_URL}/auth/login`, user);
  }

  logout() {
    localStorage.getItem(CALCULATOR_TOKEN);
  }

}



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storage = localStorage.getItem(CALCULATOR_TOKEN);
    
    if (storage) {
      const user = JSON.parse(storage) as AuthResult;
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + user.token)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}