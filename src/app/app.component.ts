import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorArray = [];

  selectArray(){
  for(let x = 0; x < 10; x++){
    const g = (Math.floor(Math.random() * 8)) + 1;
    if(g === 1){
      this.colorArray.push('orange');
    } else if (g === 2){
      this.colorArray.push('blue');
    } else if (g === 3){
      this.colorArray.push('pink');
    } else if (g ===4){
      this.colorArray.push('teal');
    } else if (g === 5){
      this.colorArray.push('red');
    } else if (g === 6){
      this.colorArray.push('yellow') ;
    } else if (g === 7){
      this.colorArray.push('green');
    }
  }
}

  ngOnInit() {
    this.selectArray();
  }
  
  onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
  }



}