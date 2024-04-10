function gerar(){
    contador=1000000
    while(contador>0){
      contador=contador-1
      htmlDoCertificado=emitirCertificado(inputNome.value)
    }
    
    listalink=[
      'Tabela de classificação: https://codepen.io/lhrscopel/pen/RwBvmLz',
      'Netflix: https://codepen.io/lhrscopel/pen/VwPaZyR',
      'Calculadora simples: https://codepen.io/lhrscopel/pen/VwPYRgx',
      'UBER: https://codepen.io/lhrscopel/pen/abvbYLZ',
      'Botão de like do Facebook: https://codepen.io/lhrscopel/pen/LYpPvqa',
      'Ficha médica modelo: https://codepen.io/lhrscopel/pen/yLNmOJZ',
    ]
    
    contalink=0
    listalinkcomhtml=""
    while(contalink<6){
  
      link=listalink[contalink]
      listalinkcomhtml=`<li>${link}</li>`+ listalinkcomhtml
      contalink=contalink+1
    }
    
    document.body.innerHTML=`
      ${htmlDoCertificado}        
      <ol>
      ${listalinkcomhtml}
      </ol>
  `
    print()
  }
  