import { Component } from "@angular/core";

@Component({
  //selector: ".app-servers",
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  /* template: `<h3>Servers Component</h3>
    <hr />
    <div class="first"><app-server></app-server></div>

    <div class="second"><app-server></app-server></div>

    <div class="third"><app-server></app-server></div>`,*/
  styleUrls: ["./servers.component.css"]
  /*styles: [
    `
      h3 {
        color: red;
        font-size: 24px;
      }

      .first {
        font-size: 20px;
        font-weight: bold;
      }

      .second {
        font-size: 20px;
        font-weight: lighter;
      }

      .third {
        color: green;
      }
    `
  ]*/
})
export class ServersComponent {}
