import { darken, lighten } from "polished";

export const getContrastColor = (color: string) => {
    // Converter a cor hexadecimal para um valor numérico
    const hexColor = color.replace('#', '');
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
  
    // Calcular a média dos valores de cor para determinar a luminosidade
    const luminance = (r + g + b) / 3;
  
    // Definir limites de luminosidade para decidir quando usar cor mais clara ou escura
    const darkThreshold = 128; 
  
    // Escolher a cor com base na luminosidade
    if (luminance <= darkThreshold) {
      return lighten(0.5, color);
    } else {
      return darken(0.5, color); 
    }
  };

  export const formatDateToEurope = (dateString: string): string => {
    return dateString
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }