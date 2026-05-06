import { useState } from 'react';

interface OrgNode {
  id: string;
  nombre: string;
  cargo: string;
  depto: string;
  foto?: string;
  color?: string;
  hijos?: OrgNode[];
}

/* ── EDITAR AQUÍ: estructura del organigrama ── */
const ORGANIGRAMA: OrgNode = {
  id: 'ceo', nombre: 'CEO MAYiA', cargo: 'Chief Executive Officer', depto: 'Dirección General', color: '#A4D955',
  hijos: [
    {
      id: 'cto', nombre: 'CTO', cargo: 'Chief Technology Officer', depto: 'Tecnología', color: '#60a5fa',
      hijos: [
        { id: 'arch', nombre: 'AI Architect', cargo: 'Lead AI Architect', depto: 'Ingeniería', color: '#93c5fd' },
        { id: 'mlops', nombre: 'MLOps Lead', cargo: 'Infraestructura IA', depto: 'Ingeniería', color: '#93c5fd' },
        { id: 'dev', nombre: 'Dev Lead', cargo: 'Desarrollo de Producto', depto: 'Ingeniería', color: '#93c5fd' },
      ],
    },
    {
      id: 'cco', nombre: 'CCO', cargo: 'Chief Commercial Officer', depto: 'Comercial', color: '#f59e0b',
      hijos: [
        { id: 'ventas', nombre: 'Dir. Ventas', cargo: 'Sales Director', depto: 'Ventas', color: '#fbbf24' },
        { id: 'mkt', nombre: 'Dir. Marketing', cargo: 'Marketing Director', depto: 'Marketing', color: '#fbbf24' },
      ],
    },
    {
      id: 'coo', nombre: 'COO', cargo: 'Chief Operations Officer', depto: 'Operaciones', color: '#34d399',
      hijos: [
        { id: 'ops', nombre: 'Dir. Ops', cargo: 'Operations Director', depto: 'Ops', color: '#6ee7b7' },
        { id: 'cs', nombre: 'Customer Success', cargo: 'CS Director', depto: 'Clientes', color: '#6ee7b7' },
      ],
    },
    {
      id: 'cdo', nombre: 'CDO', cargo: 'Chief Data Officer', depto: 'Datos & IA', color: '#a78bfa',
      hijos: [
        { id: 'data', nombre: 'Data Lead', cargo: 'Ciencia de Datos', depto: 'Datos', color: '#c4b5fd' },
        { id: 'lake', nombre: 'MAYiA Lake Lead', cargo: 'Soberanía del Dato', depto: 'Datos', color: '#c4b5fd' },
      ],
    },
  ],
};

function OrgCard({ node }: { node: OrgNode }) {
  const initials = node.nombre.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      style={{ background: '#fff', border: `2px solid ${node.color || '#e5e7eb'}`, borderRadius: 14, padding: '14px 16px', minWidth: 155, maxWidth: 180, textAlign: 'center', boxShadow: `0 4px 16px ${node.color || '#000'}15`, transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 32px ${node.color || '#000'}28`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 16px ${node.color || '#000'}15`; }}
    >
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${node.color || '#e5e7eb'}20`, border: `2px solid ${node.color || '#e5e7eb'}`, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {node.foto
          ? <img src={node.foto} alt={node.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ fontSize: 15, fontWeight: 800, color: node.color || '#6b7280' }}>{initials}</span>}
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{node.nombre}</div>
      <div style={{ fontSize: 10, color: node.color || '#6b7280', fontWeight: 600, marginBottom: 2 }}>{node.cargo}</div>
      <div style={{ fontSize: 9, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{node.depto}</div>
    </div>
  );
}

function OrgTree({ node, depth = 0 }: { node: OrgNode; depth?: number }) {
  const [collapsed, setCollapsed] = useState(false);
  const hasChildren = node.hijos && node.hijos.length > 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', cursor: hasChildren ? 'pointer' : 'default' }} onClick={() => hasChildren && setCollapsed(!collapsed)}>
        <OrgCard node={node} />
        {hasChildren && (
          <div style={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: node.color || '#A4D955', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, fontSize: 11, fontWeight: 800, color: '#fff' }}>
            {collapsed ? '+' : '–'}
          </div>
        )}
      </div>
      {hasChildren && !collapsed && (
        <>
          <div style={{ width: 2, height: 24, background: `${node.color || '#e5e7eb'}60`, marginTop: 10 }} />
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            {node.hijos!.map(child => (
              <div key={child.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 2, height: 20, background: `${child.color || '#e5e7eb'}60` }} />
                <OrgTree node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Organigrama() {
  return (
    <section style={{ background: '#f9fafb', padding: '70px 20px', borderTop: '1px solid #f3f4f6' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)', marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A4D955' }} />
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>Equipo MAYiA</span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111827', margin: '0 0 10px' }}>Organigrama Corporativo</h2>
          <p style={{ fontSize: 13, color: '#6b7280' }}>Haz clic en los nodos para expandir o colapsar áreas</p>
        </div>
        <div style={{ overflowX: 'auto', paddingBottom: 24 }}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', minWidth: '100%' }}>
            <OrgTree node={ORGANIGRAMA} />
          </div>
        </div>
      </div>
    </section>
  );
}
