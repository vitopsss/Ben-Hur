import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Precisa de ajuda? Fale conosco!
        {/* Triangle pointer */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white"></span>
      </span>
      
      {/* Ping animation for attention */}
      <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-20"></span>
    </motion.a>
  );
}
