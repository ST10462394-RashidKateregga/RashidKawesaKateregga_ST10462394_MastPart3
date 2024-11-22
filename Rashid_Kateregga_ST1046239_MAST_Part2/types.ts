export type RootStackParamList = {
  Home: { newItem?: { dishName: string; description: string; course: string; price: number }[] };  // Home expects 'newItem' (array of menu items)
  AddMenu: { newItem?: { dishName: string; description: string; course: string; price: number }[] };  // AddMenu now expects 'newItem' (optional)
  FilterMenu: { menuItems?: { dishName: string; description: string; course: string; price: number }[] };  // FilterMenu expects 'menuItems' (optional)
  Menus: { newItem?: { dishName: string; description: string; course: string; price: number }[] };  // Menus now expects 'newItem' (optional)
};
