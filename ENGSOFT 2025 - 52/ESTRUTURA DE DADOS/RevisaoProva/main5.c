#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

#define TAMANHO 5

struct tfilha{
	int dados[TAMANHO];
	int ini;
	int fim;
};

struct tfilha fila;

void fila_mostrar();
void fila_entrar();
void fila_sair();
void menu_mostrar();

int main(int argc, char *argv[]) {
	
	setlocale(LC_ALL, "Portuguese");
	int opt =1;
	fila.ini =0;
	fila.fim = 0;
	while(opt != 0){
		system("cls");
		fila_mostrar();
		menu_mostrar();
		scanf("%d", &opt);
		switch(opt){
			case 1:
				fila_entrar();
				break;
				case 2:
					fila_sair();
					break;
		}
	}	
	return 0;
}



void fila_mostrar(){
	int i;
	printf("[ ");
	for(i=0;i<TAMANHO;i++){
		printf("%d ", fila.dados[i]);
	}
	printf(" ]\n\n");
}

void fila_entrar(){
	if(fila.fim == TAMANHO){
		printf("Pilha Cheia\n");
		system("Pause");
	}else{
		int valor;
		printf("Digite o valor: (diferente de zero(0))\n");
		scanf("%d", &valor);
		if(valor == 0){
			printf("Valor nao é permitido\n");
			system("pause");
		}else{
			fila.dados[fila.fim] = valor;
			fila.fim++;
		}
		
	}
}

void fila_sair(){
	if(fila.ini == fila.fim){
		printf("Pilha esta vazia\n");
		system("Pause");
	}else{
		int i;
		fila.fim--;
		for(i=0;i<fila.fim;i++){
			fila.dados[i] = fila.dados[i+1];
		}
		fila.dados[fila.fim] = 0;
	}
}

void menu_mostrar(){
	printf("Seja bem vindo ao menu!\n");
	printf("Digite um numero para opcao: \n");
	printf("1: inserir\n");
	printf("2: remover\n");	
}


