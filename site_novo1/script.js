// URL do JSON fornecida por você
const JSON_URL = "https://eng-pablo-tec.github.io/Aulas-Extras/cursos.json";

// elementos do DOM
const grid = document.getElementById('grid');
const status = document.getElementById('status');
const searchInput = document.getElementById('search');
const reloadBtn = document.getElementById('reload');

let cursos = []; // guardamos os dados aqui

// função para criar um cartão HTML para cada curso
function criarCard(curso) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = curso.nome || "Sem nome";

  const link = document.createElement('a');
  link.className = 'link';
  if (curso.link && curso.link !== "#") {
    link.href = curso.link;
    link.textContent = 'Abrir link';
    link.target = '_blank';
    link.rel = 'noopener';
  } else {
    link.textContent = 'Sem link disponível';
    link.classList.add('empty');
    link.href = '#';
  }

  card.appendChild(title);
  card.appendChild(link);

  return card;
}

// função para renderizar os cursos na tela com opção de filtro por texto
function renderizar(filtro = '') {
  grid.innerHTML = '';
  const filtroMinus = filtro.trim().toLowerCase();

  const filtrados = cursos.filter(c => c.nome.toLowerCase().includes(filtroMinus));
  if (filtrados.length === 0) {
    status.textContent = 'Nenhum curso encontrado.';
  } else {
    status.textContent = `${filtrados.length} curso(s) exibido(s).`;
  }

  // adicionar cartões
  filtrados.forEach(curso => {
    const card = criarCard(curso);
    grid.appendChild(card);
  });
}

// função para buscar o JSON (com fallback usando JSON embutido se der erro)
async function carregarCursos() {
  status.textContent = 'Carregando...';
  grid.innerHTML = '';
  try {
    const resp = await fetch(JSON_URL, { cache: "no-store" });
    if (!resp.ok) throw new Error('Erro ao buscar o JSON: ' + resp.status);
    const data = await resp.json();
    if (!Array.isArray(data)) throw new Error('JSON recebido não é um array');
    cursos = data;
    renderizar(searchInput.value);
  } catch (err) {
    console.error(err);
    // fallback: usar um pequeno JSON embutido (o que você mandou)
    status.textContent = 'Falha ao carregar JSON externo. Usando dados locais (fallback).';
    cursos = [
      { "nome": "(31/08/2025)- Teoria Fundamentos de Teste de Sistemas", "link": "#" },
      { "nome": "(31/08/2025)-Modelagem de Sistemas", "link": "#" },
      { "nome": "(31/08/2025)-Scrum", "link": "#" },
      { "nome": "HTML CSS 1", "link": "https://vimeo.com/1090682476?share=copy" },
      { "nome": "(31/08/2025)-Testes Unitários", "link": "#" },
      { "nome": "SELENIUM JAVASCRIPT 1", "link": "https://drive.google.com/drive/folders/1KlSodjBM_EDbMpJz5-_qrcZRfiHTc8UA?usp=sharing" },
      { "nome": "SELENIUM JAVASCRIPT 2", "link": "https://docs.google.com/document/d/1Ef7iYP_aH5STHaTyONp6K7ZEX3XRm5IeFT-Z7yFbeVQ/edit?usp=sharing" },
      { "nome": "(31/08/2025)-Integracao POKEAPI", "link": "#" },
      { "nome": "(31/08/2025)-Cypress", "link": "#" },
      { "nome": "(31/08/2025)-Teste Segurança", "link": "#" },
      { "nome": "Teste Carga", "link": "https://vimeo.com/1090711667?share=copy" },
      { "nome": "Cucumber", "link": "https://docs.google.com/document/d/1IRp4LVolj6YtpkPfQTG6DYJhCob67td5oslxv3ViyDM/edit?usp=sharing" },
      { "nome": "Jest", "link": "https://docs.google.com/document/d/1sABRF8jBFFLIFW8l7fd9hhI0FBPq54Mjo1NegIgEA9s/edit?usp=sharing" },
      { "nome": "(31/08/2025)-Postman Automatizado", "link": "#" },
      { "nome": "(31/08/2025)-Técnicas de Teste", "link": "#" },
      { "nome": "(31/08/2025)-Documentação e Planejamento", "link": "#" },
      { "nome": "(31/08/2025)-Ferramentas de Teste", "link": "#" },
      { "nome": "(31/08/2025)-Boas Práticas e Carreira", "link": "#" },
      { "nome": "Fundamentos de QA", "link": "#" },
      { "nome": "API Testing", "link": "#" },
      { "nome": "DevOps & QA", "link": "#" }
    ];
    renderizar(searchInput.value);
  }
}

// eventos
searchInput.addEventListener('input', () => renderizar(searchInput.value));
reloadBtn.addEventListener('click', () => carregarCursos());

// carregar ao abrir a página
carregarCursos();
