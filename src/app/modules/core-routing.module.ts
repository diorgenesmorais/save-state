import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransferComponent } from "./transfer/transfer.component";
import { CommonModule } from "@angular/common";
import { TransferModule } from "./transfer/transfer.module";
import { HomeComponent } from './home/home.component';
import { HomeModule } from "./home/home.module";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'transferencias', component: TransferComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        HomeModule,
        TransferModule
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}