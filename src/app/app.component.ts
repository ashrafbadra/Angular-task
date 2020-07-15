import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deltatask';
  radio: any[];

  ngOnInit() {
    this.radio = [{ station: "Putin FM ", number: '66.6' }, { station: "Dribble FM", number: '101.2' }
      , { station: "Doge FM ", number: '99.4' }, { station: "Ballads FM ", number: '87.1' },
    { station: "Maximum FM ", number: '142.2' }]

  }
  slide(event) {
    document.getElementById("demo").innerHTML = event.target.innerHTML;
    $(".finish").show();
    $(event.target).siblings('.show-one').slideToggle(500)
    $(event.target).parent().siblings().children('.show-one').slideUp();
  }

}
