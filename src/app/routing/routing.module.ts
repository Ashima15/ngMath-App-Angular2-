import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { DivideComponent } from '../divide/divide.component';
import { MinusComponent } from '../minus/minus.component';
import { MultiplyComponent } from '../multiply/multiply.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlusComponent } from '../plus/plus.component';
import { SettingsComponent } from '../settings/settings.component';

const routes : Routes = [
    {
        path: '',
        component : SettingsComponent
    },
    {
        path : 'divide',
        component : DivideComponent
    },
    {
        path : 'minus',
        component : MinusComponent
    },
    {
        path : 'multiply',
        component : MultiplyComponent
    },
    {
        path : 'plus',
        component : PlusComponent
    },
    {
        path : 'settings',
        component : SettingsComponent
    }   
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}
export const routingComponents = [DivideComponent, MinusComponent, NavbarComponent, MultiplyComponent, PlusComponent, SettingsComponent];
