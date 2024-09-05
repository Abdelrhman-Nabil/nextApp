import { Fragment } from "react";
import "./productData.css"
const PostDetails=async({productId})=>{
 
    const response=await fetch(`https://ecommerce-backend-i2px.onrender.com/api/product/product/${productId}`,
        {next:{
            revalidate:60
        }});
      const post=await response.json()
      const {title,price,details,image,color}=post.product
    return (
      <Fragment>
      <div className="frist-half">
        <div className="productPreview-container">
          <div className="images-contianer">
            <div className="image-Card">
              <div className="frist-image">
                {<img src={`https://ecommerce-backend-i2px.onrender.com/${image[0]}`} alt={title}/>}
              </div>
              <div className="other-image">
              {<img src={`https://ecommerce-backend-i2px.onrender.com/${image[1]}`} alt={title}/>}
              {<img src={`https://ecommerce-backend-i2px.onrender.com/${image[2]}`} alt={title}/>}
              {<img src={`https://ecommerce-backend-i2px.onrender.com/${image[3]}`} alt={title}/>}
              </div>
            </div>
          </div>
          <div className="product-Data">
            <h1>{title}</h1>
            <p className="p-product">{details}</p>
            <p className="p-product">Available color is: {color}</p>
            <div>
              <h2>{price} $</h2>
              <div className="p-product-button">
              <button >
                Add To Cart
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
)
}
export default PostDetails