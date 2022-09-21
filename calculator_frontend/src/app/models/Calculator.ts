import { UNITY_VALUE } from "../utils/constant";

export default class Calculator {
  public UNITY = 1;

  constructor(public unity: string) {
    this.buildUnity();
  }



  buildUnity() {
    switch (this.unity) {
      case UNITY_VALUE.KM:
        this.UNITY = 0.001;
        break;
      case UNITY_VALUE.M:
        this.UNITY = 1;
        break;
      case UNITY_VALUE.DM:
        this.UNITY = 10;
        break;
      case UNITY_VALUE.CM:
        this.UNITY = 100;
        break;
    }
  }

  rectangleArea(longueur: number, largeur: number) {
    return this.UNITY * (longueur * largeur);
  }

  rectanglePerimeter(longueur: number, largeur: number) {
    return this.UNITY * (2 * (longueur + largeur));
  }

  squarePerimeter(cote: number) {
    return this.rectangleArea(cote, cote);
  }

  squareArea(cote: number) {
    return this.UNITY * Math.pow(cote, 2 );
  }

  circleArea(rayon: number) {
    return this.UNITY * Math.PI * Math.pow(rayon, 2);
  }

  circlePerimeter(rayon: number) {
    return this.UNITY * (2 * Math.PI * rayon);
  }


  trapezeArea(Base: number, base: number, hauteur: number) {
    return this.UNITY * ((Base + base) * hauteur / 2);
  }

  trapezePerimeter(cote1: number, cote2: number, cote3: number, cote4: number) {
    return this.UNITY * (cote1 + cote2 + cote3 + cote4);
  }

}