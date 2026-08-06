import { Routes } from '@angular/router';
import { SiteTemplate } from './components/Templates/site-template/site-template';
import { LoginForm } from './components/login/login-form/login-form';
import { LandingPage } from './components/landing-page/landing-page/landing-page';
import { BuyCarPage } from './pages/buy-car-page/buy-car-page';
import { SellCarPage } from './pages/sell-car-page/sell-car-page';
import { GaragePage } from './pages/garage-page/garage-page';
import { CarDetailsPages } from './pages/car-details-pages/car-details-pages';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    {
        path: "",
        component: SiteTemplate,
        children: [
            {
                path: "dashboard",
                component: LandingPage
            },
            {
                path: "buy",
                component: BuyCarPage
            },
            {
                path: "sell",
                component: SellCarPage
            },
            {
                path: "garage/:carCode",
                component: GaragePage
            },
            {
                path: "car-details/:carCode",
                component: CarDetailsPages
            },
        ]
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "",
        component: LandingPage
    }
];
