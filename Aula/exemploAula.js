class Conta{
    #saldo = 100;
sacar (valor){
    this.#saldo = this.#saldo - valor;
    console.log("Saque realizado!");
}
mostrarSaldo(){
    console.log("Saldo:", this.#saldo);

}
}
let conta = new Conta();
conta.sacar(30);
conta.mostrarSaldo();
