#include <stdio.h>
#include <stdlib.h>
#include <time.h>
//Definindo a estrutura da lista
typedef struct no {
int dado;
struct no *proximo;
}no;
//Definindo variáveis

typedef struct no *ptr_no;
ptr_no lista;
int op;

//Prototipação
void menu_mostrar();
void menu_selecionar(int op);
void lista_inserir(ptr_no lista);
void lista_remover(ptr_no lista);
void lista_mostrar(ptr_no lista);
//Função Principal

int main() {
//Inicializando máquina de números randômicos
srand(time(NULL));
op = 1;
//Criando o primeiro nó da lista
lista = (ptr_no) malloc(sizeof(no));
lista->dado = 1000;
lista->proximo = NULL;
//Laço principal
while (op !=0){
system("cls");
menu_mostrar();
scanf("%d", &op);
menu_selecionar(op);
}
system("Pause");
return(0);
}
//Mostra o menu de opções
void menu_mostrar(){
lista_mostrar(lista);
printf("\n\nEscolha uma das opcoes:\n");
printf("1 - Inserir no final da Lista\n");
printf("2 - Remover um item da Lista\n");
printf("0 - Sair\n\n");
}
//Executa a opção escolhida no menu
void menu_selecionar(int op){
switch (op){
case 1:
lista_inserir(lista);
break;
case 2:
lista_remover(lista);
break;
}
}
//Insere um elemento no final da Lista
void lista_inserir(ptr_no lista){
while(lista->proximo != NULL){
lista = lista->proximo;
}
lista->proximo = (ptr_no) malloc(sizeof(no));
lista = lista->proximo;
lista->dado = rand()%100;
lista->proximo = NULL;
}
//Remove um elemento da Lista
void lista_remover(ptr_no lista){
int dado;
ptr_no atual;
atual = (ptr_no) malloc(sizeof(no));
printf("\n\nEscolha uma dos itens:\n");
scanf("%d", &dado);
while((lista->dado != dado) ){
if (lista->proximo == NULL){
break;
}
atual = lista;
lista = lista->proximo;
}
if (lista->dado == dado){
atual->proximo = lista->proximo;
}
}
//Desenha o conteúdo da Lista na tela
void lista_mostrar(ptr_no lista){
system("cls");
while(1) {
printf("%d, ", lista->dado);
if (lista->proximo == NULL){
break;
}
lista = lista->proximo;
}
}
//Desenha o conteúdo da Lista na tela
void lista_mostrar_2(ptr_no lista){
system("cls");
while(lista->proximo != NULL) {
printf("%d, ", lista->dado);
lista = lista->proximo;
}
printf("%d, ", lista->dado);
}
