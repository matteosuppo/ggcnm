import { Component } from '@angular/core';

// Forza/Dolcezza/Furbizia

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
      rules: '1/3/0 - Batte sempre il Ghiro',
      flavour: 'I pinguini vanno in giro, vanno in giro con il ghiro...',
    },
    {
      title: 'Ghiro',
      type: 'pallina carina',
      rules: '1/2/1 - Batte sempre il Tonno',
      flavour: '...ma il ghiro ha sempre sonno ...'
    },
    {
      title: 'Riccio',
      type: 'puntaspilli carino',
      rules: '0/3/1',
      flavour: 'Il riccio non si fa mica fottere'
    },
    {
      title: 'Miao',
      type: 'assassino carino',
      rules: '0/2/2',
      flavour: 'Meeeeeeeeeeeeowrrr'
    },
    {
      title: 'Polvere',
      type: 'sporcizia carina',
      rules: '0/4/0',
      flavour: '"Ehi! Perditempo! Volete tornare semplice fuliggine?"'
    },
    {
      title: 'Tonno',
      type: 'cibo in scatola',
      rules: '4/0/0 - Batte sempre il Pinguino',
      flavour: '... e allora se ne vanno con il tonno'
    },
    {
      title: 'Pizza',
      type: 'cibo piatto',
      rules: '3/1/0',
      flavour: 'Anche le situazioni peggiori migliorano con una buona pizza'
    },
    {
      title: 'Kebab',
      type: 'cibo salutare',
      rules: '2/0/2',
      flavour: 'Il kebab è una porcata misteriosamente senza porco'
    },
    {
      title: 'Hummus',
      type: 'cibo cremoso',
      rules: '1/2/1',
      flavour: 'No, non humus.'
    },
    {
      title: 'Gelato',
      type: 'cibo dietetico',
      rules: '0/1/3',
      flavour: 'Non si può comprare la felicità, ma il gelato sì, ed è un po\' la stessa cosa'
    },
    {
      title: 'Cavolo',
      type: 'verdura misteriosa',
      rules: '2/1/1',
      flavour: '... e questa cos\'è? La verdura de lo dimonio?'
    },
    {
      title: 'Pachino',
      type: 'verdura esotica',
      rules: '0/2/2',
      flavour: 'Alla fine è come un piccolo paco'
    },
    {
      title: 'Erre',
      type: 'lettera immaginaria',
      rules: '0/4/0',
      flavour: 'Libeva Bavnaba!'
    },
    {
      title: 'Ci',
      type: 'lettera muta',
      rules: '2/0/2',
      flavour: '\'à de \'aroli'
    }
  ];

  rare = [
    {
      title: 'Cassiopei',
      type: 'gattini orfani'
    },
    {
      title: 'Porro'
    },
    {
      title: 'Armadillo'
    },
    {
      title: 'Posatino'
    },
    {
      title: 'Gufetto'
    },
    {
      title: 'Tagliata'
    },
    {
      title: 'Cooppe'
    },
    {
      title: 'Guerriere Sailor'
    },
    {
      title: 'Cavalieri dello zodiaco'
    },
    {
      title: 'Panaccio'
    },
    {
      title: 'Sushi'
    },
    {
      title: 'Rosmy'
    },
    {
      title: 'Takenoko'
    },
    {
      title: 'Conbracci'
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
      title: 'Pierone',
      type: 'gatto fiero'
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
    },
    {
      title: 'Il dottore'
    },
    {
      title: 'Poldone'
    },
    {
      title: 'Poldino'
    },
    {
      title: 'Divano'
    },
    {
      title: 'Shepard'
    },
    {
      title: 'Festa Medievale'
    },
    {
      title: 'Penpen'
    }
  ];

}
