// Private variables
let zpadAmount = 2;
let zpadCharacter = '0';

// Functions
export function zpad (number: number | string, amount?: number, character?: number | string): string {
  // Set default variables
  if (!amount) amount = zpadAmount;
  if (!character) character = zpadCharacter;

  // Create response
  let response = number.toString();
  amount -= response.length;
  while (amount-- > 0) response = character.toString() + response;

  return response;
}

// Set default amount
export function amount (amount: number): typeof zpad {
  zpadAmount = amount;
  return zpad;
}

// Set default character
export function character (character: number | string): typeof zpad {
  zpadCharacter = character.toString();
  return zpad;
}

// Export zpad as default function
export default zpad;
