
//Card bileşenine her bir product'ı prop olarak gönderiyoruz.Ürün bilgileri (name, description, price, image) product prop'undan alınarak JSX içinde görüntülenir.


const Card = ({product}) => {
  return (
    <div className="product-card">
    
            <h3 className="price">{product.price}</h3>
            <img src={product.image} alt=""/>
            <h2 className="card-over">{product.title}</h2>
      
    </div>
  );
};

export default Card;