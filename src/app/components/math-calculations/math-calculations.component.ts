import { Component, OnInit } from '@angular/core';
import { MathServiceService } from 'src/app/service/math-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-math-calculations',
  templateUrl: './math-calculations.component.html'
})
export class MathCalculationsComponent implements OnInit {

  radiusForm: FormGroup = new FormGroup({
    radius: new FormControl("")
  });

  result1: string = '';
  result2: string = '';

  constructor(private mathService: MathServiceService) { }

  ngOnInit(): void {
  }

  aeraCalcul() {
    this.mathService.calculCircleArea(this.radiusForm.value.radius).subscribe(
      (response: any) => {
        console.log(response)
        this.result1 = response;
      }
    )
  }

  perimeterCalcul() {
    this.mathService.calculCirclePerimeter(this.radiusForm.value.radius).subscribe(
      (response: any) => {
        console.log(response)
        this.result2 = response;
      }
    )
  }
}