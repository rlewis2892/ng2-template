import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {AboutComponent} from "./components/about-component";
import {ContactComponent} from "./components/contact-component";

export const allAppComponents = [HomeComponent, AboutComponent, ContactComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "about", component: AboutComponent},
	{path: "contact", component: ContactComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);