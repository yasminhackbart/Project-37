class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    // escreva aqui o código para ocultar os elementos da questão
    question.hide();
    // escreva o código aqui para mudar a cor de fundo
    background("yellow");
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    text("Resultado:",20,200)
    // chame getContestantInfo () aqui
    Contestant.getPlayerInfo()
    // escreva a condição para verificar se contestantInfor não é indefinido
    if (allContestants !== undefined)
    {
      fill("Blue");
      textSize(20)
      text("Verde = Correto e vermelho = Incorreto", 20, 20)  
    
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      {
      fill("Green")
      }
    else
    {
      fill("red");
    }
    mostrar+=30
    text(allContestants[plr].name+allContestants[plr].answer, 130, mostrar)
   }
  }
 }
}