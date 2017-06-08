import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  common = [
    {
      title: 'Pinguino',
      type: 'uccello carino',
      rules: 'Batte sempre il Ghiro',
      flavour: 'I pinguini vanno in giro, vanno in giro con il ghiro...',
    },
    {
      title: 'Ghiro',
      type: 'pallina carina',
      rules: 'Batte sempre il Tonno',
      flavour: '...ma il ghiro ha sempre sonno ...'
    },
    {
      title: 'Riccio',
      type: 'puntaspilli carino'
    },
    {
      title: 'Miao',
      type: 'assassino carino'
    },
    {
      title: 'Polvere',
      type: 'sporcizia carina'
    },
    {
      title: 'Tonno',
      type: 'cibo in scatola',
      rules: 'Batte sempre il Pinguino',
      flavour: '... e allora se ne vanno con il tonno'
    },
    {
      title: 'Pizza',
      type: 'cibo piatto'
    },
    {
      title: 'Kebab',
      type: 'cibo salutare'
    },
    {
      title: 'Hummus',
      type: 'cibo cremoso'
    },
    {
      title: 'Gelato',
      type: 'cibo dietetico'
    },
    {
      title: 'Cavolo',
      type: 'verdura misteriosa',
      rules: '',
      flavour: '... e questa cos\'è? La verdura de lo dimonio?'
    },
    {
      title: 'Pachino',
      type: 'verdura esotica'
    },
    {
      title: 'Erre',
      type: 'lettera immaginaria'
    },
    {
      title: 'Ci',
      type: 'lettera muta'
    },
    {
      title: ''
    },
    {
      title: ''
    },
    {
      title: ''
    },
    {
      title: ''
    }
  ];

  rare = [
    {
      title: 'Cassiopei',
      type: 'gattini orfani'
    }
  ];

  unique = [
    {
      title: 'Zuko',
      type: 'gatto lungo',
    },
    {
      title: 'Morgana',
      type: 'gatta bassa'
    },
    {
      title: 'Azula',
      type: 'gatto bianco occhi blu'
    },
    {
      title: 'Broccolo',
      type: 'verdura gelosa'
    },
    {
      title: 'Fragola',
      type: 'verdura flirtosa'
    },
    {
      title: 'Alce',
      type: 'renna carina'
    }
  ];

}
