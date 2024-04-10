var p1 = {
    nome: "Player 1",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var p2 = {
    nome: "Player 2",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var p3 = {
    nome: "Player 3",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var p4 = {
    nome: "Player 4",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  p1.pontos = calculaPts(p1);
  p2.pontos = calculaPts(p2);
  p3.pontos = calculaPts(p3);
  p4.pontos = calculaPts(p4);
  
  function calculaPts(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  var jogadores = [p1, p2, p3, p4];
  
  exibeJogadores(jogadores);
  
  function exibeJogadores(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
      html += "<tr><td>" + jogadores[i].nome + "</td>";
      html += "<td>" + jogadores[i].vitorias + "</td>";
      html += "<td>" + jogadores[i].empates + "</td>";
      html += "<td>" + jogadores[i].derrotas + "</td>";
      html += "<td>" + jogadores[i].pontos + "</td>";
      html +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      html +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      html +=
        "<td><button onClick='adicionarDerrota(" +
        i +
        ")'>Derrota</button></td></tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
  }
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPts(jogador);
    exibeJogadores(jogadores);
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPts(jogador);
    exibeJogadores(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadores(jogadores);
  }
  