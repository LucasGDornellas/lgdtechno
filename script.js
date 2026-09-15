const form = document.getElementById('formWhatsapp');


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  const telefoneDestino = '5511998541672';

  const textoFormatado = `Olá! Me chamo ${nome}.
Gostaria de um orçamento para: *${servico}*.
Detalhes: ${mensagem}`;

  const textoCodificado = encodeURIComponent(textoFormatado);

  const linkWhatsapp = `https://wa.me/${5511998541672}?text=${textoCodificado}`;
  window.open(linkWhatsapp, '_blank');
});