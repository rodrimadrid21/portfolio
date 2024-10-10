import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    {
        path: "index",
        component: IndexComponent
    },
    {//redireccion
        path: "",
        redirectTo: "index",
        pathMatch: "full"//full cuandp la url es exactamente eso
    }
    
];
