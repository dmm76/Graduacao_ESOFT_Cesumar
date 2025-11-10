#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(){
	int tam;
	int *vetor;
	
	printf("Tamanho: ");
	scanf("%d", &tam);
	vetor = (int *)malloc(sizeof(int)*tam);
	
	int i;
	for(i =0; i < tam; i++){
		vetor[i] = pow(2,i);
		printf("Posicao %d: %d\n", i, vetor[i]);
	}
	system("Pause");
	return 0;
}
