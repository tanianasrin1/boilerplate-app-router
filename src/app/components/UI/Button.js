// src/app/components/UI/Button.jsx
export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700',
    success: 'bg-gradient-to-r from-[#4c9d40] via-[#3a8b3c] to-[#166931]  hover:scale-105',
    danger: 'bg-red-600 hover:bg-red-700',
    warning: 'bg-yellow-600 hover:bg-yellow-700',
  };
  
  return (
    <button 
      className={`${variants[variant]} text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}