db = new Mongo().getDB("MEAN_productos");

db.createCollection("productos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "categoria", "ubicacion", "precio"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "debe ser un string y es requerido"
                },
                categoria: {
                    bsonType: "string",
                    description: "debe ser un string y es requerido"
                },
                ubicacion: {
                    bsonType: "string",
                    description: "debe ser un string y es requerido"
                },
                precio: {
                    bsonType: "double",
                    description: "debe ser un número y es requerido"
                },
                fechaCreacion: {
                    bsonType: "date",
                    description: "fecha de creación del producto"
                }
            }
        }
    }
});

// Configurar fechaCreacion por defecto a la fecha actual si no se provee
db.productos.insertOne({
    nombre: "Producto Ejemplo",
    categoria: "Categoría Ejemplo",
    ubicacion: "Ubicación Ejemplo",
    precio: 100.00,
    fechaCreacion: new Date() // Esto establece la fecha de creación al momento de la inserción
});