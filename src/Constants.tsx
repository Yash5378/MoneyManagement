export const Colors = {
  primaryColor: "#206BB6",
  tabIconDefault: "#B8B8B8",
  tabBarBorderDefault: "#BBBBBB",
};

export const RUPEE_SYMBOL = "₹";

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
