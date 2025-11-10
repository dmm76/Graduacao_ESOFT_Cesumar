#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

	int xi;
	int *ptr_xi;
	
void imprimir(){
		printf("Valor de xi = %d \n", xi);
		printf("Valor de &xi = %p \n", &xi);
		printf("Valor de ptr_xi = %p \n", ptr_xi);
		printf("Valor de *ptr_xi = %d \n\n", *ptr_xi);
	}	
	

int main(int argc, char *argv[]) {
	xi = 10;
	ptr_xi = &xi;
	imprimir();
	
	xi = 20;
	imprimir();
	
	*ptr_xi = 30;
	imprimir();
	
	system("Pause");	
	
	return 0;
}


