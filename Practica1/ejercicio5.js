/*El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
de estudiantes están presentes cuando la clase empieza.
Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
profesor de la clase, determinar si la clase se cancela o no.
Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
CANCELA
 */

const students = [0,0,0,0,1,1,1,1,1];
const minimum = 4;

const onTime = students.filter(num => num > 0);

if (onTime.length >= minimum) {
    console.log("yes");
}else{
    console.log("no");
}