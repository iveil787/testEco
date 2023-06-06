import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableService} from "../../../services/table.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ResponseEco, ResultData, Settings, SettingsValue, Structure, STRUCTURE} from "../../../model/model";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService],
})
export class TableComponent implements OnInit, OnDestroy {
  expandSet = new Set<number>();
  resultData: ResultData[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private tableService: TableService) {
  }

  ngOnInit() {
    this.getAll()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  getAll() {
    this.subscription = this.tableService.getAllData()
      .subscribe((result: ResponseEco) => {
        this.getUniqueSubdivisionIdsWithPositions(result)
      })
  }

  getUniqueSubdivisionIdsWithPositions(response: ResponseEco): any {

    const {
      SUB: SUB,
      POS: POS,
      STRUCTURE: STRUCTURE,
    }: Structure = response.result.structure

    const {settings}: Settings = response.result.settings;

    this.resultData = Object.keys(SUB)
      .map((subdivisionId, index) => ({
        labelSubdivision: SUB[subdivisionId],
        ufSubdivisionId: Number(subdivisionId),
        ufPositionId: this.createSubdivision(settings, {STRUCTURE, POS, SUB}, Number(subdivisionId), index),
      }));
  }

  createSubdivision(settings: SettingsValue, {STRUCTURE, POS}: Structure, subdivisionId: number, index: number,) {
    return STRUCTURE.filter((item: STRUCTURE) => item.UF_SUBDIVISION_ID === subdivisionId && item.UF_POSITION_ID !== 0)
      .map((item: STRUCTURE) => ({
        labelPosition: POS[String(item.UF_POSITION_ID)],
        parentUfSubdivisionId: subdivisionId,
        settings: this.getSettingsById(settings,
          `${subdivisionId}-${STRUCTURE[index].UF_DEPARTMENT_ID}-${item.UF_POSITION_ID}`)
      }))
  }

  getSettingsById(item: SettingsValue, settingsId: string): [string | number] {
    return item[settingsId] ? item[settingsId].UF_LNPA_ID.value : ['EMPTY']
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
