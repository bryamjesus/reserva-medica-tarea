# API RESERVA MÉDICA - TAREA
Clona el proyecto y instala todas las dependencias
```bash
npm install
```

```bash
npm i
```

## Problema
Se requiere desarrollar los servicios Web e implementar la base de datos para un sistema de reserva de citas médicas. Necesitamos se pueda registrar el nombre del paciente, su DNI, teléfono, email, día y hora de la cita.

Se debe almacenar toda la información en una base de datos NoSQL.

A continuación se han definido los siguientes endpoints:
| Método | Ruta | Descripción |
|-|-|-|
| GET | http://localhost:3000/citas/listar | Listará los todos los registros. |
| GET | http://localhost:3000/citas/mostrar | Mostrará el detalle de un registro. |
| POST | http://localhost:3000/citas/crear | Permitirá crear un nuevo registro. |
| PUT | http://localhost:3000/citas/actualizar | Permitirá actualizar los datos de un registro. Usará como identificador de actualización el campo id del registro. |
| DELETE | http://localhost:3000/citas/eliminar | Permitirá eliminar un registro. Usará como identificador de eliminación el campo id del registro. |

