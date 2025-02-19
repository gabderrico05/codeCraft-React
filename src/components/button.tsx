interface ButtonProps {
  text?: string
}


export function Button(props: ButtonProps)  {
  return <button className="bg-gray-100 px-5 py-2 rounded-xl">{props.text || 'Botão'}</button>
}