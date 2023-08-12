import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {LoadingService} from "../../../@service/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ]
})
export class LoadingComponent implements OnInit {
  count = 0;
  constructor(private readonly loadingService: LoadingService, private readonly spinner: NgxSpinnerService, private cd: ChangeDetectorRef){
  }

  ngOnInit(): void {
    this.spinner.show();
    this.loadingService.getObservable().subscribe(count => {
      this.count = count;
    });
    this.cd.detectChanges();
  }

}
