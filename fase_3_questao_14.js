const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
 return y;
};
console.log(func(arr));

/* vai retornar 2,3,1. isso Y = vai ser igual a 2,3(que representa o resto do primeiro paramentro), e x que representa 1*/