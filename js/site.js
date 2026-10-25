// HGS Dev v2 — abertura, pickup de dinheiro, vitrine de projetos e visualizador
(() => {
  const GH = 'https://hgsdevv-hash.github.io/';

  // c = cor da marca do cliente (etiquetas e bloco atrás da janela), ci = texto sobre ela
  const PROJETOS = [
    { id: 'rei-das-antenas', nome: 'Rei das Antenas', tipo: 'Landing page · Santa Bárbara d\'Oeste', f: 'servicos', url: 'https://oreidasantenas.com.br/', c: '#f2c230',
      txt: 'Medidor de sinal animado, serviços que abrem em cards, nota do Google logo no topo e orçamento direto no WhatsApp. Já no domínio próprio e no Search Console.',
      tags: ['Domínio próprio', 'SEO local', 'Prova social do Google'] },
    { id: 'cabibras', nome: 'Cabibrás', tipo: 'Site institucional · Americana', f: 'servicos', url: GH + 'cabibras/', c: '#d7262e', ci: '#fff',
      txt: 'Caldeiraria e cabinas desde 1996. A abertura monta uma escavadeira de Lego, o seletor troca o tipo de cabina e o processo de fabricação vai da chapa à pintura.',
      tags: ['Abertura animada', 'Seletor interativo', 'Indústria'] },
    { id: 'veneza', nome: 'Veneza Estética Car', tipo: 'Landing page · Sumaré', f: 'beleza', url: GH + 'veneza-estetica-car/', c: '#c9a227',
      txt: 'Estética automotiva que vai até o cliente. Polimento, correção de pintura e vitrificação apresentados com antes e depois, e o agendamento indo pronto para o WhatsApp.',
      tags: ['Antes e depois', 'Delivery', 'WhatsApp'] },
    { id: 'debora', nome: 'Débora Baldin', tipo: 'Site profissional · Americana', f: 'saude', url: GH + 'debora-baldin/', c: '#7d2e4f', ci: '#fff',
      txt: 'Biomédica tricologista. Uma borboleta simétrica se desenha na abertura e vira o ícone do menu; tratamentos explicados sem jargão e avaliação marcada pelo WhatsApp.',
      tags: ['Abertura com a marca', 'Saúde', 'Agendamento'] },
    { id: 'matheus', nome: 'Matheus Silva', tipo: 'Site pessoal · Americana', f: 'saude', url: GH + 'matheus-silva/', c: '#e8452c', ci: '#fff',
      txt: 'Personal trainer de musculação. Tipografia pesada, vídeos dos treinos e o contato indo direto para o Instagram dele.',
      tags: ['Vídeos de treino', 'Tipografia forte', 'Instagram'] },
    { id: 'fagner', nome: 'Fagner Orlandini', tipo: 'Site pessoal · Personal atípico', f: 'saude', url: GH + 'fagner-orlandini/', c: '#2b6fd6', ci: '#fff',
      txt: 'Educação física para TEA, síndrome de Down e TDAH. Um site acolhedor que explica o método para as famílias e mostra o trabalho de verdade.',
      tags: ['Público especial', 'Conteúdo claro', 'WhatsApp'] },
    { id: 'barbaros', nome: 'Barbaros', tipo: 'Landing page · Americana', f: 'beleza', url: GH + 'barbaros/', c: '#c9a24a',
      txt: 'Barbearia da Vila Amorim. "Corte de respeito" em letras enormes, galeria de cortes alinhada e horário marcado pelo WhatsApp.',
      tags: ['Galeria de cortes', 'Horários', 'Agendamento'] },
    { id: 'blanco', nome: 'Blanco & Co.', tipo: 'Landing page · Jardim Mollon', f: 'beleza', url: GH + 'blanco-co/', c: '#e9e4da',
      txt: 'Barbearia como uma pausa para cuidar de si. Clima mais sóbrio, serviços com preço e o botão levando para o agendamento no AppBarber.',
      tags: ['Clima premium', 'AppBarber', 'Serviços'] },
    { id: 'at-doceria', nome: 'AT Doceria', tipo: 'Landing page · Santa Bárbara d\'Oeste', f: 'loja', url: GH + 'at-doceria/', c: '#e0337a', ci: '#fff',
      txt: 'Tortas, bolos e docinhos feitos à mão. Cardápio bonito de rolar e a encomenda saindo pronta no WhatsApp.',
      tags: ['Cardápio', 'Encomendas', 'Delivery'] },
    { id: 'meu-mundo-cristao', nome: 'Meu Mundo Cristão', tipo: 'Vitrine · Envio para todo o Brasil', f: 'loja', url: GH + 'meu-mundo-cristao/', c: '#1f3c88', ci: '#fff',
      txt: 'Gravatas de 1200 fios, camisas e acessórios. Vitrine com os detalhes do tecido e o pedido feito pelo WhatsApp.',
      tags: ['Vitrine', 'Moda', 'Pedido no WhatsApp'] },
    { id: 'limp-brilhe', nome: 'Limp Brilhe', tipo: 'Landing page · Limpeza e pós-obra', f: 'servicos', url: GH + 'limp-brilhe/', c: '#7fc8e8',
      txt: 'A página abre com um rodinho limpando a tela, a janela do topo desembaça quando você passa o dedo e os trabalhos reais aparecem em vídeo.',
      tags: ['Abertura animada', 'Vídeos de trabalhos'] },
    { id: 'rodo-alves', nome: 'Rodo Alves', tipo: 'Landing page · Rondônia', f: 'servicos', url: GH + 'rodo-alves/', c: '#d98a2b',
      txt: 'Um caminhão atravessa a estrada de terra e buzina quando você clica, o seletor de frota troca a carreta e a rota avança conforme a página rola.',
      tags: ['Ilustração interativa', 'Animação na rolagem', 'Cotação'] }
  ];

  const lista = document.getElementById('lista');
  lista.innerHTML = PROJETOS.map((p, i) => `
    <li class="proj reveal" data-f="${p.f}" style="--c:${p.c};--ci:${p.ci || '#000'}">
      <div class="proj-shot">
        <span class="proj-num">${String(i + 1).padStart(2, '0')} / ${String(PROJETOS.length).padStart(2, '0')}</span>
        <div class="window">
          <div class="window-bar"><i></i><i></i><i></i><span>${p.url.replace('https://', '')}</span></div>
          <div class="window-view"><img src="img/proj/${p.id}-full.jpg" alt="Página do site ${p.nome}" loading="lazy" width="720" height="1350"></div>
        </div>
      </div>
      <div>
        <p class="proj-kind">${p.tipo}</p>
        <h3>${p.nome}</h3>
        <p>${p.txt}</p>
        <ul>${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
        <div class="actions">
          <button type="button" class="btn btn-money" data-testar="${i}">Testar aqui</button>
          <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">Ver ao vivo ↗</a>
        </div>
      </div>
    </li>`).join('');

  // ao passar o mouse, a janela rola até o fim da imagem
  lista.querySelectorAll('.window-view img').forEach(img => {
    const medir = () => {
      const caixa = img.parentElement.clientHeight;
      img.style.setProperty('--scroll', `-${Math.max(0, img.clientHeight - caixa)}px`);
    };
    img.complete ? medir() : img.addEventListener('load', medir);
    addEventListener('resize', medir);
  });

  // filtros
  document.querySelectorAll('.filters .chip').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filters .chip').forEach(x => x.classList.toggle('is-on', x === b));
    lista.querySelectorAll('.proj').forEach(li => { li.hidden = b.dataset.f !== 'todos' && li.dataset.f !== b.dataset.f; });
  }));

  // visualizador
  const viewer = document.getElementById('viewer');
  const frame = document.getElementById('viewer-iframe');
  lista.addEventListener('click', e => {
    const b = e.target.closest('[data-testar]');
    if (!b) return;
    const p = PROJETOS[b.dataset.testar];
    document.getElementById('viewer-title').textContent = p.nome;
    document.getElementById('viewer-open').href = p.url;
    frame.src = p.url;
    viewer.showModal();
  });
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => { frame.src = 'about:blank'; });
  viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
  viewer.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => {
    viewer.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('is-on', x === b));
    viewer.classList.toggle('is-cel', b.dataset.mode === 'cel');
  }));

  // revelar na rolagem
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal, .news li, .steps li').forEach(el => { el.classList.add('reveal'); io.observe(el); });

  // pickup de dinheiro: pega, soma no HUD e reaparece
  const pickup = document.querySelector('.pickup');
  const hud = document.querySelector('.hud');
  const cash = document.getElementById('cash');
  let total = 0;
  const somar = (alvo) => {
    const ini = total, fim = alvo, t0 = performance.now();
    const passo = (t) => {
      const k = Math.min(1, (t - t0) / 600);
      cash.textContent = String(Math.round(ini + (fim - ini) * k)).padStart(8, '0');
      if (k < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
    total = alvo;
  };
  pickup.addEventListener('click', e => {
    if (pickup.classList.contains('is-taken')) return;
    const valor = [500, 1000, 2500, 5000][Math.floor(Math.random() * 4)];
    const plus = document.createElement('span');
    plus.className = 'plus';
    plus.textContent = `+R$${valor}`;
    const r = pickup.getBoundingClientRect();
    plus.style.left = `${r.left + r.width / 2 - 50}px`;
    plus.style.top = `${r.top + r.height / 3}px`;
    document.body.appendChild(plus);
    setTimeout(() => plus.remove(), 1000);
    pickup.classList.add('is-taken');
    hud.classList.add('is-on', 'is-bump');
    somar(total + valor);
    setTimeout(() => hud.classList.remove('is-bump'), 300);
    setTimeout(() => pickup.classList.remove('is-taken'), 1800);
  });

  // abertura: sai depois do desenho, ou na hora se a pessoa prefere menos movimento
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pronto = () => document.body.classList.replace('is-loading', 'is-ready');
  setTimeout(pronto, reduz ? 0 : 2200);
})();
