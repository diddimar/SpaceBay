import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { StoreListComponent }     from '../store-list/store-list.component';
import { StoreGridComponent }     from '../store-grid/store-grid.component';
import { AdminComponent}          from '../admin/admin.component';  
import { BasketComponent }        from '../basket/basket.component';
import { EditComponent }          from '../edit/edit.component';
import { NewItemComponent }          from '../new-item/new-item.component';
import { DetailComponent }        from '../detail/detail.component';
import { AboutComponent }        from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: StoreListComponent },
  { path: 'grid',  component: StoreGridComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'basket',  component: BasketComponent },
  { path: 'edit/:id',  component: EditComponent },
  { path: 'new',  component: NewItemComponent },
  { path: 'detail/:id',  component: DetailComponent },
  { path: 'about',  component: AboutComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class StoreRoutingModule {}
