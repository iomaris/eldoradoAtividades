class Paciente {
#vacinado;
constructor(nome, vacinado) {
this.nome = nome;
this.#vacinado = vacinado;
}
get status() {
return this.#vacinado ? "Vacinado" : "Pendente";
}
}
const pacientes = [
new Paciente("Ana", true),
new Paciente("Bruno", false)
];
const nomeBuscado = "Bruno";
const paciente = pacientes.find(p => p.nome === nomeBuscado);
console.log(paciente ? paciente.status : "Paciente não encontrado");