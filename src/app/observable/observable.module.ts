import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableRoutingModule } from './observable-routing.module';
import { FromEventComponent } from './creation-operators/from-event/from-event.component';
import { ObservableComponent } from './observable.component';
import { SharedModule } from '../shared/shared.module';
import { OfComponent } from './creation-operators/of/of.component';
import { RangeComponent } from './creation-operators/range/range.component';
import { IntervalComponent } from './creation-operators/interval/interval.component';
import { ConcatComponent } from './join-creation-operator/concat/concat.component';
import { ForkjoinComponent } from './join-creation-operator/forkjoin/forkjoin.component';
import { MergeComponent } from './join-creation-operator/merge/merge.component';
import { PartitionComponent } from './join-creation-operator/partition/partition.component';
import { MapComponent } from './transformation-operators/map/map.component';
import { ScanComponent } from './transformation-operators/scan/scan.component';
import { DebounceComponent } from './filtering-operators/debounce/debounce.component';
import { DistinctComponent } from './filtering-operators/distinct/distinct.component';
import { FilterComponent } from './filtering-operators/filter/filter.component';
import { TakeComponent } from './filtering-operators/take/take.component';
import { ThrottleComponent } from './filtering-operators/throttle/throttle.component';
import { CatchErrorComponent } from './error-handling-operator/catch-error/catch-error.component';
import { RetryComponent } from './error-handling-operator/retry/retry.component';
import { TapComponent } from './utility-operator/tap/tap.component';
import { DelayComponent } from './utility-operator/delay/delay.component';
import { TimeoutComponent } from './utility-operator/timeout/timeout.component';
import { ToArrayComponent } from './utility-operator/to-array/to-array.component';


@NgModule({
  declarations: [
    FromEventComponent,
    ObservableComponent,
    OfComponent,
    RangeComponent,
    IntervalComponent,
    ConcatComponent,
    ForkjoinComponent,
    MergeComponent,
    PartitionComponent,
    MapComponent,
    ScanComponent,
    DebounceComponent,
    DistinctComponent,
    FilterComponent,
    TakeComponent,
    ThrottleComponent,
    CatchErrorComponent,
    RetryComponent,
    TapComponent,
    DelayComponent,
    TimeoutComponent,
    ToArrayComponent,
    
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    SharedModule
  ],
  exports:[
    ObservableComponent
  ]
})
export class ObservableModule { }
