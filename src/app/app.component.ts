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
      type: 'gattini orfani',
      rules: '1/3/2',
      flavour: 'www.cassiopei.it'
    },
    {
      title: 'Porro',
      type: 'verdura odiosa',
      rules: '0/0/0 - Il porro perde sempre',
      flavour: 'Solo farfetch\'d ti può volere bene èé'
    },
    {
      title: 'Armadillo',
      type: 'carroarmato carino',
      rules: '6/0/0',
      flavour: 'Stando a Laura, la parte migliore di Wonder Woman'
    },
    {
      title: 'Cavalli Malvagi',
      type: 'cavalli malvagi',
      rules: '1/1/1 - I cavalli malvagi vincono sempre contro le cose carine',
      flavour: 'Il nome completo è \'La confraternita dei cavalli malvagi\''
    },
    {
      title: 'Gufetto',
      type: 'timer carino',
      rules: '1/3/2 - Il gufetto vince se chi lo gioca tergiversa per 1 minuto prima di girarlo',
      flavour: 'Matteo, mi giudichi 20 minuti?'
    },
    {
      title: 'Tagliata',
      type: 'cibo carnoso',
      rules: '3/2/1 - La tagliata vince sempre contro le verdure',
      flavour: 'Un simbolo di Amore'
    },
    {
      title: 'Cooppe',
      type: 'super mercato',
      rules: 'La cooppe perde sempre, ma quando la giochi puoi rubare una carta dal mazzo delle vincitrici',
      flavour: 'La cooppe sei tu'
    },
    {
      title: 'Guerriere Sailor',
      type: 'combattenti che vestono alla marinara',
      rules: '4/2/0 - Le Guerriere Sailor vincono sempre contro il male',
      flavour: 'Sono Sailor Moon e sono venuta qui per punirti in nome della Luna!'
    },
    {
      title: 'Cavalieri dello Zodiaco',
      type: 'combattenti che vestono con armature colorate',
      rules: '4/2/0 - I cavalieri dello zodiaco vincono sempre contro i burroni',
      flavour: 'Accetto la sfida: vuolsi così colà dove si puote ciò che si vuole.'
    },
    {
      title: 'Panaccio',
      type: 'cibo brutto',
      rules: '2/1/3',
      flavour: 'Al contadino non far sapere quanto è buono il panaccio nero della cooppe'
    },
    {
      title: 'Sushi',
      type: 'cibo carino',
      rules: '1/2/3',
      flavour: 'Matteo lo mangia con le mani. Laura lo odia per questo'
    },
    {
      title: 'Rosmarino',
      type: 'cibo immortale',
      rules: '2/2/2',
      flavour: 'No davvero, quella pianta è sopravvissuta persino a noi'
    },
    {
      title: 'Takenoko',
      type: 'gioco carino',
      rules: '0/0/6',
      flavour: 'p\'anda\' di qua, p\'anda\' di là'
    },
    {
      title: 'Abbracci',
      type: 'coccole carine',
      rules: '0/6/0',
      flavour: 'Si abbracciarono così stretti che non rimase spazio per i sentimenti'
    }
  ];

  unique = [
    {
      title: 'Zuko',
      type: 'gatto lungo',
      rules: '6/3/0 - Zuko vince sempre contro il cibo. Se lo nascondi il gioco si ferma finché non viene trovato',
      flavour: 'Zuko si può riassumere in tre parole: affanno, affetto e affettato'
    },
    {
      title: 'Morgana',
      type: 'gatta bassa',
      rules: '0/3/6 - Morgana vince sempre contro gli altri gatti e animali',
      flavour: 'Morgana odia gli altri gatti e celebra il culto della gravità'
    },
    {
      title: 'Azula',
      type: 'gatto bianco occhi blu',
      rules: '0/6/3 - Se lanci Azula da 1 metro di distanza e colpisci l\'altra carta Azula vince',
      flavour: 'Azula aveva il carattere di un Siamese. E ho detto tutto.'
    },
    {
      title: 'Pierone',
      type: 'gatto fiero',
      rules: '3/6/0 - Pierone vince sempre contro chi si rifiuta di baciare la sua carta',
      flavour: 'A coccolarlo sembra non sia mai stato coccolato prima. Non è così.'
    },
    {
      title: 'Broccolo',
      type: 'verdura gelosa',
      rules: '4/2/3 - Broccolo vince sempre contro Alce',
      flavour: '♬ A Broccolo piace Fragola, A Broccolo piace Fragola ♬'
    },
    {
      title: 'Fragola',
      type: 'verdura flirtosa',
      rules: '2/3/4 - Fragola vince sempre contro Broccolo',
      flavour: '♬ A Fragola piace Alce, A Fragola piace Alce ♬'
    },
    {
      title: 'Alce',
      type: 'renna carina',
      rules: '3/4/2 - Alce vince sempre contro Fragola',
      flavour: '♬ Alce vorrebbe starsene in pace, Alce vorrebbe starsene in pace ♬'
    },
    {
      title: 'Il Dottore',
      type: 'eroe alieno',
      rules: '9/9/9 - Il dottore vince sempre contro i Dalek',
      flavour: 'Allons-y!!'
    },
    {
      title: 'Poldone',
      type: 'panda grosso',
      rules: '3/3/3',
      flavour: 'Da poldo si mangia un panino...'
    },
    {
      title: 'Poldino',
      type: 'panda piccolo',
      rules: '4/4/4',
      flavour: '... da poldino si mangia cosa?'
    },
    {
      title: 'Divano',
      type: 'luogo comodo',
      rules: '0/0/0 - Divano perde sempre, ma ti fa sedere dove sta seduto il tuo avversario',
      flavour: 'I nostri corpi entrano nei divani su cui ci sediamo, e loro entrano in noi'
    },
    {
      title: 'Shepard',
      type: 'eroina umana',
      rules: '9/9/9 - Shepard vince sempre contro i Reaper',
      flavour: 'Dovrei andarmene'
    },
    {
      title: 'Festa Medievale',
      type: 'luogo  divertente',
      rules: '0/0/0 - Festa medievale vince se chiedi all\'avversario di sposarti e accetta',
      flavour: 'Pochi sanno che alla festa medievale che Matteo ha rotto un bicchiere'
    },
    {
      title: 'Pen Pen',
      type: 'eroe pinguino',
      rules: '9/9/9 - Pen Pen vince sempre contro gli Angeli',
      flavour: 'La serie sarebbe finita subito se avessero messo lui dentro gli Eva'
    }
  ];

}
