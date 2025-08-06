export const getOptions = color => {
  const dynamicFields = []
  switch (color) {
    case 'mainColors':
      dynamicFields.push(
        { name: 'Noche', class: 'bg-principal', hover: 'hover:opacity-80' },
        { name: 'Rosa', class: 'bg-rose-500', hover: 'hover:opacity-80' },
        { name: 'Esmeralda', class: 'bg-emerald-500', hover: 'hover:opacity-80' },
        { name: 'Azul', class: 'bg-blue-500', hover: 'hover:opacity-80' },
        { name: 'Amarillo', class: 'bg-yellow-500', hover: 'hover:opacity-80' },
        { name: 'Gris', class: 'bg-slate-500', hover: 'hover:opacity-80' },
      )
      break

    case 'fullColors':
      dynamicFields.push(
        { name: 'Gris', class: 'bg-gray-500', hover: 'hover:opacity-80' },
        { name: 'Rojo', class: 'bg-red-500', hover: 'hover:opacity-80' },
        { name: 'Noche', class: 'bg-principal', hover: 'hover:opacity-80' },
        { name: 'Rosa', class: 'bg-rose-500', hover: 'hover:opacity-80' },
        { name: 'Esmeralda', class: 'bg-emerald-500', hover: 'hover:opacity-80' },
        { name: 'Azul', class: 'bg-blue-500', hover: 'hover:opacity-80' },
        { name: 'Pr', class: 'bg-slate-500', hover: 'hover:opacity-80' },
        { name: 'Naranja', class: 'bg-orange-500', hover: 'hover:opacity-80' },
        { name: 'Lima', class: 'bg-lime-500', hover: 'hover:opacity-80' },
        { name: 'Morado', class: 'bg-purple-500', hover: 'hover:opacity-80' },
      )
      break

    case 'avatarImage':
      dynamicFields.push(
        { name: 'Batman', class: 'avatars/avatar1.svg', hover: '@garmstrong' },
        { name: 'Harley', class: 'avatars/avatar2.svg', hover: '@garmstrong' },
        { name: 'Jason', class: 'avatars/avatar3.svg', hover: '@garmstrong' },
        { name: 'Hombre', class: 'avatars/avatar4.svg', hover: '@garmstrong' },
        { name: 'Mascara', class: 'avatars/avatar5.svg', hover: '@garmstrong' },
        { name: 'Termo', class: 'avatars/avatar6.svg', hover: '@garmstrong' },
        { name: 'Marylin', class: 'avatars/avatar7.svg', hover: '@garmstrong' },
        { name: 'Mujer', class: 'avatars/avatar8.svg', hover: '@garmstrong' },
        { name: 'Pinocho', class: 'avatars/avatar9.svg', hover: '@garmstrong' },
      )
      break

    default:
      break
  }

  return dynamicFields
}
