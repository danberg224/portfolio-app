import { Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: WeatherComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
