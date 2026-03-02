import pool from '../config/database.js';

export async function buscarContextoEnDB(mensaje, departamento) {
  try {
    const mensajeLower = mensaje.toLowerCase();
    let resultados = [];

    // Buscar en Recursos Humanos
    if (mensajeLower.includes('empleado') || mensajeLower.includes('rh') || mensajeLower.includes('personal') || departamento === 'rh') {
      const [empleados] = await pool.query(
        'SELECT nombre, puesto, departamento, status FROM empleados LIMIT 10'
      );
      if (empleados.length > 0) {
        resultados.push({ tipo: 'empleados', datos: empleados });
      }
    }

    // Buscar en Finanzas
    if (mensajeLower.includes('presupuesto') || mensajeLower.includes('finanzas') || mensajeLower.includes('gasto') || departamento === 'finanzas') {
      const [presupuestos] = await pool.query(
        'SELECT departamento, categoria, monto_asignado, monto_gastado FROM presupuestos'
      );
      if (presupuestos.length > 0) {
        resultados.push({ tipo: 'presupuestos', datos: presupuestos });
      }
    }

    // Buscar en Ventas
    if (mensajeLower.includes('venta') || mensajeLower.includes('cliente') || mensajeLower.includes('ingreso') || departamento === 'ventas') {
      const [ventas] = await pool.query(
        'SELECT cliente, producto, monto, vendedor, status FROM ventas ORDER BY fecha DESC LIMIT 10'
      );
      if (ventas.length > 0) {
        resultados.push({ tipo: 'ventas', datos: ventas });
      }
    }

    // Buscar en Inventario
    if (mensajeLower.includes('inventario') || mensajeLower.includes('producto') || mensajeLower.includes('stock') || departamento === 'operaciones') {
      const [inventario] = await pool.query(
        'SELECT producto, categoria, cantidad, ubicacion FROM inventario'
      );
      if (inventario.length > 0) {
        resultados.push({ tipo: 'inventario', datos: inventario });
      }
    }

    // Buscar en Tickets TI
    if (mensajeLower.includes('ticket') || mensajeLower.includes('soporte') || mensajeLower.includes('ti') || departamento === 'ti') {
      const [tickets] = await pool.query(
        'SELECT titulo, prioridad, status, reportado_por FROM tickets_ti WHERE status != "resuelto" LIMIT 5'
      );
      if (tickets.length > 0) {
        resultados.push({ tipo: 'tickets', datos: tickets });
      }
    }

    return resultados.length > 0 ? resultados : null;

  } catch (error) {
    console.error('Error buscando en DB:', error);
    return null;
  }
}
