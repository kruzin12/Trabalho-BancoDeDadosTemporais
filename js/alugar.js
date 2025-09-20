const mockCarros = [
  { id: 1, marca: "BMW", placa: "ABC-1234", cor: "Preto", status: "Disponível", quilometragem: 15000, imagem: "carro1.png" },
  { id: 2, marca: "Fiat Argo", placa: "DEF-5678", cor: "Branco", status: "Alugado", quilometragem: 32000, imagem: "carro2.png" },
  { id: 3, marca: "Jeep Compass", placa: "GHI-9012", cor: "Cinza", status: "Em manutenção", quilometragem: 48000, imagem: "carro3.png" },
  { id: 4, marca: "Chevrolet Onix", placa: "JKL-3456", cor: "Vermelho", status: "Disponível", quilometragem: 22000, imagem: "carro4.png" },
  { id: 5, marca: "Volkswagen Polo", placa: "MNO-7890", cor: "Azul", status: "Disponível", quilometragem: 27500, imagem: "carro5.png" },
  { id: 6, marca: "Toyota Corolla", placa: "PQR-2345", cor: "Prata", status: "Avariado", quilometragem: 65000, imagem: "carro6.png" },
  { id: 7, marca: "Renault Kwid", placa: "STU-6789", cor: "Amarelo", status: "Disponível", quilometragem: 12000, imagem: "carro7.png" },
  { id: 8, marca: "Honda Civic", placa: "VWX-1234", cor: "Preto", status: "Roubado", quilometragem: 54000, imagem: "carro8.png" },
  { id: 9, marca: "Ford Ka", placa: "YZA-5678", cor: "Verde", status: "Vendido", quilometragem: 40000, imagem: "carro9.png" },
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const carro = mockCarros.find(c => c.id === id);
  if (!carro) {
    document.getElementById("carro-info").innerHTML = "<p class='text-red-600'>Carro não encontrado.</p>";
    return;
  }

  document.getElementById("carro-info").innerHTML = `
    <div class="flex items-center space-x-4">
      <img src="img/${carro.imagem}" alt="${carro.marca}" class="w-32 h-24 object-contain">
      <div>
        <h2 class="font-bold">${carro.marca} - ${carro.placa}</h2>
        <p>Cor: ${carro.cor}</p>
        <p>Status: <span class="font-semibold">${carro.status}</span></p>
        <p>Km: ${carro.quilometragem}</p>
      </div>
    </div>
  `;
});