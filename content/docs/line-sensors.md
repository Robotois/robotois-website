---
title: Sensores de Linea
path: /docs/line-sensors.html
prev: light-sensor.html
---

El módulo de Sensores de Línea consiste en un arreglo de 5 sensores ópticos reflectivos (**QRE1113**), los cuales funcionan como entradas digitales. Este módulo se comunica con el **Shield** usando el puerto **IIC**, por lo que no es necesario especificar el puerto al cual se conecta.

El objetivo de este módulo es proporcionar el mecanismo necesario para detectar trayectorias o pistas sobre una plataforma. Con ello se tiene la posibilidad de construir robots **Seguidores de Línea**, que resuelven **laberintos**, o que buscan algún patrón en una plataforma. Con esto se proporcionan elementos fundamentales para aprendizaje de electrónica y programación, ya que en el diseño de este tipo de robots normalmente se implementan algoritmos para búsqueda.

## Instalación de la librería
La instalación de la librería se puede realizar usando el gestor de paquetes [**npm**](https://www.npmjs.com/package/robotois-line-sensor) o descargando la última versión disponible en el repositorio de [**GitHub**](https://github.com/Robotois/robotois-line-sensors):

* Usando *npm* se debe ejecutar el siguiente comando:

```bash
npm install robotois-line-sensor
```

* Para descargar la última versión en *GitHub* se ejecuta la siguiente línea en el *shell*:

```bash
git clone https://github.com/Robotois/robotois-line-sensors.git
```
Para este caso es necesario instalar las dependencias de la librería, lo cual se realiza con lo siguiente (en la ruta del repositorio): `npm install`.

<!-- # Conexión al Shield -->

## Configurar la plataforma
El primer paso es definir la plataforma sobre la cual se moverá el robot, para lo cual se han considerado dos posibles escenarios: la plataforma es blanca y la trayecoria es negra, o una plataforma negra y la trayectoria blanca.

Para configurar el módulo se usa la función `setBackground()`, a la cual se le pasa como parámetro el texto con el fondo de la plataforma:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

lineSensors.setBackground("white");
```
ó:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

lineSensors.setBackground("black");
```
No obstante, el valor por default del color de fondo de la plataforma es `white`, así que solo será necesario usar esta función cuando el color de fondo sea negro.

## Mediciones
Para obtener mediciones de manera sencilla, en esta librería se cuenta con mediciones por eventos, es decir que se cada vez que se tenga una nueva medición se dispara un evento con las mediciones actuales.

Para comprender el funcionamiento de este módulo, se considerará que las mediciones se realizan sobre una plataforma blanca y una trayectoria de color negro.

Para utilizar las mediciones por eventos, éstos se deben habilitar con la función `enableEvents()`. En el siguiente ejemplo se muestra cómo utilizar los eventos de mediciones:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

lineSensors.enableEvents();

lineSensors.on('medicion', (_line, _sensors) => {
  console.log(`Linea: ${_line}, Sensores: ${_sensors.toString(16)}`);
});
```
El resultado del ejemplo anterior es similar al siguiente:
```text
Linea: 0, Sensores: 1
Linea: 50, Sensores: 3
Linea: 100, Sensores: 2
Linea: 100, Sensores: 2
Linea: 200, Sensores: 4
Linea: 200, Sensores: 4
Linea: 200, Sensores: 4
Linea: 300, Sensores: 8
Linea: 300, Sensores: 8
Linea: 300, Sensores: 8
Linea: 350, Sensores: 18
Linea: 400, Sensores: 10
Linea: 400, Sensores: 10
```
Como se puede observar, el estado de los sensores se obtienen a través de dos tipos de valores `line` y `sensors`. El valor de línea (`line`), considera un rango de `0-400` en donde los valores mas cercanos a `0` indican que la trayectoria se encuentra del lado izquierdo y los valores cercanos a `400` indican que la trayectoria está a la derecha. Consecuentemente, el valor `200` implica que la trayectoria se encuentra justo en el centro del módulo.

El valor medido, que en el ejemplo se llama `sensors`, proporciona el valor hexadecimal equivalente a el estado actual de los sensores, en donde se considera que los sensores son un arreglo binario y cuyo estado puede ser `0-1`. En este caso el estado de los sensores se representan a través de **5 bits**. Para obtener una representación más intuitiva, se cambiará el código que imprime en consola los valores de la medición:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

lineSensors.enableEvents();

lineSensors.on('medicion', (_line, _sensors) => {
  console.log(`Linea: ${_line}, Sensores: ${lineSensors.sensorsToString(_sensors)}`);
});
```

```text
Linea: 0, Sensores: 00001
Linea: 100, Sensores: 00010
Linea: 100, Sensores: 00010
Linea: 150, Sensores: 00110
Linea: 200, Sensores: 00100
Linea: 200, Sensores: 00100
Linea: 200, Sensores: 00100
Linea: 300, Sensores: 01000
Linea: 300, Sensores: 01000
Linea: 300, Sensores: 01000
Linea: 350, Sensores: 11000
Linea: 350, Sensores: 11000
Linea: 400, Sensores: 10000
Linea: 400, Sensores: 10000
```
Por todo lo anterior, este método para obtener mediciones de los sensores es muy útil para diversas aplicaciones, ya que es posible implementar sistemas de control tipo **PI** o **PID** que son muy comunes en robots de competencias, es posible implementar algoritmos para realizar búsquedas específicas como la resolución de laberintos, solo por mencionar algunos casos.

# Mediciones Específicas
En la sección anterior se mostró la manera de tomar mediciones de los sensores usando eventos, lo cual puede ser útil como base para proyectos sencillos. Sin embargo, para ciertas aplicaciones se requiere realizar mediciones en determinados escenarios. Por lo que en esta librería se proporcionan las funciones de medición de manera individual.

## Función `readSensors()`
Esta función obtiene el estado actual de los sensores en forma digital, el cual se representa en un valor numérico entero. El valor numérico se forma considerando los sensores como un arreglo binario cuyo estado puede ser `0-1`. De hecho, esta función es utilizada cuando se obtienen mediciones por eventos, en donde se considera un arreglo con **5 bits**. Por ello el siguiente ejemplo arroja valores similares al ejemplo mostrado en la sección anterior:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

setInterval(() => {
  console.log(`Sensores: ${lineSensors.sensorsToString(lineSensors.readSensors())}`);
},500);
```

El resultado de ejecutar este ejemplo muestra el valor de los sensores en forma binaria, en donde el valor `1` indica que ese sensor ha detectado la trayectoria o simplemente esta activo, y el valor `0` indica que ese sensor no esta detectando nada. El siguiente resultado se obtuvo al mover el módulo de sensores de izquierda a derecha y viceversa sobre una línea negra en una plataforma de color blanco:
```text
Sensores: 10000
Sensores: 01000
Sensores: 01100
Sensores: 00100
Sensores: 00010
Sensores: 00001
Sensores: 00001
Sensores: 00010
Sensores: 00010
Sensores: 00100
Sensores: 00100
Sensores: 01000
Sensores: 01000
Sensores: 11000
Sensores: 10000
```

## Función `readLine()`

Esta función permite obtener el estado de los sensores, pero en este caso el valor numérico que devuelve tiene un rango de `0-400`, en donde los valores cercanos a `0` indican que la trayectoria o línea se encuentra a la izquierda del módulo y los valores cercanos a `400` indican que la trayectoria está a la derecha del módulo. Cuando se tiene el valor `200` implica que la trayectoria se encuentra en el centro del módulo.

Normalmente, en aplicaciones donde se tiene que seguir una trayectoria, el objetivo principal es que el módulo siempre se mantenga centrado sobre la trayectoria para no perder la ruta. Un ejemplo de cómo utilizar esta función es el siguiente:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

setInterval(() => {
  console.log(`Sensores: ${lineSensors.readLine()}`);
},500);
```
En el resultado obtenido, nuevamente se movió el módulo de izquierda a derecha y viceversa, con el objetivo de mostrar cómo cambia el valor que devuelve la función `readLine()`:

```text
Sensores: 0
Sensores: 100
Sensores: 200
Sensores: 300
Sensores: 300
Sensores: 400
Sensores: 400
Sensores: 400
Sensores: 400
Sensores: 300
Sensores: 300
Sensores: 250
Sensores: 200
Sensores: 150
Sensores: 100
Sensores: 100
Sensores: 100
Sensores: 50
Sensores: 0
```

Este resultado es muy útil en el sentido que debido a que se tiene un valor numérico acotado en un rango, es posible implementar algoritmos de control de manera fácil, por ejemplo para que el robot siga una trayectoria.

## Función `readSensor()`
Esta función obtiene el estado actual de un sensor en particular, el valor obtenido del estado del sensor, que puede ser `0-1` que indica si se está detectando la trayectoria o no. Un ejemplo simple sería el siguiente:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

setInterval(() => {
  console.log(`Sensor #1: ${lineSensors.readSensor(1)}`);
}, 1000);

```

En este ejemplo el resultado es similar al siguiente:

```text
Sensor #1: 0
Sensor #1: 0
Sensor #1: 1
Sensor #1: 1
Sensor #1: 1
Sensor #1: 0
Sensor #1: 0
Sensor #1: 0
```
Como se observa, esta función es muy útil para evaluar el estado de un sensor en particular, sin embargo no se recomienda usarlo para evaluar el estado de varios sensores al mismo tiempo por razones de rendimiento y redundancia. Esto debido a que internamente la función `readSensor()` obtiene el estado de todos los sensores y posteriormente evalúa el estado del sensor que se ha especificado. Por lo que, para evaluar el estado de varios sensores, se recomienda usar operaciones a nivel de bits en combinación con la función **`readSensors()`**.

Una manera sencilla de resolver este problema es la siguiente:

```javascript
const LineSensors = require('robotois-line-sensors');

const lineSensors = new LineSensors();

function sensorStatus(i, sensors) {
  return (sensors >> (i - 1 )) & 0x01;
}

setInterval(() => {
  const sensors = lineSensors.readSensors();
  console.log(`Sensor #1: ${sensorStatus(1, sensors)}`);
}, 1000);
```
