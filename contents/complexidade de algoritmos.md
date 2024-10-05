# Complexidade de Algoritmos

A complexidade de algoritmos é uma área fundamental da ciência da computação, que estuda o desempenho e a eficiência dos algoritmos. Ela é geralmente medida em termos de tempo e espaço necessários para executar um determinado algoritmo, com o objetivo de avaliar a escalabilidade e o comportamento em diferentes tamanhos de entrada.

## Tipos de Complexidade

A análise de complexidade de algoritmos pode ser dividida em dois tipos principais:

### 1. Complexidade de Tempo

A **complexidade de tempo** refere-se ao número de operações que um algoritmo executa conforme o tamanho da entrada aumenta. Ela é expressa em termos da notação Big-O, que descreve o comportamento assintótico do algoritmo. Alguns exemplos comuns incluem:

- **O(1)**: Tempo constante. O algoritmo executa o mesmo número de operações, independentemente do tamanho da entrada.
- **O(log n)**: Tempo logarítmico. O número de operações cresce proporcionalmente ao logaritmo da entrada.
- **O(n)**: Tempo linear. O número de operações é diretamente proporcional ao tamanho da entrada.
- **O(n²)**: Tempo quadrático. O número de operações cresce com o quadrado do tamanho da entrada.

### 2. Complexidade de Espaço

A **complexidade de espaço** mede a quantidade de memória adicional necessária para executar um algoritmo. Assim como a complexidade de tempo, é expressa em termos de Big-O. No entanto, ao contrário da complexidade de tempo, que se concentra em operações, a complexidade de espaço observa o consumo de memória. Por exemplo:

- **O(1)**: O algoritmo utiliza uma quantidade constante de memória, independentemente do tamanho da entrada.
- **O(n)**: A memória utilizada é proporcional ao tamanho da entrada.

## Exemplo Prático

Um exemplo clássico de análise de complexidade é o algoritmo de busca binária. Este algoritmo opera em uma lista ordenada e utiliza a abordagem de divisão e conquista para encontrar um elemento específico. A cada iteração, ele reduz pela metade o número de elementos que precisa verificar, resultando em uma complexidade de tempo **O(log n)**.

### Implementação da Busca Binária em Python:

```python
def busca_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = (baixo + alto) // 2
        chute = lista[meio]

        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1

    return None
```

Neste caso, a complexidade de tempo é **O(log n)**, pois a cada iteração o número de elementos é reduzido pela metade. A complexidade de espaço é **O(1)**, uma vez que a quantidade de memória utilizada é constante, independentemente do tamanho da lista.

## Conclusão

Entender a complexidade de algoritmos é essencial para projetar soluções eficientes. Ao analisar o desempenho de algoritmos, podemos escolher a abordagem mais adequada para um problema específico, levando em consideração os recursos disponíveis, como tempo de execução e memória.

**Autoria: Chat GPT**
