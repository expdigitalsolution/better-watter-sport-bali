tailwind.config = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        // xs: '420px',
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],  
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "blue-100": "#80CAFF",
        "blue-200": "#00538F",
        black: "#1E1E1E",
        "light-text": "#838383",
        "dark-text": "#D4D4D4",
        "gray": "#919191"
      },
      backgroundColor: {
        "blue-100": "#80CAFF",
        "blue-200": "#00538F",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
 
};
