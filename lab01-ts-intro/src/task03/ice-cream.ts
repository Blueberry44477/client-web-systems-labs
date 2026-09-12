type IceCreamSize = "small" | "large";
type Topping = "chocolate" | "caramel" | "berries";

interface IceCreamOrder {
  size: IceCreamSize;
  toppings: Topping[];
  hasMarshmallow: boolean;
}

const SIZE_PRICES: Record<IceCreamSize, number> = {
  small: 10,
  large: 25,
};

const TOPPING_PRICES: Record<Topping, number> = {
  chocolate: 5,
  caramel: 6,
  berries: 10,
};

const MARSHMALLOW_PRICE = 5;

function calculateIceCreamCost(order: IceCreamOrder): number {
  if (order.toppings.length === 0) {
    throw new Error("Необхідно обрати хоча б одну начинку.");
  }

  const basePrice = SIZE_PRICES[order.size];
  const toppingsPrice = order.toppings.reduce(
    (sum, topping) => sum + TOPPING_PRICES[topping], 0);
  const marshmallowPrice = order.hasMarshmallow ? MARSHMALLOW_PRICE : 0;

  return basePrice + toppingsPrice + marshmallowPrice;
}

enum SIZE {
  "Small" = 1,
  "Large"
}

enum TOPPING {
  Chocolate = "1",
  Caramel = "2",
  Berries = "3",
}

function getOrder(): IceCreamOrder | null {
  const sizeInput = prompt(
    `Choose ice cream size:
    ${SIZE.Small} - Small (10 grn);
    ${SIZE.Large} - Large (25 grn).`
  );

  let size: IceCreamSize;
  switch(sizeInput) {
    case String(SIZE.Small):
      size = "small";
      break;
    case String(SIZE.Large):
      size = "large";
      break;
    default:
      alert("Not right");
      return null;
  }

  const toppingsInput = prompt(
    `Choose toppings separated by comma (at least one):
    ${TOPPING.Chocolate} - Chocolate (+5 grn);
    ${TOPPING.Caramel} - Caramel (+6 grn);
    ${TOPPING.Berries} - Berries (+10 grn);
    Example: 1, 3`
  );

  if (!toppingsInput) {
    alert("You must select at least one.");
    return null;
  }

  const toppingKeys = toppingsInput.split(",").map((item) => item.trim());
  const selectedToppings: Topping[] = [];

  for (const key of toppingKeys) {
    switch (key) {
      case TOPPING.Chocolate:
        selectedToppings.push("chocolate");
        break;
      case TOPPING.Caramel:
        selectedToppings.push("caramel");
        break;
      case TOPPING.Berries:
        selectedToppings.push("berries");
        break;
    }
  }

  if (selectedToppings.length === 0) {
    alert("No topping selected.");
    return null;
  }

  const marshmallowInput = prompt(
    "Add marshmallow (+5 grn)?\n1 - Yes\nAny other - No"
  );
  const hasMarshmallow = marshmallowInput === "1";

  return {
    size,
    toppings: selectedToppings,
    hasMarshmallow,
  };
}

const order = getOrder();

if (order) {
  const totalCost = calculateIceCreamCost(order);
  alert(`Grand total: ${totalCost} grn`);
}
