#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Estrutura que representa cada loja (nó da lista)
typedef struct Loja
{
    char nome[50];
    struct Loja *proximo;
} Loja;

// Estrutura que representa a rota como uma lista ligada
typedef struct
{
    Loja *inicio;
} RotaEntrega;

// Cria um novo nó (loja) e copia o nome informado
Loja *criar_loja(const char *nome)
{
    Loja *nova = (Loja *)malloc(sizeof(Loja));
    if (nova == NULL)
    {
        printf("Erro de alocação de memória!\n");
        exit(1);
    }
    strcpy(nova->nome, nome);
    nova->proximo = NULL;
    return nova;
}

// Insere uma nova loja no início da rota
void inserir_inicio(RotaEntrega *rota, const char *nome_loja)
{
    Loja *nova_loja = criar_loja(nome_loja);
    nova_loja->proximo = rota->inicio;
    rota->inicio = nova_loja;
}

// Insere uma nova loja em uma posição específica da lista
void inserir_na_posicao(RotaEntrega *rota, const char *nome_loja, int posicao)
{
    if (posicao == 0)
    {
        inserir_inicio(rota, nome_loja);
        return;
    }
    Loja *atual = rota->inicio;
    int i = 0;
    // Avança até o nó anterior à posição desejada
    while (atual != NULL && i < posicao - 1)
    {
        atual = atual->proximo;
        i++;
    }
    // Se a posição for inválida
    if (atual == NULL)
    {
        printf("Posição inválida: %d\n", posicao);
        return;
    }
    // Cria e insere o novo nó na posição correta
    Loja *nova_loja = criar_loja(nome_loja);
    nova_loja->proximo = atual->proximo;
    atual->proximo = nova_loja;
}

// Imprime todas as lojas da rota
void imprimir_rota(RotaEntrega *rota)
{
    Loja *atual = rota->inicio;
    while (atual != NULL)
    {
        printf(" %s\n", atual->nome);
        atual = atual->proximo;
    }
}

// Libera toda a memória alocada pela rota
void liberar_rota(RotaEntrega *rota)
{
    Loja *atual = rota->inicio;
    while (atual != NULL)
    {
        Loja *temp = atual;
        atual = atual->proximo;
        free(temp);
    }
}

// Função principal para teste
int main()
{
    RotaEntrega rota;
    rota.inicio = NULL;
    inserir_inicio(&rota, "Loja D");
    inserir_inicio(&rota, "Loja B");
    inserir_inicio(&rota, "Loja A");
    inserir_na_posicao(&rota, "Loja C", 2);
    printf("Rota final:\n");
    imprimir_rota(&rota);
    liberar_rota(&rota);
    return 0;
}