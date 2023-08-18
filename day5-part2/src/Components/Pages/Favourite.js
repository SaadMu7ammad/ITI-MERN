import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function Favourite() {
  var CartShow=useSelector((state)=>state.AddFavSlice.cart)
  return (
    <>
    <div className="FilmsContainer">
      {CartShow
        ? CartShow.map((item, index) => <Card key={index} data={[item,true]}/>)
        : null}
    </div>
  </>
  )
}

export default Favourite