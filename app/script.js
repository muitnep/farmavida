const application = new Vue({
  el: '#app',
  data: {
    companyName: 'FarmaVida',
    vaccinesColection: [
      {
        id: 1,
        name: 'Dengue',
        description:
          'Previne a infecção causada pelos quatro sorotipos de dengue e tem por objetivo reduzir os casos graves da doença'
      },
      {
        id: 2,
        name: 'Influenza',
        description:
          'Essa vacina é uma das mais vendidas em farmácias. Trata-se de vacina inativada.'
      },
      {
        id: 3,
        name: 'Meningococica B',
        description:
          'A vacina previne meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo do tipo B.'
      },
      {
        id: 4,
        name: 'Lorem',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .'
      }
    ],
    depositionsCollection: [
      {
        id: 1,
        client: 'Joana',
        opinion: 'Excelente farmácia. A melhor que conheci.'
      },
      {
        id: 2,
        client: 'Pedro',
        opinion: 'Todo ano eu venho tomar a vacina de gripe.'
      },
      { id: 3, client: 'Ana', opinion: 'Profissionais excelentes.' },
      { id: 4, client: 'Goku', opinion: 'Oi, eu sou o Goku.' }
    ]
  }
})
