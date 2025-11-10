#include <stdio.h>
#include <stdlib.h>

#define TAMANHO 5

typedef struct Lista{
	int dado;
	struct Lista *proximo;
}Lista;

Lista lista[TAMANHO];


int main(int argc, char *argv[]) {
	 Lista lista[TAMANHO];
		int i;
    // Inicializa os dados
    for (i = 0; i < TAMANHO; i++) {
        lista[i].dado = (i + 1) * 10;
        
        if (i < TAMANHO - 1)
            lista[i].proximo = &lista[i + 1]; // Aponta para o próximo elemento
        else
            lista[i].proximo = NULL; // Último elemento aponta para NULL
    }

    // Exibindo os dados da lista
    Lista *atual = &lista[0];
    while (atual != NULL) {
        printf("Dado: %d\n", atual->dado);
        atual = atual->proximo;
    }

    return 0;
}
