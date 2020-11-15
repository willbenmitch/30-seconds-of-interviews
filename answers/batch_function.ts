/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`


// 0 batches can be made
batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
  batches(
      { milk: 100, flour: 4, sugar: 10, butter: 5 },
      { milk: 1288, flour: 9, sugar: 95 }
  )
  
  // 1 batch can be made
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
  
  // 2 batches can be made
  batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )
  */

const cakeBatchRecipe = { milk: 100, butter: 50, flour: 5 }
const cakeBatchPantry = { milk: 132, butter: 48, flour: 51 }

const muffinBatchRecipe = { milk: 100, flour: 4, sugar: 10, butter: 5 }
const muffinBatchPantry = { milk: 1288, flour: 9, sugar: 95 }

const cookieBatchRecipe = { milk: 100, butter: 50, cheese: 10 }
const cookieBatchPantry = { milk: 198, butter: 52, cheese: 10 }

const sconeBatchRecipe = { milk: 2, sugar: 40, butter: 20 }
const sconeBatchPantry = { milk: 5, sugar: 120, butter: 500 }

type GenericRecipeObject = { [key: string]: number }

const getBatchesFromRecipeAndIngredients = (
  recipe: GenericRecipeObject,
  pantry: GenericRecipeObject
) => {
  const batches: number[] = []
  for (const ingredient in recipe) {
    // check if ingredient is in stock
    if (!(ingredient in pantry)) {
      return 0
    }

    // gather what's in the recipe and what's in the pantry
    const recipeCount = recipe[ingredient]
    const pantryCount = pantry[ingredient]

    if (recipeCount !== 0 && pantryCount === 0) {
      // handle potential divide by zero errors
      return 0
    }

    batches.push(Math.floor(pantryCount / recipeCount))
  }

  return Math.min(...batches)
}

console.assert(
  getBatchesFromRecipeAndIngredients(cakeBatchRecipe, cakeBatchPantry) === 0,
  `cake assertion failed with ${getBatchesFromRecipeAndIngredients(
    cakeBatchRecipe,
    cakeBatchPantry
  )}`
)
console.assert(
  getBatchesFromRecipeAndIngredients(muffinBatchRecipe, muffinBatchPantry) ===
        0,
  `muffin assertion failed with ${getBatchesFromRecipeAndIngredients(
    muffinBatchRecipe,
    muffinBatchPantry
  )}`
)
console.assert(
  getBatchesFromRecipeAndIngredients(cookieBatchRecipe, cookieBatchPantry) ===
        1,
  `cookie assertion failed with ${getBatchesFromRecipeAndIngredients(
    cookieBatchRecipe,
    cookieBatchPantry
  )}`
)
console.assert(
  getBatchesFromRecipeAndIngredients(sconeBatchRecipe, sconeBatchPantry) ===
        2,
  `scone assertion failed with ${getBatchesFromRecipeAndIngredients(
    sconeBatchRecipe,
    sconeBatchPantry
  )}`
)
