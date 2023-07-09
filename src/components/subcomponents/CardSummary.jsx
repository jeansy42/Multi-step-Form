import { useGlobalContext } from "../../context/useGlobalContext";

function CardSummary({service,price}) {
  const { toggle } = useGlobalContext();
  return (
    <div className="summary_card">
      <h4>{service}</h4>
      <span>{`+$${toggle ? price*10 : price}/${toggle ? 'yr' : 'mo'}`}</span>
    </div>
  );
}

export default CardSummary;
