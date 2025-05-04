interface ChangeDurationProps {
  onUpdate: (value: number) => void;
}

const ChangeDuration = ({ onUpdate }: ChangeDurationProps) => {
  return (
      <select
          className="duration-select"
          onChange={(e) => onUpdate(parseInt(e.target.value) * 60)}
      >
        {Array.from({ length: 55 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
        ))}
      </select>
  );
};

export default ChangeDuration;
