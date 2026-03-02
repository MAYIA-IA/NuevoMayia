-- Crear base de datos
CREATE DATABASE IF NOT EXISTS dashboard_ia_db;
USE dashboard_ia_db;

-- Tabla de Empleados (RH)
CREATE TABLE IF NOT EXISTS empleados (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  puesto VARCHAR(100),
  departamento VARCHAR(50),
  salario DECIMAL(10,2),
  fecha_ingreso DATE,
  email VARCHAR(100),
  telefono VARCHAR(20),
  status ENUM('activo', 'vacaciones', 'baja') DEFAULT 'activo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Presupuestos (Finanzas)
CREATE TABLE IF NOT EXISTS presupuestos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  departamento VARCHAR(50),
  categoria VARCHAR(50),
  monto_asignado DECIMAL(12,2),
  monto_gastado DECIMAL(12,2),
  periodo VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Ventas
CREATE TABLE IF NOT EXISTS ventas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente VARCHAR(100),
  producto VARCHAR(100),
  monto DECIMAL(10,2),
  vendedor VARCHAR(100),
  fecha DATE,
  status ENUM('cerrada', 'en-proceso', 'perdida') DEFAULT 'en-proceso',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Inventario (Operaciones)
CREATE TABLE IF NOT EXISTS inventario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  producto VARCHAR(100),
  categoria VARCHAR(50),
  cantidad INT,
  ubicacion VARCHAR(50),
  precio_unitario DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Tickets (TI)
CREATE TABLE IF NOT EXISTS tickets_ti (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(200),
  descripcion TEXT,
  prioridad ENUM('baja', 'media', 'alta', 'critica') DEFAULT 'media',
  status ENUM('abierto', 'en-proceso', 'resuelto') DEFAULT 'abierto',
  reportado_por VARCHAR(100),
  asignado_a VARCHAR(100),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos demo de Empleados
INSERT INTO empleados (nombre, puesto, departamento, salario, fecha_ingreso, email, telefono, status) VALUES
('Ana García', 'Gerente de RH', 'Recursos Humanos', 45000.00, '2020-03-15', 'ana.garcia@empresa.com', '555-0101', 'activo'),
('Carlos López', 'Contador Senior', 'Finanzas', 42000.00, '2019-06-20', 'carlos.lopez@empresa.com', '555-0102', 'activo'),
('María Rodríguez', 'Jefe de Ventas', 'Ventas', 48000.00, '2021-01-10', 'maria.rodriguez@empresa.com', '555-0103', 'activo'),
('Juan Martínez', 'Desarrollador', 'TI', 38000.00, '2022-02-14', 'juan.martinez@empresa.com', '555-0104', 'activo'),
('Laura Sánchez', 'Analista Financiero', 'Finanzas', 35000.00, '2021-08-05', 'laura.sanchez@empresa.com', '555-0105', 'vacaciones'),
('Pedro Gómez', 'Supervisor Operaciones', 'Operaciones', 40000.00, '2020-11-22', 'pedro.gomez@empresa.com', '555-0106', 'activo'),
('Sofia Torres', 'Ejecutiva de Ventas', 'Ventas', 32000.00, '2022-05-18', 'sofia.torres@empresa.com', '555-0107', 'activo'),
('Diego Fernández', 'Soporte TI', 'TI', 30000.00, '2023-01-09', 'diego.fernandez@empresa.com', '555-0108', 'activo');

-- Insertar datos demo de Presupuestos
INSERT INTO presupuestos (departamento, categoria, monto_asignado, monto_gastado, periodo) VALUES
('Recursos Humanos', 'Nómina', 500000.00, 380000.00, '2024-Q4'),
('Finanzas', 'Software', 50000.00, 32000.00, '2024-Q4'),
('Ventas', 'Marketing', 120000.00, 95000.00, '2024-Q4'),
('TI', 'Infraestructura', 150000.00, 98000.00, '2024-Q4'),
('Operaciones', 'Mantenimiento', 80000.00, 54000.00, '2024-Q4');

-- Insertar datos demo de Ventas
INSERT INTO ventas (cliente, producto, monto, vendedor, fecha, status) VALUES
('TechCorp Inc', 'Software Empresarial', 125000.00, 'María Rodríguez', '2024-12-01', 'cerrada'),
('Industrias XYZ', 'Consultoría', 85000.00, 'Sofia Torres', '2024-12-15', 'en-proceso'),
('Global Services', 'Licencias', 45000.00, 'María Rodríguez', '2024-12-10', 'cerrada'),
('Startup ABC', 'Soporte Premium', 32000.00, 'Sofia Torres', '2024-12-20', 'en-proceso');

-- Insertar datos demo de Inventario
INSERT INTO inventario (producto, categoria, cantidad, ubicacion, precio_unitario) VALUES
('Laptop Dell', 'Equipos', 25, 'Almacén A', 15000.00),
('Monitor LG 24"', 'Equipos', 40, 'Almacén A', 3500.00),
('Silla Ergonómica', 'Mobiliario', 60, 'Almacén B', 4500.00),
('Escritorio', 'Mobiliario', 30, 'Almacén B', 8000.00);

-- Insertar datos demo de Tickets TI
INSERT INTO tickets_ti (titulo, descripcion, prioridad, status, reportado_por, asignado_a) VALUES
('No funciona el email', 'El cliente de correo no sincroniza', 'alta', 'en-proceso', 'Ana García', 'Juan Martínez'),
('Solicitud nuevo software', 'Necesito licencia de Adobe', 'media', 'abierto', 'Carlos López', 'Diego Fernández'),
('Impresora atascada', 'Impresora del piso 3 no funciona', 'baja', 'resuelto', 'Laura Sánchez', 'Diego Fernández');