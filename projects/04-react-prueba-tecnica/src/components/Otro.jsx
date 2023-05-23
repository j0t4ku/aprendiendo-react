import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Random Fact' })
  return (
    <>
      {imageUrl && (<img src={imageUrl} alt='Random Image test component' />)}
    </>
  )
}
