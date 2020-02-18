import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/classes/pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedValue: String = '';

  rouxcool: Pokemon = new Pokemon("1","Rouxcool");
  Bastien: Pokemon = new Pokemon("2","Bastien");
  Mélinaab: Pokemon = new Pokemon("3","Mélinaab");
  Tadmorv: Pokemon = new Pokemon("4","Tadmorv");

  pokemons: Array<Pokemon> = [this.rouxcool,this.Bastien,this.Mélinaab,this.Tadmorv];
  constructor() { }

  ngOnInit() {
  }

}
