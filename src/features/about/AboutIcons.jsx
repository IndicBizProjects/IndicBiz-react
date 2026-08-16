const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Icon({ children, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      {children}
    </svg>
  )
}

export const ABOUT_ICONS = {
  clarity: (
    <Icon>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  craft: (
    <Icon>
      <path d="M4 20l8-8 4 4 4-8" />
      <path d="M14 6h6v6" />
    </Icon>
  ),
  collab: (
    <Icon>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M4 19c.6-3 2.6-5 4-5s3.4 2 4 5" />
      <path d="M12 19c.6-3 2.6-5 4-5s3.4 2 4 5" />
    </Icon>
  ),
  systems: (
    <Icon>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v7M14 17.5h7" />
    </Icon>
  ),
  lead: (
    <Icon>
      <path d="M12 3l7 4v6c0 4.2-2.8 7.2-7 8-4.2-.8-7-3.8-7-8V7l7-4z" />
      <path d="M12 8v5M12 16h.01" />
    </Icon>
  ),
  code: (
    <Icon>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
    </Icon>
  ),
  design: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </Icon>
  ),
  product: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </Icon>
  ),
  build: (
    <Icon>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  ),
  growth: (
    <Icon>
      <path d="M4 18l5-5 4 3 7-8" />
      <path d="M15 8h5v5" />
    </Icon>
  ),
  team: (
    <Icon>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19c.8-3.4 3.2-5 7-5s6.2 1.6 7 5" />
    </Icon>
  ),
  review: (
    <Icon>
      <rect x="4" y="4" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </Icon>
  ),
  handoff: (
    <Icon>
      <path d="M8 7h8v4H8z" />
      <path d="M6 15h12v5H6z" />
      <path d="M12 11v4" />
    </Icon>
  ),
  react: (
    <Icon>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
    </Icon>
  ),
  vite: (
    <Icon>
      <path d="M12 3l8 4-8 14L4 7l8-4z" />
      <path d="M12 7v8" />
    </Icon>
  ),
  js: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M10 16v-6M14 10c1.2 0 2 .8 2 2s-.8 2-2 2h-1v2" />
    </Icon>
  ),
  css: (
    <Icon>
      <path d="M5 4h14l-1.4 14.2L12 21l-5.6-2.8L5 4z" />
      <path d="M8.5 8h7l-.4 4H10" />
    </Icon>
  ),
  motion: (
    <Icon>
      <path d="M5 16c4-8 10-8 14 0" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
    </Icon>
  ),
  figma: (
    <Icon>
      <circle cx="12" cy="8" r="3" />
      <circle cx="9" cy="13" r="3" />
      <circle cx="15" cy="13" r="3" />
      <path d="M9 16a3 3 0 106 0" />
    </Icon>
  ),
  node: (
    <Icon>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 8v8" />
    </Icon>
  ),
  vercel: (
    <Icon>
      <path d="M12 5l9 14H3L12 5z" />
    </Icon>
  ),
  next: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 16V8l8 8V8" />
    </Icon>
  ),
  ts: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10h4M10 10v6M14 13.5c.4-.6 1.1-1 1.8-1 .9 0 1.7.6 1.7 1.6 0 1.6-3.5 1.2-3.5 3.2h3.5" />
    </Icon>
  ),
  wordpress: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 15l2.2-8h1.6L13 15M8.2 12h3.4M14 9c1.6 0 2.6 1 2.6 2.6 0 2.4-2.2 4.4-4.6 4.4" />
    </Icon>
  ),
  shopify: (
    <Icon>
      <path d="M8 8V7a4 4 0 018 0v1" />
      <path d="M6 8h12l-1 12H7L6 8z" />
    </Icon>
  ),
  webflow: (
    <Icon>
      <path d="M4 8h5l3 8 3-8h5" />
      <path d="M4 16h4" />
    </Icon>
  ),
  api: (
    <Icon>
      <path d="M8 8H5v8h3M16 8h3v8h-3M10 12h4" />
    </Icon>
  ),
  go: (
    <Icon>
      <path d="M4 13c2-4 6-6 10-4 3 1.4 5 1.4 6 0" />
      <circle cx="9" cy="11" r="1" />
    </Icon>
  ),
  spring: (
    <Icon>
      <path d="M12 4c5 0 8 4 8 8s-4 8-8 8-8-3-8-8c2 3 5 4 8 2" />
    </Icon>
  ),
  mongo: (
    <Icon>
      <path d="M12 3s5 4 5 10-5 8-5 8-5-2-5-8 5-10 5-10z" />
      <path d="M12 7v13" />
    </Icon>
  ),
  postgres: (
    <Icon>
      <ellipse cx="12" cy="8" rx="6" ry="3" />
      <path d="M6 8v6c0 1.7 2.7 3 6 3s6-1.3 6-3V8" />
    </Icon>
  ),
  docker: (
    <Icon>
      <rect x="4" y="10" width="4" height="3" />
      <rect x="9" y="10" width="4" height="3" />
      <rect x="9" y="6" width="4" height="3" />
      <rect x="14" y="10" width="4" height="3" />
      <path d="M3 14c1 3 4 5 9 5s8-2 9-5" />
    </Icon>
  ),
  git: (
    <Icon>
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.5 16.5L11 8.5M13 8.5l4.5 8" />
    </Icon>
  ),
  github: (
    <Icon>
      <path d="M9 19c-4 1.5-4-2-6-2M15 21v-3.4a3.4 3.4 0 00-1-2.6c3.2-.4 6.6-1.6 6.6-7A5.2 5.2 0 0019 4.8 4.8 4.8 0 0018.8 1S17.6.7 15 2.6a12 12 0 00-6 0C6.4.7 5.2 1 5.2 1A4.8 4.8 0 005 4.8 5.2 5.2 0 003.4 8.4c0 5.4 3.4 6.6 6.6 7a3.4 3.4 0 00-1 2.6V21" />
    </Icon>
  ),
  kube: (
    <Icon>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 8v8M8.5 10.5l7 3M15.5 10.5l-7 3" />
    </Icon>
  ),
  aws: (
    <Icon>
      <path d="M5 15c2 2 5 3 7 3s5-1 7-3" />
      <path d="M8 8h3v7H8zM13 11h3v4h-3z" />
    </Icon>
  ),
  azure: (
    <Icon>
      <path d="M10 4l4 7 5 2-8 7L3 14l4-1 3-9z" />
    </Icon>
  ),
}

export function StudioConstellation() {
  const nodes = [
    { cx: 28, cy: 36 },
    { cx: 72, cy: 22 },
    { cx: 118, cy: 40 },
    { cx: 46, cy: 88 },
    { cx: 96, cy: 78 },
    { cx: 140, cy: 96 },
  ]

  return (
    <svg className="ab-constellation" viewBox="0 0 168 128" fill="none" aria-hidden="true">
      <path className="ab-orbit" d="M28 36L72 22L118 40L96 78L46 88L28 36" />
      <path className="ab-orbit" d="M72 22L96 78L140 96L118 40" />
      {nodes.map((node, i) => (
        <circle key={i} cx={node.cx} cy={node.cy} r={i === 0 ? 6 : 4.5} className="ab-node" />
      ))}
    </svg>
  )
}

export function AboutIcon({ name, size }) {
  const icon = ABOUT_ICONS[name]
  if (!icon) return null
  if (size) {
    return (
      <span className="ab-icon" style={{ width: size, height: size }}>
        {icon}
      </span>
    )
  }
  return <span className="ab-icon">{icon}</span>
}
