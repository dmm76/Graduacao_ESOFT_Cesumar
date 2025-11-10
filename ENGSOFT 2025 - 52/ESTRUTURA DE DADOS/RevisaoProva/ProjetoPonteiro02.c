#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

typedef struct No{
	char nome[20];
	int dados;
	struct No *inicio;
}No;

No ini;
No *no;


int main(int argc, char *argv[]) {
	setlocale(LC_ALL, "Portuguese");
	
	strcpy(ini.nome, "Douglas");
	ini.dados =10;
	ini.inicio = NULL;  
	int x =10;
	int *p = &x;
	*p = 23;
	
	no = malloc(sizeof(struct No));
	
	
	printf("Endereco de *p: %p\nEndereco de x: %p\n", &p, &x);
	printf("Valor de x: %d\nValor de p: %d\n", x, *p);
	
	printf("No ini - nome: %s\n", ini.nome);
	
	strcpy(no->nome,"Douglas Marcelo");
		printf("No *no - nome: %s\n", no->nome);
	return 0;
}
