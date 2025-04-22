import { useState } from 'react';

interface ButtonsProps {
  count?: number;
}

const Buttons: React.FC<ButtonsProps> = ({ count = 5 }) => {

  const [counters, setCounters] = useState<number[]>(Array(count).fill(0));

  const [lastClickedIndex, setLastClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const newCounters = [...counters];
    newCounters[index] += 1; 
    setCounters(newCounters); 

    setLastClickedIndex(index); 
  };

  return (
    <div>
      {counters.map((count, index) => (
        <button
          key={index}
          className={`btn m-1 ${lastClickedIndex === index ? 'btn-success' : 'btn-primary'}`}
          onClick={() => handleClick(index)}
        >
          {count}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
