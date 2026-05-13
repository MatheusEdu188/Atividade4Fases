const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom);
/*vai imprimir 100 e 200, isso pq a partir do momento que se copia com o spread pela primeira vez, ele referencia o endereço de memoria, mas a partir do segundo spread, ele passa a ser um novo objeto, então mudar o 2 não vai influencia o 1*/