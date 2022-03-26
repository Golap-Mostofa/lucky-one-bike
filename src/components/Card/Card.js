
import './Card.css'
import { FaTrash} from 'react-icons/fa';
const Card = (props) => {
   
   const clearData=()=>{
       
   }
   
    
    
    return (
        <div className='order-samary'>
           <div className='samary'>
           <h2 >0rder samary</h2>
            <h4>selected item: {props.card.length}</h4>
           </div>
            {
                //  props.card.map(pd=> <p>name: {pd.Name} </p>)
                 props.card.map(pd=>{
                     return (
                         <div className='product-info'>
                             <p>Name: {pd.Name}</p>
                             <div className='item-logo'>
                             <img src={pd.img} alt="" />
                             <FaTrash className='icone'></FaTrash>
                             </div>
                         </div>
                     )
                 } )
            }
           <div className="btn-group">
           <button className='btn1' onClick={clearData}><p>Select</p></button>
           <button className='btn2'><a href="">clear all</a></button>
           </div>
        </div>
    );
};

export default Card;