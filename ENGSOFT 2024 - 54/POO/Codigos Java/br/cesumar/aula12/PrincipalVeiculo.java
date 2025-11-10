package br.cesumar.aula12;

public class PrincipalVeiculo {
    public static void main(String[] args) {
        Veiculo veiculo = new Aviao();

      estacionarVeiculo(veiculo);

    }

    public static void estacionarVeiculo(Veiculo veiculo){
        if(veiculo instanceof Carro){
            System.out.println("Inciando estacionamento do Carro");
        }else {
            System.err.println("Iniciando estacionamento do Avião");
        }

        veiculo.andarFrente();
        veiculo.andarFrente();
        veiculo.buzinar();
        System.out.println("Finalizando o estacionamento");
    }
}
