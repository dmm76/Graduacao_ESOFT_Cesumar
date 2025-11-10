import java.util.Scanner;

public class BancoApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
   
        double valorInicial = scanner.nextDouble();
        
     
        double taxaJuros = scanner.nextDouble();
        
        int periodo = scanner.nextInt();
        
        double valorFinal = valorInicial;

        
        
        valorFinal = valorInicial*Math.pow((1+(taxaJuros * periodo)), periodo * 1);

        System.out.println("Valor final do investimento: R$ " + valorFinal);
        
        scanner.close();
    }
}