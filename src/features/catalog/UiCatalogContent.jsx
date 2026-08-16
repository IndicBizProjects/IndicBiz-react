import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../../components/motion/FadeIn'
import { FileCode } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function UiCatalogContent() {
  const [catalog, setCatalog] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)
  
  // Filtering & Pagination State
  const [selectedRepo, setSelectedRepo] = useState('All Repositories')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 40 // Back to 40 since the grid is lightweight now

  useEffect(() => {
    fetch('/uiCatalog.json')
      .then(res => res.json())
      .then(data => {
        setCatalog(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load catalog', err)
        setLoading(false)
      })
  }, [])

  // Flatten the catalog tree into an array of files
  const allFiles = useMemo(() => {
    const files = []
    function traverse(nodes, currentRepo = '') {
      for (const node of nodes) {
        if (node.type === 'directory') {
          const repoName = currentRepo || node.name
          traverse(node.children, repoName)
        } else if (node.type === 'file') {
          // Only include valid component files
          if (['.jsx', '.tsx', '.html'].includes(node.ext)) {
            files.push({ ...node, repo: currentRepo })
          }
        }
      }
    }
    traverse(catalog)
    return files
  }, [catalog])

  // Get unique repositories for the filter dropdown
  const repositories = useMemo(() => {
    const repos = new Set(allFiles.map(f => f.repo))
    return ['All Repositories', ...Array.from(repos).filter(Boolean)]
  }, [allFiles])

  // Filter and paginate files
  const displayedFiles = useMemo(() => {
    let filtered = allFiles
    if (selectedRepo !== 'All Repositories') {
      filtered = filtered.filter(f => f.repo === selectedRepo)
    }
    
    const totalPages = Math.ceil(filtered.length / itemsPerPage)
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1)
    }

    const startIndex = (currentPage - 1) * itemsPerPage
    return {
      files: filtered.slice(startIndex, startIndex + itemsPerPage),
      totalPages: Math.max(1, totalPages),
      totalItems: filtered.length
    }
  }, [allFiles, selectedRepo, currentPage])

  const handleRepoChange = (e) => {
    setSelectedRepo(e.target.value)
    setCurrentPage(1)
  }

  return (
    <motion.div className="ag-page" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <section className="ag-section" style={{ paddingTop: 'clamp(8.5rem, 14vw, 11rem)' }}>
        <div className="ag-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <FadeIn>
            <p className="ag-eyebrow">Browse all</p>
            <h1 className="ag-h2">Universal Component Gallery</h1>
            <p className="ag-lede" style={{ marginTop: '0.75rem' }}>
              Browsing {loading ? '...' : allFiles.length} components across {repositories.length - 1} repositories.
            </p>
          </FadeIn>

          {!loading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <select
                value={selectedRepo}
                onChange={handleRepoChange}
                style={{
                  background: '#eff0f0',
                  color: '#0d2426',
                  border: 'none',
                  padding: '0.65rem 1rem',
                  borderRadius: '16px',
                  boxShadow: 'inset 0 0 5px rgba(166,166,166,0.35)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {repositories.map(repo => (
                  <option key={repo} value={repo}>{repo}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      <div style={{ padding: '0 var(--layout-gutter) 4rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {loading ? (
          <div style={{ color: '#888', fontFamily: 'var(--font-mono)', padding: '2rem 0' }}>Loading components...</div>
        ) : (
          <>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {displayedFiles.files.map((file, idx) => (
                <div 
                  key={file.path + idx}
                  className="ag-card"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '240px',
                    position: 'relative'
                  }}
                >
                  {/* Visual / Icon Area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: file.ext === '.html' ? '#FFF' : 'linear-gradient(145deg, #121214, #1A1A1D)', position: 'relative', overflow: 'hidden' }}>
                    
                    {file.ext === '.html' ? (
                      <div style={{ width: '100%', height: '100%', overflow: 'auto', padding: '1rem' }} dangerouslySetInnerHTML={{ __html: file.content }} />
                    ) : (
                      <>
                        <FileCode size={48} color="#00FFFF" strokeWidth={1} style={{ opacity: 0.8, marginBottom: '1rem' }} />
                        <span style={{ color: '#FFF', fontSize: '1.1rem', fontWeight: 600, maxWidth: '80%', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {file.name}
                        </span>
                        <span style={{ color: '#666', fontSize: '0.8rem', marginTop: '0.5rem' }}>React Component</span>
                      </>
                    )}

                    {/* View Code Overlay Button */}
                    <button
                      onClick={() => setSelectedFile(file)}
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '6px 12px',
                        background: 'rgba(0,0,0,0.8)',
                        backdropFilter: 'blur(4px)',
                        color: '#00FFFF',
                        border: '1px solid rgba(0,255,255,0.3)',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'pointer',
                        zIndex: 10,
                        fontWeight: 'bold'
                      }}
                    >
                      &lt;/&gt; Get code
                    </button>
                  </div>

                  {/* Clean Footer */}
                  <div style={{ padding: '0.75rem 1rem', background: '#0A0A0C', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#00FFFF', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{file.repo}</span>
                    <span style={{ color: '#555', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{file.ext}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {displayedFiles.totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: currentPage === 1 ? 'transparent' : '#1A1A1D',
                    color: currentPage === 1 ? '#444' : '#FFF',
                    border: '1px solid',
                    borderColor: currentPage === 1 ? '#333' : 'rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Previous
                </button>
                <span style={{ color: '#888', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  Page {currentPage} of {displayedFiles.totalPages}
                </span>
                <button
                  disabled={currentPage === displayedFiles.totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: currentPage === displayedFiles.totalPages ? 'transparent' : '#1A1A1D',
                    color: currentPage === displayedFiles.totalPages ? '#444' : '#FFF',
                    border: '1px solid',
                    borderColor: currentPage === displayedFiles.totalPages ? '#333' : 'rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    cursor: currentPage === displayedFiles.totalPages ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Code Modal */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <div 
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} 
              onClick={() => setSelectedFile(null)}
            />
            
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{ background: '#1A1A1D', width: '100%', maxWidth: '900px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', maxHeight: '85vh' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#121214' }}>
                <div>
                  <h3 style={{ color: '#FFF', margin: 0, fontSize: '1rem' }}>{selectedFile.name}</h3>
                  <span style={{ color: '#888', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{selectedFile.path}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedFile.content)}
                    style={{ padding: '6px 16px', background: '#00FFFF', color: '#000', border: 'none', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Copy Source
                  </button>
                  <button
                    onClick={() => setSelectedFile(null)}
                    style={{ background: 'transparent', border: 'none', color: '#FFF', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1 }}
                  >
                    ×
                  </button>
                </div>
              </div>
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', background: '#0A0A0C' }}>
                <pre style={{ margin: 0, color: '#E0E0E0', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  <code>{selectedFile.content}</code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
