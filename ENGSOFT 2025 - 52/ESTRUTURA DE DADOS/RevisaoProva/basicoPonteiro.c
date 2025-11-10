#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

#define TAMANHO 10

struct alunoNotas{
	char nome[100];
	int *notas;
};

struct alunoNotas *alunos;


int main(int argc, char *argv[]) {

	int tam = 4;
	int tamanho = 10;
	
	alunos = (int*)malloc(sizeof(struct alunoNotas)*tamanho);
	alunos[0].notas = (int *)malloc(sizeof(int)*tam);
	
	
	strcpy(alunos[0].nome, "Douglas");	alunos[0].notas[0] = 10;
	alunos[0].notas[1] = 8;
	alunos[0].notas[2] = 5;
	alunos[0].notas[3] = 7;
	
	int i;
	int soma = 0;
	float media = 0.0;
	for(i=0; i<4; i++){		
		soma += alunos[0].notas[i];
	}
	media = soma /4.0;
	printf("Aluno: %s, média: %f", alunos[0].nome, media);
	
	
	return 0;
}
