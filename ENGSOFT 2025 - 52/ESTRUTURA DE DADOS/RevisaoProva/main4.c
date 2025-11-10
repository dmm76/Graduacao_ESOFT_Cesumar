#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

#define TAMANHO 5

struct tpilha{
	int dados[TAMANHO];
	int ini;
	int fim;
};

struct tpilha pilha;

void pilha_mostrar();
void pilha_entrar();
void pilha_sair();
void menu_mostrar();

int main(int argc, char *argv[]) {
	
	setlocale(LC_ALL, "Portuguese");
	int opt =1;
	pilha.ini =0;
	pilha.fim = 0;
	while(opt != 0){
		system("cls");
		pilha_mostrar();
		menu_mostrar();
		scanf("%d", &opt);
		switch(opt){
			case 1:
				pilha_entrar();
				break;
				case 2:
					pilha_sair();
					break;
		}
	}	
	return 0;
}



void pilha_mostrar(){
	int i;
	printf("[ ");
	for(i=0;i<TAMANHO;i++){
		printf("%d ", pilha.dados[i]);
	}
	printf(" ]\n\n");
}

void pilha_entrar(){
	if(pilha.fim == TAMANHO){
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
			pilha.dados[pilha.fim] = valor;
			pilha.fim++;
		}
		
	}
}

void pilha_sair(){
	if(pilha.ini == pilha.fim){
		printf("Pilha esta vazia\n");
		system("Pause");
	}else{
		pilha.fim--;
		pilha.dados[pilha.fim] = 0;
	}
}

void menu_mostrar(){
	printf("Seja bem vindo ao menu!\n");
	printf("Digite um numero para opcao: \n");
	printf("1: inserir\n");
	printf("2: remover\n");	
}


