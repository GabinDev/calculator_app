import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Figure, HistoryCalculator, Unity } from 'src/app/utils/types';
import { ifCorrectText, valid } from 'src/app/utils/Validations';
import { TYPE_CALCUL } from '../../utils/constant';
import { DialogResult } from './dialog-result';
import { MatSelectChange } from '@angular/material/select';
import Calculator from 'src/app/models/Calculator';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

  constructor( public dialogResult: MatDialog) { }

  @Output()
  emitResult = new EventEmitter<HistoryCalculator>();

  @Input()
  figures: Figure[] = [];

  @Input()
  unities: Unity[] = [];

  typeCalcul = TYPE_CALCUL;


  figureValue = '';
  unityValue = 'M';
  typeValue = '';

  formValidation = false;

  square = { cote: '', error: false };
  circle = { rayon: '', error: false };
  rectangle = {
    longueur: '', errorLongueur: false,
    largeur: '', errorLargeur: false,
  };
  trapeze = {
    cote1: '', errorCote1: false,
    cote2: '', errorCote2: false,
    cote3: '', errorCote3: false,
    cote4: '', errorCote4: false,
    Base: '', errorBase: false,
    base: '', errorbase: false,
    hauteur: '', errorHauteur: false,
  };



  ngOnInit(): void { }

  selectFigure({ value }: MatSelectChange) {
    this.resetAllValues();
    if (value == 'Trapeze') {
      this.typeValue = 'PERIMETRE';
    }
  }


  //Handler all onChange text field

  squareChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.square.cote = text;
    if (ifCorrectText(text)) {
      this.square.error = false;
    } else { this.square.error = true; }
    this.checkValidation()
    console.log(this.formValidation)
  }

  circleChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.circle.rayon = text;
    if (ifCorrectText(text)) {
      this.circle.error = false;
    } else { this.circle.error = true; }
    this.checkValidation()
  }

  rectangleLongueurChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.rectangle.longueur = text;
    if (ifCorrectText(text)) {
      this.rectangle.errorLongueur = false;
    } else { this.rectangle.errorLongueur = true; }
    this.checkValidation()
  }

  rectangleLargeurChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.rectangle.largeur = text;
    if (ifCorrectText(text)) {
      this.rectangle.errorLargeur = false;
    } else { this.rectangle.errorLargeur = true; }
    this.checkValidation()
  }

  trapezeCote1Change(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.cote1 = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorCote1 = false;
    } else { this.trapeze.errorCote1 = true; }
    this.checkValidation()
  }

  trapezeCote2Change(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.cote2 = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorCote2 = false;
    } else { this.trapeze.errorCote2 = true; }
    this.checkValidation()
  }

  trapezeCote3Change(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.cote3 = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorCote3 = false;
    } else { this.trapeze.errorCote3 = true; }
    this.checkValidation()
  }

  trapezeCote4Change(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.cote4 = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorCote4 = false;
    } else { this.trapeze.errorCote4 = true; }
    this.checkValidation()
  }

  trapezeBaseChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.Base = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorBase = false;
    } else { this.trapeze.errorBase = true; }
    this.checkValidation()
  }

  trapezebaseChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.base = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorbase = false;
    } else { this.trapeze.errorbase = true; }
    this.checkValidation()
  }

  trapezeHauteurChange(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.trapeze.hauteur = text;
    if (ifCorrectText(text)) {
      this.trapeze.errorHauteur = false;
    } else { this.trapeze.errorHauteur = true; }
    this.checkValidation()
  }



  resetAllValues() {
    this.square = { cote: '', error: false };
    this.circle = { rayon: '', error: false };
    this.rectangle = {
      longueur: '', errorLongueur: false,
      largeur: '', errorLargeur: false,
    };
    this.trapeze = {
      cote1: '', errorCote1: false,
      cote2: '', errorCote2: false,
      cote3: '', errorCote3: false,
      cote4: '', errorCote4: false,
      Base: '', errorBase: false,
      base: '', errorbase: false,
      hauteur: '', errorHauteur: false,
    };
    this.formValidation = false;
  }


  checkValidation() {
    switch (this.figureValue) {
      case 'Carree':
        this.formValidation = valid(this.square.cote);
        break;
      case 'Cercle':
        this.formValidation = valid(this.circle.rayon);
        break;
      case 'Rectangle':
        this.formValidation = valid(this.rectangle.longueur) && valid(this.rectangle.largeur)
        break;
      case 'Trapeze':
        if (this.typeValue == 'PERIMETRE') {
          this.formValidation = valid(this.trapeze.cote1) && valid(this.trapeze.cote2) &&
            valid(this.trapeze.cote3) && valid(this.trapeze.cote4);
        } else {
          this.formValidation = this.trapeze.Base !== '' && this.trapeze.base !== ''
            && this.trapeze.hauteur !== ''
        }
        break;

      default:
        this.formValidation = false;
        break;
    }
  }


  onClear() {
    this.resetAllValues();
  }


  onCalculate(event : Event) {
    
    event.preventDefault();

    let value = this.calculate();


    this.emitResult.emit({
      id: new Date(Date.now()).getTime(),
      value,
      figure: this.figureValue,
      typeCalcul: this.typeValue,
      unity: this.unityValue
    });


    const dialogRef = this.dialogResult.open(DialogResult, {
      width: '400px',
      data: { value, unityText: `${this.unityValue} (${this.unities.find(({ value }) => this.unityValue == value)?.label})` }
    })
  }





  calculate(): number {
    const calcul = new Calculator(this.unityValue);
    let value = 0;

    switch (this.figureValue) {
      case 'Carree':
        value = this.typeValue == 'AIRE' ? calcul.squareArea(Number(this.square.cote)) : calcul.squarePerimeter(Number(this.square.cote));
        break;
      case 'Cercle':
        value = this.typeValue == 'AIRE' ? calcul.squareArea(Number(this.circle.rayon)) : calcul.circlePerimeter(Number(this.circle.rayon));
        break;
      case 'Rectangle':
        value = this.typeValue == 'AIRE' ? calcul.rectangleArea(Number(this.rectangle.longueur), Number(this.rectangle.largeur)) :
          calcul.rectanglePerimeter(Number(this.rectangle.longueur), Number(this.rectangle.largeur));
        break;
      case 'Trapeze':
        value = this.typeValue == 'AIRE' ? calcul.trapezeArea(Number(this.trapeze.Base), Number(this.trapeze.base), Number(this.trapeze.hauteur)) :
          calcul.trapezePerimeter(Number(this.trapeze.cote1), Number(this.trapeze.cote2), Number(this.trapeze.cote3), Number(this.trapeze.cote4));
        break;
    }
    return value;
  }

}


