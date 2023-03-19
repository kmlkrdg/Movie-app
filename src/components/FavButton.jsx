import { IconStar } from '@tabler/icons-react';
import { useState } from 'react';

function FavButton() {
  const [isFav, setIsFav] = useState(false);

  const color = isFav ? 'yellow' : 'white';

  return (
    <div className='cursor-pointer' onClick={() => setIsFav((prev) => !prev)}>
      <IconStar size={28} color={color} {...(isFav ? { fill: color } : {})} />
    </div>
  );
}

export default FavButton;
