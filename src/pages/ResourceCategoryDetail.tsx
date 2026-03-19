import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Download, Eye, ArrowLeft, File } from 'lucide-react';

// Mock data generator for files
const generateMockFiles = (category: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
    title: `${category} Document #${i + 1}`,
    size: `${(Math.random() * 5 + 1).toFixed(1)} MB`,
    date: 'Oct 2024',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' // Placeholder PDF
  }));
};

const CATEGORY_COUNTS: Record<string, number> = {
  'Research reports': 12,
  'Fact sheets': 24,
  'Policy Briefs': 8,
  'Annual Reports': 5,
  'Position Papers': 15,
  'Model Workplace Policies': 10
};

const ResourceCategoryDetail = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Find the original category name from the slug
  const categoryName = Object.keys(CATEGORY_COUNTS).find(
    name => name.toLowerCase().replace(/\s+/g, '-') === categorySlug
  ) || 'Resources';

  const fileCount = CATEGORY_COUNTS[categoryName] || 0;
  const files = generateMockFiles(categoryName, fileCount);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <section className="relative pt-48 pb-20 bg-primary text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Resources
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6 text-white">{categoryName}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Browse and download our latest {categoryName.toLowerCase()}. We have {fileCount} documents available in this category.
            </p>
          </div>
        </div>
      </section>

      {/* Files List */}
      <section className="section-padding flex-grow">
        <div className="container-custom">
          <div className="bg-bg-main rounded-3xl shadow-sm border border-border-brand overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-border-brand">
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-wider text-text-secondary">Document Name</th>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-wider text-text-secondary">Size</th>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-wider text-text-secondary">Date</th>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-wider text-text-secondary text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <motion.tr 
                      key={file.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="border-b border-border-brand hover:bg-surface/50 transition-colors group"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                            <FileText size={20} />
                          </div>
                          <div>
                            <span className="font-bold text-primary block group-hover:text-accent transition-colors">
                              {file.title}
                            </span>
                            <span className="text-xs text-text-secondary uppercase font-bold tracking-tighter">PDF Document</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-text-secondary font-medium">{file.size}</td>
                      <td className="px-8 py-5 text-text-secondary font-medium">{file.date}</td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <a 
                            href={file.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-text-secondary hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                            title="View PDF"
                          >
                            <Eye size={20} />
                          </a>
                          <a 
                            href={file.url} 
                            download 
                            className="p-2 text-text-secondary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all"
                            title="Download PDF"
                          >
                            <Download size={20} />
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {files.length === 0 && (
            <div className="text-center py-20 bg-bg-main rounded-3xl border border-dashed border-border-brand">
              <File className="mx-auto text-text-secondary mb-4 opacity-20" size={64} />
              <p className="text-text-secondary text-xl">No documents found in this category yet.</p>
              <Link to="/resources" className="mt-4 text-accent font-bold underline inline-block">
                Return to Resources
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourceCategoryDetail;
