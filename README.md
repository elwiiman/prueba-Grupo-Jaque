# Prueba Técnica Grupo Jaque


## Problema 1

Para la solución utilicé dos ciclos for, el for más interno se encargará de recorrer todo el arreglo que esté en análisis, comparando el elemento actual del loop con el siguiente y decidiendo si el elemento siguiente es mayor. Si lo anterior resulta verdad, el elemento siguiente del actual se agrega a un arreglo de subarreglos final. El loop más externo únicamente se encargará de ir avanzando el apuntador para reducir de tamaño el arreglo que se analizará. 

Así mismo, se cosntruye un arreglo que tiene el valor de la longitud de cada uno de los subarrays que resulten válidos. 

Al final se obtiene cuál es la longitud mayor del subarreglo para mostrar como salida, al subarreglo con mayor número de elementos. 

## Problema 2

Tomando como base al número "n", se itera las veces que sean necesarias hasta que se cumpla la condición de que el número de iteración actual tiene que ser menor que el número "n". 

En cada iteración se realiza la suma "n + i", donde i es el valor de la iteración actual. Esta suma se almacena en una variable que se va acumulando en cuanto a valor en cada iteración. 

AL final se suma el número "m" dado. 

## Problema 3

Para la solución de este problema, el primer paso es ordenar de manera ascendente los elementos del arreglo. Una vez ordenados, se define un nuevo valor de k, utilizando el k de entrada y la longitud del arreglo ordenado. Esto permitirá devolver el k-esimo elemento con el valor más grande. 

## Problema 4

Para detectar los dulicados de un arreglo, utilicé la función filter para arreglos, donde la función que recibe filter, tiene como parametros al elemento que se itera así como su índice. Filter devolvera como elemento filtrado únicamente cuando se cumpal la condición de que el el índice actual de iteración sea igual al índice encontrado por la función indexOf. Si ésta comparación no resulta ser idéntica, el elemento se descarta y no se agrega. 

## Problema 5

Para la solución de este problema, se utiliza una pila vacía. 
Se itera sobre todos los caracteres del string recibido, de forma individual, detectando los carectares que abren "(" ó "[", estos al detectarse se agregan a la pila. 
En el análisis de cada caracter, al detectarse ")" ó "]", se saca un elemento de la pila. 
Se utiliza un objeto que se encarga de mapear el correspondiente caracter que abre con el correspondiente caracter que cierra. De esta forma se compara el elemento que se saca de la pila para ver si se mapea correctamente. 
Si no se mapea correctamente, la ejecución de la función se termina y retorna falso indicando que los parentesis no están balanceados. 

Si todo el proceso anterior ha ocurrido con resultados positivios, se evalua si la pila aún tiene elementos, en caso de tenerlos eso indicaría que la cadena no se encuentra balanceada y da lugar a la terminación de la ejecución de la fucnión retornando falso. 

Si la pila está vacía esto indica que la cadena está balanceada y retorna verdadero. 

## Para verificar de forma gráfica las pruebas efectuadas:

 Abrir archivo Prueba.html en navegador. 
