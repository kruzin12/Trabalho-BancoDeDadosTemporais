const mockCarros = [
  { id: 1, marca: "BMW", placa: "ABC-1234", cor: "Cinza", status: "Disponível", quilometragem: 15000, valor: 1000, imagem: "carro1.png" },
  { id: 2, marca: "Fiat Argo", placa: "DEF-5678", cor: "Vermelho", status: "Alugado", quilometragem: 32000, valor: 150, imagem: "carro2.png" },
  { id: 3, marca: "Jeep Compass", placa: "GHI-9012", cor: "Cinza", status: "Em manutenção", quilometragem: 48000, valor: 350, imagem: "carro3.png" },
  { id: 4, marca: "Chevrolet Onix", placa: "JKL-3456", cor: "Vermelho", status: "Disponível", quilometragem: 22000, valor: 130, imagem: "carro4.png" },
  { id: 5, marca: "Volkswagen Polo", placa: "MNO-7890", cor: "Azul", status: "Disponível", quilometragem: 27500, valor: 140, imagem: "carro5.png" },
  { id: 6, marca: "Toyota Corolla", placa: "PQR-2345", cor: "Prata", status: "Avariado", quilometragem: 65000, valor: 280, imagem: "carro6.png" },
  { id: 7, marca: "Renault Kwid", placa: "STU-6789", cor: "Amarelo", status: "Disponível", quilometragem: 12000, valor: 120, imagem: "carro7.png" },
  { id: 8, marca: "Honda Civic", placa: "VWX-1234", cor: "Preto", status: "Roubado", quilometragem: 54000, valor: 220, imagem: "carro8.png" },
  { id: 9, marca: "Ford Ka", placa: "YZA-5678", cor: "Verde", status: "Vendido", quilometragem: 40000, valor: 110, imagem: "carro9.png" },
];

const mockClientes = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", email: "joao@email.com", telefone: "(51) 99999-1111" },
  { id: 2, nome: "Maria Oliveira", cpf: "987.654.321-00", email: "maria@email.com", telefone: "(51) 98888-2222" },
];

const mockAlugueis = [
  { cliente: "João Silva", carro: "BMW - ABC-1234", retirada: "2025-09-01", devolucao: "2025-09-10", km: 850 },
];

const mockInfracoes = [
  { data: "2025-08-15", motivo: "Excesso de velocidade", valor: 350 },
  { data: "2025-09-05", motivo: "Estacionamento proibido", valor: 200 },
];

const mockManutencoes = [
  { carro: "BMW - ABC-1234", entrada: "2025-09-01", saida: "2025-09-07", motivo: "Troca de motor", custo: 4500 },
];


function carregarCarros(filtro = "") {
  const content = document.getElementById("tab-content");
  content.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="carros"></div>`;
  const container = document.getElementById("carros");

  mockCarros
    .filter(c => 
      c.marca.toLowerCase().includes(filtro.toLowerCase()) ||
      c.placa.toLowerCase().includes(filtro.toLowerCase())
    )
    .forEach(c => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md p-4 rounded-lg";
      card.innerHTML = `
        <img src="img/${c.imagem}" alt="${c.marca}" class="w-full h-40 object-contain mb-2">
        <h2 class="font-bold">${c.marca} - ${c.placa}</h2>
        <p>Preço do aluguel: ${c.valor}</p>
        <p>Cor: ${c.cor}</p>
        <p>Status: <span class="font-semibold">${c.status}</span></p>
        <p>Km: ${c.quilometragem}</p>
      `;
      container.appendChild(card);
    });
}

function carregarClientes() {
  const content = document.getElementById("tab-content");
  content.innerHTML = `
    <h1 class="text-xl font-bold mb-4">Clientes</h1>
    <div id="clientes" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
  `;

  const container = document.getElementById("clientes");
  mockClientes.forEach(c => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md p-4 rounded-lg";
    card.innerHTML = `
      <h2 class="font-bold">${c.nome}</h2>
      <p>CPF: ${c.cpf}</p>
      <p>Email: ${c.email}</p>
      <p>Telefone: ${c.telefone}</p>
    `;
    container.appendChild(card);
  });
}

function carregarAlugueis() {
  const content = document.getElementById("tab-content");
  content.innerHTML = `
    <h1 class="text-xl font-bold mb-4">alugueis</h1>
    <table class="min-w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2">Cliente</th>
          <th class="p-2">Carro</th>
          <th class="p-2">Retirada</th>
          <th class="p-2">Devolução</th>
          <th class="p-2">Km</th>
        </tr>
      </thead>
      <tbody id="alugueis-body"></tbody>
    </table>
  `;

  const tbody = document.getElementById("alugueis-body");
  mockAlugueis.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="p-2">${a.cliente}</td>
      <td class="p-2">${a.carro}</td>
      <td class="p-2">${a.retirada}</td>
      <td class="p-2">${a.devolucao}</td>
      <td class="p-2">${a.km} km</td>
    `;
    tbody.appendChild(tr);
  });
}

function carregarInfracoes() {
  const content = document.getElementById("tab-content");
  content.innerHTML = `
    <h1 class="text-xl font-bold mb-4">infracoes e Multas</h1>
    <ul id="infracoes" class="space-y-2"></ul>
  `;

  const ul = document.getElementById("infracoes");
  mockInfracoes.forEach(i => {
    const li = document.createElement("li");
    li.className = "bg-white shadow-md p-4 rounded-lg";
    li.innerHTML = `
      <p><b>Data:</b> ${i.data}</p>
      <p><b>Motivo:</b> ${i.motivo}</p>
      <p><b>Valor:</b> R$ ${i.valor}</p>
    `;
    ul.appendChild(li);
  });
}

function carregarManutencoes() {
  const content = document.getElementById("tab-content");
  content.innerHTML = `
    <h1 class="text-xl font-bold mb-4">manutencoes</h1>
    <ul id="manutencoes" class="space-y-2"></ul>
  `;

  const ul = document.getElementById("manutencoes");
  mockManutencoes.forEach(m => {
    const li = document.createElement("li");
    li.className = "bg-white shadow-md p-4 rounded-lg";
    li.innerHTML = `

      <p><b>Carro:</b> ${m.carro}</p>
      <p><b>Entrada:</b> ${m.entrada}</p>
      <p><b>Saída:</b> ${m.saida}</p>
      <p><b>Motivo:</b> ${m.motivo}</p>
      <p><b>Custo:</b> R$ ${m.custo}</p>
    `;
    ul.appendChild(li);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const filtroContainer = document.getElementById("filtro-container");
  const filtroInput = document.getElementById("filtro");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("font-bold", "underline"));
      btn.classList.add("font-bold", "underline");

      const tab = btn.dataset.tab;

      filtroContainer.classList.toggle("hidden", tab !== "carros");

      if (tab === "carros") carregarCarros(filtroInput.value);
      if (tab === "alugueis") carregarAlugueis();
      if (tab === "infracoes") carregarInfracoes();
      if (tab === "clientes") carregarClientes();
      if (tab === "manutencoes") carregarManutencoes();
    });
  });

  filtroInput.addEventListener("input", e => carregarCarros(e.target.value));

  carregarCarros();
  filtroContainer.classList.remove("hidden");
});