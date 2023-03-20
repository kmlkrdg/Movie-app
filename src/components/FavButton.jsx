import { IconStar } from '@tabler/icons-react';
import { useState } from 'react';

function FavButton() {     //Burada Fav butonuna renk verme ve çalışma prensibini tanımladık.
  const [isFav, setIsFav] = useState(false);

  const color = isFav ? 'red' : 'red';

  return (
    <div className='cursor-pointer' onClick={() => setIsFav((prev) => !prev)}>
      <IconStar size={28} color={color} {...(isFav ? { fill: color } : {})} />
    </div>
  );
}
export default FavButton;
