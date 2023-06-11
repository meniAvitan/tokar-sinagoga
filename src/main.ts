import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { AppRoutes } from "./app/routes/app.router";

window.onload = function () {
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
  ],
}).catch(err => console.error(err))
}
