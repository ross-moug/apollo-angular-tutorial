import { Component, OnInit } from "@angular/core";
import { SubmitRepositoryService } from "../submit-repository.service";

@Component({
  templateUrl: "./new-entry.component.html",
})
export class NewEntryComponent implements OnInit {
  constructor(private submitRepositoryService: SubmitRepositoryService) {}

  ngOnInit(): void {
    this.newRepository();
  }

  private newRepository(): void {
    this.submitRepositoryService.submitRepository("apollographql/apollo-client")
      .subscribe(
      ({ data }) => console.log(`Got data: `, data),
      error => console.log(`There was an error sending the query: `, error),
    );
  }
}
