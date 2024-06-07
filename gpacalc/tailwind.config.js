/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
        extend: { 
            fontFamily: { 
                'days-one': ['Days One', 'sans-serif'],
                'aldrich': ['Aldrich', 'sans-serif'],
                'mukta-vaani': ['Mukta Vaani', 'sans-serif']
            },
            colors: {
              'rhino': "#313f69",
            },      
        }, 
        placeholderColor: {
               'primary': '#E57200',
        },
    }, 
  plugins: [],
}

