import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { take } from 'rxjs';
import { FromEventComponent } from './creation-operators/from-event/from-event.component';
import { IntervalComponent } from './creation-operators/interval/interval.component';
import { OfComponent } from './creation-operators/of/of.component';
import { RangeComponent } from './creation-operators/range/range.component';
import { CatchErrorComponent } from './error-handling-operator/catch-error/catch-error.component';
import { RetryComponent } from './error-handling-operator/retry/retry.component';
import { DebounceComponent } from './filtering-operators/debounce/debounce.component';
import { DistinctComponent } from './filtering-operators/distinct/distinct.component';
import { FilterComponent } from './filtering-operators/filter/filter.component';
import { TakeComponent } from './filtering-operators/take/take.component';
import { ThrottleComponent } from './filtering-operators/throttle/throttle.component';
import { ConcatComponent } from './join-creation-operator/concat/concat.component';
import { ForkjoinComponent } from './join-creation-operator/forkjoin/forkjoin.component';
import { MergeComponent } from './join-creation-operator/merge/merge.component';
import { PartitionComponent } from './join-creation-operator/partition/partition.component';
import { ObservableComponent } from './observable.component';
import { MapComponent } from './transformation-operators/map/map.component';
import { ScanComponent } from './transformation-operators/scan/scan.component';
import { DelayComponent } from './utility-operator/delay/delay.component';
import { TapComponent } from './utility-operator/tap/tap.component';
import { TimeoutComponent } from './utility-operator/timeout/timeout.component';
import { ToArrayComponent } from './utility-operator/to-array/to-array.component';

const routes: Routes = [
  {
  path:'',
  component:ObservableComponent,
  }, 
  {
    path:'creation/fromevent',
    component:FromEventComponent
  },
  {
    path:'creation/of',
    component:OfComponent
  },
  {
    path:'creation/range',
    component:RangeComponent
  },
  {
    path:'creation/interval',
    component:IntervalComponent
  },
  {
    path:'join-creation/concat',
    component:ConcatComponent
  },
  {
    path:'join-creation/forkjoin',
    component:ForkjoinComponent
  },
  {
    path:'join-creation/merge',
    component:MergeComponent
  },
  {
    path:'join-creation/partition',
    component:PartitionComponent
  },
  {
    path:'transformation/map',
    component:MapComponent
  },
  {
    path:'transformation/scan',
    component:ScanComponent
  },
  {
    path:'filtering/debounce',
    component:DebounceComponent
  },
  {
    path:'filtering/distinct',
    component:DistinctComponent
  },
  {
    path:'filtering/filter',
    component:FilterComponent
  },
  {
    path:'filtering/take',
    component:TakeComponent
  },
  {
    path:'filtering/throttle',
    component:ThrottleComponent
  },
  {
    path:'error-handling/catchError',
    component:CatchErrorComponent
  },
  {
    path:'error-handling/retry',
    component:RetryComponent
  },
  {
    path:'utility/tap',
    component:TapComponent
  },
  {
    path:'utility/delay',
    component:DelayComponent
  },
  {
    path:'utility/timeout',
    component:TimeoutComponent
  },
  {
    path:'utility/toArray',
    component:ToArrayComponent
  },


  {
    path:'**',
    redirectTo:'/observable',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
